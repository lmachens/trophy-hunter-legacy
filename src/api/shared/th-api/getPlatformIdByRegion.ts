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

const getPlatformIdByRegion = region => {
  const lowerCaseRegion = region.toLowerCase();
  return regionToPlatformId[lowerCaseRegion] || lowerCaseRegion;
};

export default getPlatformIdByRegion;
