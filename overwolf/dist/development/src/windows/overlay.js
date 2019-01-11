/* eslint-disable no-unused-vars */

import settings from '../../settings.js';

console.log(`Trophy Hunter - ${settings.name} Overlay`);

const setOverlayUrl = summonerInfo => {
  let src = settings.overlayDomain;
  if (summonerInfo) {
    const parsed = JSON.parse(summonerInfo);

    if (parsed && parsed.region && parsed.summonerName) {
      src += `/${parsed.region}/${parsed.summonerName}`;
    }
  }
  document.getElementById('app').src = src;
  console.log(`Set iFrame url to ${src}`);
};

setOverlayUrl(localStorage.getItem('summonerInfo'));

window.addEventListener('storage', event => {
  if (event.key === 'summonerInfo') {
    const summonerInfo = event.newValue;
    setOverlayUrl(summonerInfo);
  }
});

let source = undefined;
function receiveMessage(event) {
  if (event.origin !== settings.domain) {
    return;
  }
  var data = event.data;
  console.log('received', data);

  if (data.overwolf) {
    const { type, message } = data;

    switch (type) {
      case 'showWindow':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.restore(result.window.id, () => {});
          }
        });
        break;

      case 'hideWindow':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.minimize(result.window.id, () => {});
          }
        });
        break;

      case 'close':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.close(result.window.id);
          }
        });
        break;

      case 'mouseDown':
        overwolf.windows.getCurrentWindow(function (result) {
          if (result.status == 'success') {
            overwolf.windows.dragMove(result.window.id);
          }
        });
        break;

      case 'initialized':
        initialize(event);
        break;

      case 'openHotkeys':
        window.location = 'overwolf://settings/hotkeys#trophy_hunter_overlay';
        break;

      case 'closeSettings':
        // refresh hotkey
        overwolf.settings.getHotKey(settings.overlayHotkey, function (result) {
          source.postMessage({
            overwolf: true,
            type: 'overlayHotkey',
            message: result.hotkey
          }, settings.domain);
        });
        break;
    }
  }
}

window.addEventListener('message', receiveMessage, false);

function initialize(event) {
  source = event.source;
  // Send app version
  source.postMessage({
    overwolf: true,
    type: 'version',
    message: 1.7
  }, settings.domain);

  overwolf.settings.getHotKey(settings.overlayHotkey, function (result) {
    source.postMessage({
      overwolf: true,
      type: 'overlayHotkey',
      message: result.hotkey
    }, settings.domain);
  });
}