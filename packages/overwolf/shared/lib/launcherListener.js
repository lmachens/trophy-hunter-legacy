import { trackGameInfo } from './runningGame.js';

const isFunction = function(obj) {
  return typeof obj === 'function';
};

const events = ['loggedIn', 'summonerInfo', 'lobby', 'champSelect', 'gameLaunched'];

const leagueClientUxProcessName = 'LeagueClientUx';
const leagueClientLogFileIdentifier = 'LeagueClient.log';
const lolLauncherId = 109021;
class LauncherListener {
  constructor({ httpRequest, simpleIO, listeners, identifier }) {
    if (!simpleIO) {
      throw new Error('simpleIO are required');
    }
    if (!httpRequest) {
      throw new Error('httpRequest is required');
    }
    this.httpRequest = httpRequest;

    this.simpleIO = simpleIO;
    this.leagueClientLogFileIdentifier = `${leagueClientLogFileIdentifier}-${identifier}`;

    overwolf.games.launchers.getRunningLaunchersInfo(this.handleRunningLaunchersInfo);
    overwolf.games.launchers.onLaunched.addListener(this.handleLaunched);
    //overwolf.games.launchers.onUpdated.addListener(this.handleUpdated);
    overwolf.games.launchers.onTerminated.addListener(this.handleTerminated);

    this.listeners = new Map();
    Object.entries(listeners).forEach(([key, callback]) => {
      this.addListener(key, callback);
    });
    this.state = {};

    this.trackGameInfo();
    console.log('LauncherListener initialized');
  }

  trackGameInfo = () => {
    // In addition to the log file reader, make use of the Overwolf events.
    trackGameInfo({
      gameLaunchedCallback: () => {
        this.setState({
          gameLaunched: true
        });
      },
      gameTerminatedCallback: () => {
        this.setState({
          gameLaunched: false
        });
      }
    });
  };

  addListener = (label, callback) => {
    if (!events.includes(label)) {
      throw new Error(`event ${label} is invalid`);
    }
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  };

  removeListener = (label, callback) => {
    const listeners = this.listeners.get(label);
    let index;

    if (listeners && listeners.length) {
      index = listeners.reduce((i, listener, index) => {
        return isFunction(listener) && listener === callback ? (i = index) : i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this.listeners.set(label, listeners);
        return true;
      }
    }
    return false;
  };

  emit = (label, ...args) => {
    const listeners = this.listeners.get(label);

    if (listeners && listeners.length) {
      listeners.forEach(listener => {
        listener(...args);
      });
      return true;
    }
    return false;
  };

  destroy = () => {
    this.activeListening = false;

    overwolf.games.launchers.onLaunched.removeListener(this.handleLaunched);
    //overwolf.games.launchers.onUpdated.removeListener(this.handleUpdated);
    overwolf.games.launchers.onTerminated.removeListener(this.handleTerminated);

    this.simpleIO.stopFileListen(this.leagueClientLogFileIdentifier);
    this.simpleIO.stopProcesseListen(leagueClientUxProcessName, () => {});
    this.simpleIO.onFileListenerChanged.removeListener(this.handleLeagueClientChange);
    clearInterval(this.listenToNewLogFileInterval);

    console.log('destroyed launcher listener');
  };

  handleRunningLaunchersInfo = ({ launchers }) => {
    console.log(`handleRunningLaunchersInfo ${JSON.stringify(launchers)}`);
    const launcher = launchers.find(launcher => launcher.id === lolLauncherId);
    if (!launcher) {
      return;
    }
    if (launcher.path.includes('/PBE/')) {
      console.error('PBE is not supported');
      return;
    }
    this.initializeListening(launcher);
  };

  handleLaunched = launcher => {
    console.log(`handleLaunched ${launcher.id}`);

    if (launcher.id !== lolLauncherId) {
      return;
    }

    this.initializeListening(launcher);
  };

  handleUpdated = launcher => {
    console.log(`handleUpdated ${JSON.stringify(launcher)}`);
  };

  handleTerminated = launcher => {
    this.activeListening = false;

    this.simpleIO.stopFileListen(this.leagueClientLogFileIdentifier);
    this.simpleIO.stopProcesseListen(leagueClientUxProcessName, () => {});
    this.simpleIO.onFileListenerChanged.removeListener(this.handleLeagueClientChange);

    clearInterval(this.listenToNewLogFileInterval);
    console.log(`handleTerminated ${JSON.stringify(launcher)}`);
  };

  initializeListening = async launcher => {
    if (this.activeListening) {
      return;
    }
    this.activeListening = true;
    console.log(`initializeListening ${launcher.path}`);
    const rads = launcher.path.lastIndexOf('/RADS/');
    const index = rads === -1 ? launcher.path.lastIndexOf('/LeagueClientUx') + 1 : rads + 1;
    const installPath = launcher.path.substr(0, index);
    console.log(`install path: ${installPath}`);
    this.simpleIO.onFileListenerChanged.addListener(this.handleLeagueClientChange);

    const leagueClientLogDirectory = `${installPath}Logs/LeagueClient Logs/`;

    this.simpleIO.getLatestFileInDirectory(
      `${leagueClientLogDirectory}*LeagueClient.log`,
      (status, filename) => {
        if (status) {
          console.log('The most update file in this folder is: ' + filename);
          this.logFilename = filename;
          this.handleNewLogFile(leagueClientLogDirectory);
        } else {
          console.log(`No file found in ${leagueClientLogDirectory}`);
        }
      }
    );

    this.listenToNewLogFile(leagueClientLogDirectory);

    // LCU
    const args = {};
    const regexp = /--([^=]+)=?([^"]*)/g;
    let match;
    while ((match = regexp.exec(launcher.commandLine)) != null) {
      const [, key, value] = match;
      args[key] = value;
    }

    const password = args['remoting-auth-token'];
    this.port = args['app-port'];

    this.headers = {
      Accept: 'application/json',
      Authorization: `Basic ${btoa(`riot:${password}`)}`
    };
  };

  handleNewLogFile = leagueClientLogDirectory => {
    const leagueClientLogPath = `${leagueClientLogDirectory}${this.logFilename}`;

    if (this.listeners.has('loggedIn') || this.listeners.has('summonerInfo')) {
      this.simpleIO.getTextFile(leagueClientLogPath, false, this.handleLeagueClientLog);
    }

    console.log('start listen on file');
    this.simpleIO.listenOnFile(
      this.leagueClientLogFileIdentifier,
      leagueClientLogPath,
      true,
      this.listenOnLeagueClientChange
    );
  };

  handleLeagueClientLog = (status, data) => {
    if (!status) {
      console.log(
        `handleLeagueClientLog failed to get LeagueClient.txt contents ${JSON.stringify(status)}`
      );
      return;
    }
    this.getSummonerInfo();
  };

  getSummonerInfo = async () => {
    const regionLocale = await this.fetch('riotclient/region-locale');
    if (regionLocale && regionLocale.code === 200) {
      const summoner = await this.fetch('lol-summoner/v1/current-summoner');
      if (summoner && summoner.code === 200 && summoner.body.displayName) {
        this.setState({
          loggedIn: true,
          summonerInfo: {
            accountId: summoner.body.accountId,
            summonerId: summoner.body.summonerId,
            region: regionLocale.body.region,
            locale: regionLocale.body.locale,
            summonerName: summoner.body.displayName
          }
        });
      } else {
        console.log(`Can not fetch summoner -> Try again in five seconds`);
        setTimeout(this.getSummonerInfo, 5000);
      }
    } else {
      console.log(`Can not fetch region`);
    }
  };

  fetch = query => {
    const url = `https://127.0.0.1:${this.port}/${query}`;
    return new Promise(resolve => {
      this.httpRequest.fetch(url, this.headers, (success, result) => {
        if (!success || !result) {
          console.error(`fetch failed: ${url}`);
          resolve();
        } else {
          const { code, body } = result;
          resolve({
            code,
            body: JSON.parse(body)
          });
        }
      });
    });
  };

  listenToNewLogFile = leagueClientLogDirectory => {
    if (this.listenToNewLogFileInterval) return;

    console.log('listenToNewLogFile');
    this.listenToNewLogFileInterval = setInterval(() => {
      this.simpleIO.getLatestFileInDirectory(
        `${leagueClientLogDirectory}*LeagueClient.log`,
        (status, filename) => {
          if (status && this.logFilename !== filename) {
            console.log(`listenToNewLogFile: The most update file in this folder is: ${filename}`);
            this.logFilename = filename;
            this.handleNewLogFile(leagueClientLogDirectory);
          }
        }
      );
    }, 1000);
  };

  listenOnLeagueClientChange = (fileId, status, error) => {
    console.log('listenOnLeagueClientChange');
    if (fileId !== this.leagueClientLogFileIdentifier) {
      return;
    }
    if (!status) {
      return console.log(`something bad happened with ${fileId}: ${JSON.stringify(error)}`);
    }
  };

  handleLeagueClientChange = (id, status, line) => {
    if (
      id === this.leagueClientLogFileIdentifier &&
      (this.listeners.has('loggedIn') ||
        this.listeners.has('champSelect') ||
        this.listeners.has('lobby'))
    ) {
      this.processLogLine(line);
    }
  };

  processLogLine = line => {
    const champSelect = this.getChampSelect(line);
    if (/LOGIN_HIDE_EVENT/.test(line) || /riot__rclient__remove_unneeded_releases/.test(line)) {
      this.getSummonerInfo();
    } else if (champSelect) {
      //console.log('champSelect');
      this.setState({
        champSelect
      });
    } else if (/GAMEFLOW_EVENT.GAME_LAUNCHED/.test(line)) {
      //console.log('GAME_LAUNCHED');
      this.setState({
        gameLaunched: true
      });
    } else if (
      /GAMEFLOW_EVENT.TERMINATED/.test(line) ||
      /GAMEFLOW_EVENT.GAME_COMPLETED/.test(line)
    ) {
      //console.log('TERMINATED/GAME_COMPLETED');
      this.setState({
        gameLaunched: false
      });
    } else if (/Shut down EventCollector/.test(line)) {
      this.handleTerminated('Shut down EventCollector');
      setTimeout(() => {
        overwolf.games.launchers.getRunningLaunchersInfo(this.handleRunningLaunchersInfo);
      }, 1000);
    }
  };

  setState = nextState => {
    this.listeners.forEach((value, key) => {
      if (JSON.stringify(this.state[key]) !== JSON.stringify(nextState[key])) {
        console.log(`setState - emit change ${key} ${JSON.stringify(nextState[key])}`);
        this.emit(key, nextState[key]);
      }
    });
    nextState.receivedAt = Date.now();
    this.state = nextState;
  };

  getChampSelect = line => {
    const champSelect = line.match(/\/lol-champ-select\/v1\/session: (.*)/);
    if (champSelect) {
      try {
        // Sometimes logs are cropped
        let jsonString = champSelect[1].replace(/,"timer".*/, '}');
        jsonString = jsonString.replace(
          /{(.*[[{].+[}\]].*)(,"theirTeam":\[({[^\]]+})).*/,
          '{$1$2]}'
        );
        const parsed = JSON.parse(jsonString);
        return parsed;
      } catch (error) {
        console.error(error);
        return false;
      }
    }
    return false;
  };
}

export default LauncherListener;
