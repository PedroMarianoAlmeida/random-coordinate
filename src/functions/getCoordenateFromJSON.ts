const frequencyOptions = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24
}

const getCoordenateFromJSON = (coordenatesJSON: JSON, frequency: 'second' | 'minute' | 'hour' | 'day') => {
    const time = Math.floor(Date.now() / frequencyOptions[frequency]);
    const coordenates = JSON.parse(JSON.stringify(coordenatesJSON));    

    const index = time % coordenates.length; 
    return coordenates[index];
}
 
export default getCoordenateFromJSON;