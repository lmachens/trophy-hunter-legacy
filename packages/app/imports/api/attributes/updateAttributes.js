const attributeDecayRate = 0.95; // this means that the old value determines the new value to 95%.

function updateAttributes(obtainedAttributes, trophyHunter) {
  if (!trophyHunter.attributes) {
    trophyHunter.attributes = {};
  }
  Object.entries(obtainedAttributes).forEach(([key, value]) => {
    if (!trophyHunter.attributes[key]) {
      trophyHunter.attributes[key] = value;
    } else {
      trophyHunter.attributes[key] = trophyHunter.attributes[key] * attributeDecayRate + value;
    }
  });
}

export default updateAttributes;
