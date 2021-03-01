import GoogleMapComponent from './../../src/components/GoogleMap';

const TrackingOriginPoint = () => {
    return (
        <>
            <div>Tracking</div>
            <GoogleMapComponent
                defaultLat={52}
                defaultLng={-112}
                defaultZoom={3.5}
                iconMarker1="marker"
                iconMarker2="origin"
                mapStyle="lostInDesert"
                markers1={[
                    { lat: 43.6426, lng: -79.3871 },
                    { lat: 43.060001, lng: -79.106667},
                    { lat: 43.642664096, lng: -79.369665188}
                ]}
                markers2={[{ lat: 44, lng: -80 }]}
                sizeIconMarker1={25}
                sizeIconMarker2={25}
            />
        </>
    );
}

export default TrackingOriginPoint;