import { trackGameInfo } from './runningGame.js';

const isFunction = function(obj) {
  return typeof obj === 'function';
};

const events = ['loggedIn', 'summonerInfo', 'lobby', 'champSelect', 'gameLaunched'];

const leagueClientUxProcessName = 'LeagueClientUx';
const leagueClientLogFileIdentifier = 'LeagueClient.log';
const lolLauncherId = 109021;
class LauncherListener {
  constructor({ simpleIO, listeners, identifier }) {
    if (!simpleIO) {
      throw new Error('simpleIO are required');
    }
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
    const launcher = launchers.find(launcher => launcher.id === lolLauncherId);
    if (!launcher) {
      return;
    }
    if (launcher.path.includes('/PBE/')) {
      console.error('PBE is not supported');
      return;
    }
    console.log('getRunningLaunchersInfo');
    this.initializeListening(launcher);
  };

  handleLaunched = launcher => {
    if (launcher.id !== lolLauncherId) {
      return;
    }
    console.log('handleLaunched');

    this.initializeListening(launcher);
  };

  handleUpdated = launcher => {
    console.log('handleUpdated', launcher);
  };

  handleTerminated = launcher => {
    this.activeListening = false;

    this.simpleIO.stopFileListen(this.leagueClientLogFileIdentifier);
    this.simpleIO.stopProcesseListen(leagueClientUxProcessName, () => {});
    this.simpleIO.onFileListenerChanged.removeListener(this.handleLeagueClientChange);

    clearInterval(this.listenToNewLogFileInterval);
    console.log('handleTerminated', launcher);
  };

  initializeListening = async launcher => {
    if (this.activeListening) {
      return;
    }
    this.activeListening = true;
    console.log('initializeListening', launcher);
    const installPath = launcher.path.substr(0, launcher.path.lastIndexOf('/RADS/') + 1);

    this.simpleIO.onFileListenerChanged.addListener(this.handleLeagueClientChange);
    this.leagueClientSettingsPath = `${installPath}CONFIG/LeagueClientSettings.yaml`;

    const leagueClientLogDirectory = `${installPath}Logs/LeagueClient Logs/`;
    const filename = await new Promise(resolve => {
      this.simpleIO.getLatestFileInDirectory(
        `${leagueClientLogDirectory}*LeagueClient.log`,
        (status, filename) => {
          if (status) {
            console.log('The most update file in this folder is: ' + filename);
            this.logFilename = filename;
            resolve(filename);
          } else {
            console.log('No file found');
            resolve();
          }
        }
      );
    });
    this.listenToNewLogFile(leagueClientLogDirectory);
    const leagueClientLogPath = `${leagueClientLogDirectory}${filename}`;

    if (this.listeners.has('loggedIn') || this.listeners.has('summonerInfo')) {
      this.simpleIO.getTextFile(leagueClientLogPath, false, this.handleLeagueClientLog);
      this.simpleIO.getTextFile(
        this.leagueClientSettingsPath,
        false,
        this.handleLeagueClientSettings
      );
    }

    if (
      this.listeners.has('loggedIn') ||
      this.listeners.has('champSelect') ||
      this.listeners.has('lobby')
    )
      console.log('start listen on file');
    this.simpleIO.listenOnFile(
      this.leagueClientLogFileIdentifier,
      leagueClientLogPath,
      true,
      this.listenOnLeagueClientChange
    );
  };

  listenToNewLogFile = leagueClientLogDirectory => {
    if (this.listenToNewLogFileInterval) return;

    console.log('listenToNewLogFile');
    this.listenToNewLogFileInterval = setInterval(() => {
      this.simpleIO.getLatestFileInDirectory(
        `${leagueClientLogDirectory}*LeagueClient.log`,
        (status, filename) => {
          if (status && this.logFilename !== filename) {
            console.log('The most update file in this folder is: ' + filename);
            this.logFilename = filename;
          }
        }
      );
    }, 1000);
  };

  handleLeagueClientLog = (status, data) => {
    if (!status) {
      return console.log(
        'handleLeagueClientLog',
        'failed to get LeagueClient.txt contents',
        status
      );
    }
    if (/LOGIN_HIDE_EVENT/.test(data)) {
      this.setState({
        loggedIn: true
      });
    }
  };

  listenOnLeagueClientChange = (fileId, status) => {
    console.log('listenOnLeagueClientChange');
    if (fileId !== this.leagueClientLogFileIdentifier) {
      return;
    }
    if (!status) {
      return console.log('something bad happened with: ' + fileId);
    }
  };

  handleLeagueClientSettings = (status, data) => {
    if (!status) {
      return console.log(
        'handleLeagueClientSettings',
        'failed to get LeagueClientSettings.yaml contents',
        status
      );
    }
    const region = data.match(/region: "(\w+)"/);
    const accountId = data.match(/accountId: (\d+)/);

    if (region && accountId) {
      this.setState({
        summonerInfo: {
          accountId: parseInt(accountId[1]),
          region: region[1]
        }
      });
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
    if (/LOGIN_HIDE_EVENT/.test(line)) {
      //console.log('LOGIN_HIDE_EVENT');
      this.setState({
        loggedIn: true
      });
      this.simpleIO.getTextFile(
        this.leagueClientSettingsPath,
        false,
        this.handleLeagueClientSettings
      );
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
        console.log('setState - emit change', key, nextState[key]);
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
