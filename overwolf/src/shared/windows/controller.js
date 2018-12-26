import LauncherListener from '../lib/launcherListener.js';
import { isLoLRunning } from '../lib/runningGame.js';
import { loadSimpleIOPlugin } from '../lib/plugins.js';
import { openWindow } from '../lib/windows.js';

console.log('Controller Window');

// Check if called by user or by launch event
const launchedByEvent = window.location.search.includes('source=gamelaunchevent');
console.log(`Launched by event: ${launchedByEvent}`);

let launcherListener;
async function init() {
  if (!launchedByEvent) {
    await openWindow('MainWindow');
  } else {
    const simpleIO = await loadSimpleIOPlugin();
    launcherListener = new LauncherListener({
      identifier: 'controller',
      simpleIO,
      listeners: {
        loggedIn: handleLoggedIn
      }
    });
  }

  overwolf.extensions.onAppLaunchTriggered.addListener(handleAppLaunch);
}

init();

function handleLoggedIn() {
  openWindow('MainWindow');
  launcherListener.destroy();
}

async function handleAppLaunch(launcher) {
  // Find out if ingame
  const ingame = await isLoLRunning();
  if (ingame) {
    await openWindow('OverlayWindow');
  }
  await openWindow('MainWindow');
  console.log('handleAppLaunch', ingame, launcher);
}
