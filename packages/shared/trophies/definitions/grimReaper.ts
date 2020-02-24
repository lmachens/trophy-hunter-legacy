import SCORES from '../scores';

const grimReaper = {
  name: 'grimReaper',
  title: 'Grim Reaper',
  description:
    "You're gonna get them in the end. Score three kills in the last minute of the game.",
  svgPath:
    'M246.53 21.03c-62.334.34-123.514 15.678-165 39.44l-6.155 2.06c19.528 58.267 48.163 98.687 80.938 132.376l-1.72 67.47 64.5 30.437c-19 58.985-34.515 128.892-50.405 197.656h191.125c-10.308-47.13-20.516-94.494-32.157-138.72 23.774 28.113 46.51 61.63 67.063 104.313l16.842-8.094c-22.568-46.87-47.938-83.34-74.312-113.626l31.125-24.28-47.47-104.377 48.22-33.75c-18.963-35.457-37.446-71.306-72.28-92.656-32.51 19.993-52 56.712-72.22 92.5l-29.22 34.69c-28.89-25.67-54.975-53.34-76.093-90.532C192.195 60.42 315.858 47.172 419.656 72.56 373.43 35.602 309.392 20.69 246.53 21.032z',
  score: SCORES.HARD,
  obtainedCheck: ({ match: { participant } }) => participant.stats.grimReaperKills >= 3,
  context: 'matches',
  attribute: 'lethality'
};

export default grimReaper;
