/* globals OwAd */

import settings from '../../settings.js';
import { source } from '../lib/core.js';

let ads = undefined;

overwolf.extensions.onUncaughtException.addListener((message, functionName, scriptName) => {
  console.log('onUncaughtException', message, functionName, scriptName);
  if (message.includes('Cannot read property') || message.includes('VPAIDLoader')) {
    console.log('closed ad');
    adsError();
  }
});

window.onerror = (message, url, line, col, error) => {
  console.log('window.onerror', message, url, line, col, error);
  if (message.includes('adLoadError')) {
    console.log('closed ad');
    adsError();
  }
};

let showAdsInLoop = false;
const ADS_ACTIONS = {
  PLAYER_LOADED: 'PLAYER_LOADED',
  PLAY: 'PLAY',
  IMPRESSION: 'IMPRESSION',
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR',
  SHOW: 'SHOW',
  HIDE: 'HIDE'
};

let adsTimeoutMultiplier = 1;
let lastAction = null;
const handleAdsAction = action => {
  console.log(`Ads ${action} fallback`);
  if (lastAction === action) {
    adsTimeoutMultiplier++;
    console.log('increase ads timeout multiplier', adsTimeoutMultiplier);
  } else {
    adsTimeoutMultiplier = 1;
    lastAction = action;
  }

  if (!showAdsInLoop) {
    hideAds();
  }
  if (ads) {
    refreshAd();
  }
};

const refreshAd = () => {
  console.log('refreshAd');
  ads.refreshAd();
};

let lastAdsTimeout = null;
const setLastAdsAction = action => {
  clearTimeout(lastAdsTimeout);
  if (!ads) return;

  switch (action) {
    case ADS_ACTIONS.PLAYER_LOADED:
      lastAdsTimeout = setTimeout(() => {
        handleAdsAction(action);
      }, 180000 * adsTimeoutMultiplier);
      break;
    case ADS_ACTIONS.ERROR:
      lastAdsTimeout = setTimeout(() => {
        handleAdsAction(action);
      }, 120000 * adsTimeoutMultiplier);
      break;
    case ADS_ACTIONS.PLAY:
      lastAdsTimeout = setTimeout(() => {
        handleAdsAction(action);
      }, 61000 * adsTimeoutMultiplier);
      break;
    case ADS_ACTIONS.IMPRESSION:
      lastAdsTimeout = setTimeout(() => {
        handleAdsAction(action);
      }, 61000 * adsTimeoutMultiplier);
      break;
    case ADS_ACTIONS.COMPLETE:
      lastAdsTimeout = setTimeout(() => {
        handleAdsAction(action);
      }, 180000 * adsTimeoutMultiplier);
      break;
  }
};

const adsPlayerLoaded = (...props) => {
  console.log('adsPlayerLoaded', props);
  setLastAdsAction(ADS_ACTIONS.PLAYER_LOADED);
  source.postMessage(
    {
      overwolf: true,
      type: 'adsPlayerLoaded'
    },
    settings.domain
  );
};

const adsPlay = (...props) => {
  console.log('adsPlay', props);
  var container = document.getElementById('main-ads');
  container.style.display = 'block';
  container.style.pointerEvents = null;
  setLastAdsAction(ADS_ACTIONS.PLAY);
  source.postMessage(
    {
      overwolf: true,
      type: 'adsPlay'
    },
    settings.domain
  );
};

const adsImpression = (...props) => {
  console.log('adsImpression', props);
  if (ads) {
    var button = document.getElementById('main-ads-button');
    button.style.display = 'block';
  }

  setLastAdsAction(ADS_ACTIONS.IMPRESSION);
  source.postMessage(
    {
      overwolf: true,
      type: 'adsImpression'
    },
    settings.domain
  );
};

const adsComplete = (...props) => {
  console.log('adsComplete', props);
  if (!showAdsInLoop) {
    hideAds();
  }
  setLastAdsAction(ADS_ACTIONS.COMPLETE);

  hideCloseButton();

  source.postMessage(
    {
      overwolf: true,
      type: 'adsComplete'
    },
    settings.domain
  );
};

const adsError = (...props) => {
  console.log('adsError', props);
  setLastAdsAction(ADS_ACTIONS.ERROR);

  hideCloseButton();

  source.postMessage(
    {
      overwolf: true,
      type: 'adsError'
    },
    settings.domain
  );
};

const closeAds = () => {
  console.log('closeAds');
  source.postMessage(
    {
      overwolf: true,
      type: 'closeAds'
    },
    settings.domain
  );

  hideAds();
};

window.closeAds = closeAds;

const hideCloseButton = () => {
  // hide close button
  var container = document.getElementById('main-ads');
  container.style.display = 'none';
  container.style.pointerEvents = 'none';
  var button = document.getElementById('main-ads-button');
  button.style.display = 'none';
};

export const showAds = () => {
  console.log(`showAds ads:${!!ads}`);
  showAdsInLoop = true;
  if (!ads) {
    var container = document.getElementById('main-ads');
    var div = document.createElement('div');
    container.appendChild(div);

    ads = new OwAd(div);

    ads.addEventListener('player_loaded', adsPlayerLoaded);
    ads.addEventListener('play', adsPlay);
    ads.addEventListener('impression', adsImpression);
    ads.addEventListener('complete', adsComplete);
    ads.addEventListener('error', adsError);
  }
};
window.showAds = showAds;

export const hideAds = () => {
  console.log('hideAds');
  var container = document.getElementById('main-ads');
  container.style.display = 'none';
  container.style.pointerEvents = 'none';
  var button = document.getElementById('main-ads-button');
  button.style.display = 'none';

  if (ads) {
    ads.removeAd();
    ads = undefined;
  }
};
window.hideAds = hideAds;

export const avoidMoreAds = () => {
  console.log('avoidMoreAds');
  showAdsInLoop = false;
};
window.avoidMoreAds = avoidMoreAds;

// define the event handler
const onWindowStateChanged = state => {
  if (state) {
    // when state changes to minimized, call removeAd()
    if (state.window_state === 'minimized') {
      hideAds();
    }
    // when state changes from minimized to normal, call refreshAd()
    else if (state.window_previous_state === 'minimized' && state.window_state === 'normal') {
      showAds();
    }
  }
};

// call the overwolf api
overwolf.windows.onStateChanged.removeListener(onWindowStateChanged);
overwolf.windows.onStateChanged.addListener(onWindowStateChanged);
