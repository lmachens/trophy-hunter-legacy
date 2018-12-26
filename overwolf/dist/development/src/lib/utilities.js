function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

export const callWithPromise = function (method) {
  return new Promise((resolve, reject) => {
    method(result => {
      if (!result) {
        reject('No results');
      } else {
        resolve(result);
      }
    });
  });
};

export const getOverwolfUser = (() => {
  var _ref = _asyncToGenerator(function* () {
    const currentUser = yield callWithPromise(overwolf.profile.getCurrentUser);
    const manifest = yield callWithPromise(overwolf.extensions.current.getManifest);

    return {
      overwolfVersion: overwolf.version,
      appVersion: manifest.meta.version,
      channel: currentUser.channel,
      userId: currentUser.userId,
      username: currentUser.username,
      partnerId: currentUser.partnerId,
      machineId: currentUser.machineId
    };
  });

  return function getOverwolfUser() {
    return _ref.apply(this, arguments);
  };
})();