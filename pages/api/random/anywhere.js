import randomBetween from './../../../src/functions/randomBetween.ts';

export default (req, res) => {
  const latitude = randomBetween(-90, 90);
  const longitude = randomBetween(-180, 180);
  
  res.status(200).json({ 
    latitude, 
    longitude
  })
}
