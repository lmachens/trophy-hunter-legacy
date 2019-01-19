const regionsMap = {
  br1: 'br',
  eun1: 'eune',
  euw1: 'euw',
  jp1: 'jp',
  la1: 'lan',
  la2: 'las',
  na1: 'na',
  oc1: 'oce',
  tr1: 'tr'
};

const normalizeRegion = region => {
  const normalizedRegion = regionsMap[region.toLowerCase()] || region;
  return normalizedRegion.toUpperCase();
};

export default normalizeRegion;
