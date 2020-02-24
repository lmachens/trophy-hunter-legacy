import playstyles from './playstyles';

function calculatePlaystyle(attributes) {
  let maxScore = 0;
  let maxPlaystyle = playstyles.unknown;
  Object.values(playstyles).forEach(playstyle => {
    if (playstyle.name === 'unknown') {
      return;
    }
    let score = 3 * attributes[playstyle.primaryAttribute];
    playstyle.secondaryAttributes.forEach(secondaryAttribute => {
      score += attributes[secondaryAttribute];
    });
    if (score > maxScore) {
      maxScore = score;
      maxPlaystyle = playstyle;
    }
  });

  return maxPlaystyle;
}

export default calculatePlaystyle;
