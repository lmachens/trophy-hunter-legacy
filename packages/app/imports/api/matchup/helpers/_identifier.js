export const createMatchupMatchesIdentifier = ({ champ1Id, champ2Id, mapId }) => {
  return champ1Id > champ2Id
    ? `${champ2Id}&${champ1Id}&${mapId}`
    : `${champ1Id}&${champ2Id}&${mapId}`;
};
