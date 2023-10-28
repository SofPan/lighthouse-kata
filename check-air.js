const checkAir = (samples, threshold) => {
  // add up number of dirty air days
  let dirtCount = 0;

  for (const sample of samples) {
    if (sample === 'dirty') {
      dirtCount++;
    }
  }
  // determine percentage of dirty air days out of all days
  let percentage = dirtCount / samples.length;
  // return Clean or Polluted depending on dirty air percent
  if (percentage >= threshold) {
    return 'Polluted';
  }
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));