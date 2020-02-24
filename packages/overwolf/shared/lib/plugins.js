export const loadLoLStartPlugin = function() {
  return new Promise((resolve, reject) => {
    overwolf.extensions.current.getExtraObject('lol-start-plugin', result => {
      if (result.status !== 'success') {
        reject('Can not load lol-start-plugin');
      } else {
        resolve(result.object);
      }
    });
  });
};

export const loadSimpleIOPlugin = function() {
  return new Promise((resolve, reject) => {
    overwolf.extensions.current.getExtraObject('simple-io-plugin', result => {
      if (result.status !== 'success') {
        reject('Can not load simple-io-plugin');
      } else {
        resolve(result.object);
      }
    });
  });
};

export const loadHttpRequestPlugin = function() {
  return new Promise((resolve, reject) => {
    overwolf.extensions.current.getExtraObject('http-request-plugin', result => {
      if (result.status !== 'success') {
        reject('Can not load http-request-plugin');
      } else {
        resolve(result.object);
      }
    });
  });
};
