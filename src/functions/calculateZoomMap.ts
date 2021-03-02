//It is looks like a Exponencial woth negative coeficiente but doesn't apply to all cases

const calculateZoomMaps = (distance : number, unit: 'km' | 'miles') => {
    const km = unit === 'km' ? distance : distance * 0.621371;
    if ( km < 1 ) return 15;
    if (km < 1.25 ) return 14;
    if (km < 2.5 ) return 13;
    if (km < 5 ) return 12;
    if (km < 10 ) return 11;
    if (km < 20 ) return 10;
    if (km < 40 ) return 9;
    if (km < 80 ) return 8;
    if (km < 160 ) return 7;
    if (km < 320 ) return 6;
    if (km < 640 ) return 5;
    if (km < 1500 ) return 4;
    if (km < 3000 ) return 3;
    if (km < 5000 ) return 2;
    return 1; 
}

export default calculateZoomMaps;