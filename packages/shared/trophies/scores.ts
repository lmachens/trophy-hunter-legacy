const SCORES = {
  SPECIAL: 1,
  EASY: 2,
  MEDIUM: 4,
  HARD: 8,
  VERY_HARD: 16,
  EPIC: 32,
  MASTER: 64,
  GRANDMASTER: 128
};

export default SCORES;

export const defs = {
  [SCORES.SPECIAL]: {
    shadow: '#4282cc',
    gradient: ['#f5f5f5', '#b2b2c8'],
    label: 'Special'
  },
  [SCORES.EASY]: {
    gradient: ['#b2ff62', '#4c8b00'],
    label: 'Easy'
  },
  [SCORES.MEDIUM]: {
    gradient: ['#1ca7ff', '#0e67d6'],
    label: 'Medium'
  },
  [SCORES.HARD]: {
    shadow: '#cc4242',
    gradient: ['#f7ee96', '#bfb11c'],
    label: 'Hard'
  },
  [SCORES.VERY_HARD]: {
    shadow: '#d0021b',
    gradient: ['#f5a623', '#8b572a'],
    label: 'Very Hard'
  },
  [SCORES.EPIC]: {
    shadow: '#9f0013',
    gradient: ['#ff3d3c', '#9e0120'],
    label: 'Epic'
  },
  [SCORES.MASTER]: {
    shadow: '#E38C81',
    gradient: ['#BF58BC', '#C249BE'],
    label: 'Master'
  },
  [SCORES.GRANDMASTER]: {
    shadow: '#E78FCA',
    gradient: ['#CA5BA5', '#C21187'],
    label: 'Grandmaster'
  }
};
