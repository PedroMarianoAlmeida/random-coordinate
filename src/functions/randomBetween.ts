const randomBetween = (n1: number, n2: number) => {
    const higherNumber = n1 > n2 ? n1 : n2;
    const lowerNumber = n1 > n2 ? n2 : n1;
    
    const randomNumber =  Math.random() * (higherNumber - lowerNumber)
    const randomWithOffset = randomNumber + lowerNumber
  
    return randomWithOffset
}