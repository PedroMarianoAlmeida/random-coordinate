import newRandomCoordenate from './newRandomCoordinate';

const generateCoordenates = (latitude, longitude) => {
    
    const arrayLength = 131071; //A big Prime Number
    let currentPosition = {latitude, longitude}
    
    const firstHalf = []
    for(let i = 0; i < Math.floor(arrayLength/2); i++){
        const [latitude, longitude] = newRandomCoordenate(currentPosition.latitude, currentPosition.longitude, 1);
        const newCoordenate = {latitude, longitude};

        firstHalf.push(newCoordenate);
        currentPosition = newCoordenate;
    }

    //The second half is coordenates close to the first one, so with the complete array it will seems like the point goes and back for a similar path
    const secondHalfManipulation = [...firstHalf];
    secondHalfManipulation.reverse();

    const secondHalf = secondHalfManipulation.map(coordenate => {
        const [latitude, longitude] = newRandomCoordenate(coordenate.latitude, coordenate.longitude, 1); 
        return {latitude, longitude};
    })  
    
    return [{latitude, longitude}, ...firstHalf, ...secondHalf ];
}
 
export default generateCoordenates;