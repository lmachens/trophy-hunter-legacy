let init = (() => {
  var _ref = _asyncToGenerator(function* () {
    if (initialized) return;
    initialized = true;

    // remove spinner and close button
    var loading = document.getElementById('loading');
    if (loading) {
      loading.parentNode.removeChild(loading);
    }

    overwolf.games.events.onError.removeListener(onError);
    overwolf.games.events.onError.addListener(onError);

    startLoLPlugin = yield loadLoLStartPlugin();
    const httpRequest = yield loadHttpRequestPlugin();
    const simpleIO = yield loadSimpleIOPlugin();
    new LauncherListener({
      identifier: 'index',
      simpleIO,
      httpRequest,
      listeners: {
        summonerInfo: handleSummonerInfoChange,
        lobby: handleLobbyChange,
        champSelect: handleChampSelectChange,
        gameLaunched: handleGameLaunched
      }
    });

    const ingame = yield isLoLRunning();
    if (ingame) {
      source.postMessage({
        overwolf: true,
        type: 'startMatch'
      }, settings.domain);
    } else {
      source.postMessage({
        overwolf: true,
        type: 'notInGame'
      }, settings.domain);
    }
  });

  return function init() {
    return _ref.apply(this, arguments);
  };
})();

let handleSummonerInfoChange = (() => {
  var _ref2 = _asyncToGenerator(function* (summonerInfo) {
    console.log('handleSummonerInfoChange', summonerInfo);
    if (summonerInfo) {
      const overwolfUser = yield getOverwolfUser();
      const message = Object.assign({ overwolfUser }, summonerInfo);
      source.postMessage({
        overwolf: true,
        type: 'login',
        message
      }, settings.domain);

      localStorage.setItem('summonerInfo', JSON.stringify(summonerInfo));
    }
  });

  return function handleSummonerInfoChange(_x) {
    return _ref2.apply(this, arguments);
  };
})();

let handleLoginStateChanged = (() => {
  var _ref3 = _asyncToGenerator(function* () {
    const overwolfUser = yield getOverwolfUser();
    console.log('handleLoginStateChanged', overwolfUser);
    source.postMessage({
      overwolf: true,
      type: 'overwolfUser',
      message: { overwolfUser }
    }, settings.domain);
  });

  return function handleLoginStateChanged() {
    return _ref3.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { avoidMoreAds, hideAds, showAds } from '../lib/ads.js';
import { closeWindow, openWindow } from '../lib/windows.js';
import { loadLoLStartPlugin, loadHttpRequestPlugin, loadSimpleIOPlugin } from '../lib/plugins.js';
import { setSource, source } from '../lib/core.js';

import LauncherListener from '../lib/launcherListener.js';
import { getOverwolfUser } from '../lib/utilities.js';
import { isLoLRunning } from '../lib/runningGame.js';
import settings from '../../settings.js';

console.log(`Trophy Hunter - ${settings.name}`);

document.getElementById('app').src = settings.domain;

let startLoLPlugin;
let initialized = false;

overwolf.profile.onLoginStateChanged.addListener(handleLoginStateChanged);

function handleLobbyChange(lobby) {
  console.log('handleLobbyChange', lobby);
  if (lobby) {
    source.postMessage({
      overwolf: true,
      type: 'lobby',
      message: lobby
    }, settings.domain);
  }
}

function handleChampSelectChange(champSelect) {
  console.log('handleChampSelectChange', champSelect);
  if (champSelect) {
    source.postMessage({
      overwolf: true,
      type: 'champSelect',
      message: champSelect
    }, settings.domain);
  }
}

function handleGameLaunched(gameLaunched) {
  console.log('handleGameLaunched', gameLaunched);
  if (gameLaunched) {
    source.postMessage({
      overwolf: true,
      type: 'startMatch'
    }, settings.domain);
  } else {
    closeWindow('OverlayWindow');
    source.postMessage({
      overwolf: true,
      type: 'matchOutcome'
    }, settings.domain);
    // restore window after a few seconds
    setTimeout(_asyncToGenerator(function* () {
      yield openWindow('MainWindow');
    }), 1000);
  }
}

function onError(info) {
  console.log('Error: ', JSON.stringify(info));
}

overwolf.settings.registerHotKey(settings.overlayHotkey, arg => {
  if (arg.status == 'success' && source) {
    overwolf.windows.obtainDeclaredWindow('OverlayWindow', function (result) {
      if (result.status == 'success') {
        if (result.window.isVisible) {
          overwolf.windows.hide(result.window.id);
        } else {
          overwolf.windows.restore(result.window.id);
        }
      }
    });
  }
});

function receiveMessage(event) {
  if (event.origin !== settings.domain) {
    return;
  }
  var data = event.data;

  if (data.overwolf) {
    const { type, message } = data;

    switch (type) {
      case 'initialized':
        setSource(event.source);
        init();
        break;

      case 'hideWindow':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.minimize(result.window.id, () => {});
          }
        });
        break;

      case 'close':
        overwolf.windows.close('ControllerWindow');
        break;

      case 'mouseDown':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.dragMove(result.window.id);
          }
        });
        break;

      case 'showOverlay':
        openWindow('OverlayWindow');
        break;

      case 'showAds':
        showAds();
        break;

      case 'hideAds':
        hideAds();
        break;

      case 'avoidMoreAds':
        avoidMoreAds();
        break;

      case 'specatate':
        {
          const { port, encryptionKey, matchId, platformId } = message;
          startLoLPlugin.StartLoL(settings.domain, port.toString(), encryptionKey, matchId.toString(), platformId, result => {
            source.postMessage({
              overwolf: true,
              type: 'specatateCallback',
              message: result
            }, settings.domain);
          });
        }
        break;

      case 'openHotkeys':
        window.location = 'overwolf://settings/hotkeys#trophy_hunter_overlay';
        break;

      case 'openUrlInDefaultBrowser':
        overwolf.utils.openUrlInDefaultBrowser(message);
        break;

      case 'showHelp':
        openHelp();
        break;

      default:
        console.log(`deprecated call ${type}`);
        break;
    }
  }
}

window.addEventListener('message', receiveMessage, false);

function openSettings() {
  source.postMessage({
    overwolf: true,
    type: 'openSettings'
  }, settings.domain);
}
window.openSettings = openSettings;

function openHelp() {
  source.postMessage({
    overwolf: true,
    type: 'openHelp'
  }, settings.domain);
}
window.openHelp = openHelp;

function reconnect() {
  const error = document.getElementById('error');
  error.style = 'display: none';

  const connecting = document.getElementById('connecting');
  connecting.style = 'display: block';

  const iframe = document.getElementById('app');
  const tempSrc = iframe.src;
  iframe.src = tempSrc;

  setTimeout(validateInitialization, 10000);
}
window.reconnect = reconnect;

const validateInitialization = () => {
  if (!initialized) {
    const connecting = document.getElementById('connecting');
    connecting.style = 'display: none';

    const error = document.getElementById('error');
    error.style = 'display: block';
  }
};

setTimeout(validateInitialization, 10000);