export const openWindow = function (windowName) {
  return new Promise((resolve, reject) => {
    overwolf.windows.obtainDeclaredWindow(windowName, result => {
      if (result.status !== 'success') {
        reject();
      } else {
        const windowId = result.window.id;
        overwolf.windows.restore(windowId, result => {
          if (result.status !== 'success') {
            reject();
          } else {
            resolve(windowId);
          }
        });
      }
    });
  });
};

export const closeWindow = function (windowName) {
  return new Promise((resolve, reject) => {
    overwolf.windows.obtainDeclaredWindow(windowName, result => {
      if (result.status !== 'success') {
        reject();
      } else {
        const windowId = result.window.id;
        overwolf.windows.close(windowId, result => {
          if (result.status !== 'success') {
            reject();
          } else {
            resolve(windowId);
          }
        });
      }
    });
  });
};

export const closeApp = function () {
  closeWindow('ControllerWindow');
};

export function dragMove() {
  overwolf.windows.getCurrentWindow(function (result) {
    if (result.status == 'success') {
      overwolf.windows.dragMove(result.window.id);
    }
  });
}

export function minimize() {
  overwolf.windows.getCurrentWindow(function (result) {
    if (result.status == 'success') {
      overwolf.windows.minimize(result.window.id);
    }
  });
}

// Used by html files
window.closeApp = closeApp;
window.dragMove = dragMove;
window.minimize = minimize;