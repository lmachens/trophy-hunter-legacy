const lolId = 5426;

const gameRunning = function(gameInfo) {
  console.log(`gameRunning ${gameInfo && gameInfo.id}`);

  if (!gameInfo || !gameInfo.isRunning) {
    return false;
  }

  // NOTE: we divide by 10 to get the game class id without it's sequence number
  if (Math.floor(gameInfo.id / 10) !== lolId) {
    return false;
  }

  console.log('LoL running');
  return true;
};

export const isLoLRunning = function() {
  return new Promise(resolve => {
    overwolf.games.getRunningGameInfo(function(res) {
      resolve(gameRunning(res));
    });
  });
};

export const addGameLaunchedListener = listener => {
  overwolf.games.onGameLaunched.addListener(listener);
};

export const addGameInfoUpdatedListener = listener => {
  overwolf.games.onGameInfoUpdated.addListener(listener);
};

export const trackGameInfo = ({ gameLaunchedCallback, gameTerminatedCallback }) => {
  const gameLaunchedListener = ({ id }) => {
    if (Math.floor(id / 10) !== lolId) return;

    gameLaunchedCallback();
  };
  const gameInfoUpdatedListener = ({ runningChanged, gameInfo }) => {
    if (!runningChanged) return;
    if (Math.floor(gameInfo.id / 10) !== lolId) return;
    if (!gameInfo.isRunning) {
      gameTerminatedCallback();
    }
  };

  addGameLaunchedListener(gameLaunchedListener);
  addGameInfoUpdatedListener(gameInfoUpdatedListener);
};
