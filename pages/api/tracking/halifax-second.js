//import generateCoordenates from './../../../src/functions/generateCoordenates'
import coordenates from './../../../src/data/halifax.json';
import getCoordenateFromJSON from './../../../src/functions/getCoordenateFromJSON.ts'

export default (req, res) => {
    //Run to generate the JSON file, copy the window value and paste in a JSON file 
    //const coordenatesGenerated = generateCoordenates(44.651070, -63.582687); //Change the coordenate for the new city
    //console.log(coordenatesGenerated.length)
    //res.status(200).json(coordenatesGenerated)
    
    const coordenate = getCoordenateFromJSON(coordenates, 'second')
    
    res.status(200).json(coordenate);
  }