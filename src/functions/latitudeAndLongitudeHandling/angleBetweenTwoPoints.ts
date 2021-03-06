//Source https://towardsdatascience.com/calculating-the-bearing-between-two-geospatial-coordinates-66203f57e4b4

interface ICoordinate {
    latitude: number,
    longitude: number,
}

const degreeToRad = (degree: number) => degree * Math.PI / 180;

const angleBetweenTwoPoints = (point1: ICoordinate, point2: ICoordinate) => {
    
    const a = {lat: degreeToRad(point1.latitude), lon:degreeToRad(point1.longitude)};
    const b = {lat: degreeToRad(point2.latitude), lon:degreeToRad(point2.longitude)};
    
    const dL = b.lon - a.lon;
    
    const X = Math.cos(b.lat) * Math.sin(dL);
    const Y = Math.cos(a.lat) * Math.sin(b.lat) - Math.sin(a.lat) * Math.cos(b.lat) * Math.cos(dL);

    const bearing = Math.atan2(X , Y);

    return bearing;
} 

export default angleBetweenTwoPoints;