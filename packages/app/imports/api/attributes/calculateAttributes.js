import attributes from './attributes';

function calculateAttributes(trophiesObtained) {
  const obtainedAttributes = {};

  Object.keys(attributes).forEach(key => {
    obtainedAttributes[key] = 0;
  });
  trophiesObtained.forEach(({ trophy }) => {
    if (trophy.attribute) {
      obtainedAttributes[trophy.attribute] += trophy.score;
    }
  });
  return obtainedAttributes;
}

export default calculateAttributes;
