export const sr_earliestWin = {
  name: 'sr_earliestWin',
  title: 'Earliest win Summoners Rift',
  description: 'Earliest win in a game on Summoners Rift (no enemy team resigns).',
  type: 'max',
  property: 'earliestWin' // this becomes a new property because only non-resign game will count for this.
};
