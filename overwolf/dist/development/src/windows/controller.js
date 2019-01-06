let init = (() => {
  var _ref = _asyncToGenerator(function* () {
    if (!launchedByEvent) {
      yield openWindow('MainWindow');
    } else {
      const simpleIO = yield loadSimpleIOPlugin();
      const httpRequest = yield loadHttpRequestPlugin();
      launcherListener = new LauncherListener({
        identifier: 'controller',
        simpleIO,
        httpRequest,
        listeners: {
          loggedIn: handleLoggedIn
        }
      });
    }

    overwolf.extensions.onAppLaunchTriggered.addListener(handleAppLaunch);
  });

  return function init() {
    return _ref.apply(this, arguments);
  };
})();

let handleAppLaunch = (() => {
  var _ref2 = _asyncToGenerator(function* (launcher) {
    // Find out if ingame
    const ingame = yield isLoLRunning();
    if (ingame) {
      yield openWindow('OverlayWindow');
    }
    yield openWindow('MainWindow');
    console.log('handleAppLaunch', ingame, launcher);
  });

  return function handleAppLaunch(_x) {
    return _ref2.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import LauncherListener from '../lib/launcherListener.js';
import { isLoLRunning } from '../lib/runningGame.js';
import { loadSimpleIOPlugin, loadHttpRequestPlugin } from '../lib/plugins.js';
import { openWindow } from '../lib/windows.js';

console.log('Controller Window');

// Check if called by user or by launch event
const launchedByEvent = window.location.search.includes('source=gamelaunchevent');
console.log(`Launched by event: ${launchedByEvent}`);

let launcherListener;


init();

function handleLoggedIn() {
  openWindow('MainWindow');
  launcherListener.destroy();
}