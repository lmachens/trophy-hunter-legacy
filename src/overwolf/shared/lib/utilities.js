export const callWithPromise = function(method) {
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

export const getOverwolfUser = async function() {
  const currentUser = await callWithPromise(overwolf.profile.getCurrentUser);
  const manifest = await callWithPromise(overwolf.extensions.current.getManifest);

  return {
    overwolfVersion: overwolf.version,
    appVersion: manifest.meta.version,
    channel: currentUser.channel,
    userId: currentUser.userId,
    username: currentUser.username,
    partnerId: currentUser.partnerId,
    machineId: currentUser.machineId
  };
};
