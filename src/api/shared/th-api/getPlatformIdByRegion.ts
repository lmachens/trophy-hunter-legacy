const regionToPlatformId = {
  br: 'br1',
  eune: 'eun1',
  euw: 'euw1',
  jp: 'jp1',
  kr: 'kr',
  lan: 'la1',
  las: 'la2',
  na: 'na1',
  oce: 'oc1',
  tr: 'tr1',
  ru: 'ru',
  pbe: 'pbe1',
  global: 'global'
};

const allPlatformIds = Object.values(regionToPlatformId);

const getPlatformIdByRegion = region => {
  const lowerCaseRegion = region.toLowerCase();
  const platformId = regionToPlatformId[lowerCaseRegion] || lowerCaseRegion;
  if (allPlatformIds.includes(platformId)) {
    return platformId;
  }
  throw `Region ${region} not supported`;
};

export default getPlatformIdByRegion;
