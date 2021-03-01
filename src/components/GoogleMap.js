import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//From where this come from: https://www.npmjs.com/package/react-google-maps
//Tutorial to implement: https://www.youtube.com/watch?v=Pf7g32CwX_s&t=812s
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

//Source to styles: https://snazzymaps.com/
//When a pass this object to another file, the PropTypes.oneOf( Object.keys(mapStyles) ) stop working
const mapStyles = {
    default: '',

    lostInDesert: [
        {
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#f49f53"
                }
            ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#f9ddc5"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#1994bf"
                },
                {
                    "saturation": -69
                },
                {
                    "gamma": 0.99
                },
                {
                    "lightness": 43
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "weight": 1.3
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi.business"
        },
        {
            "featureType": "poi.park",
            "stylers": [
                {
                    "color": "#645c20"
                },
                {
                    "lightness": 39
                }
            ]
        },
        {
            "featureType": "poi.school",
            "stylers": [
                {
                    "color": "#a95521"
                },
                {
                    "lightness": 35
                }
            ]
        },
        {},
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 38
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "elementType": "labels"
        },
        {
            "featureType": "poi.sports_complex",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 32
                }
            ]
        },
        {},
        {
            "featureType": "poi.government",
            "stylers": [
                {
                    "color": "#9e5916"
                },
                {
                    "lightness": 46
                }
            ]
        },
        {
            "featureType": "transit.station",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "stylers": [
                {
                    "color": "#813033"
                },
                {
                    "lightness": 22
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "lightness": 38
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#f19f53"
                },
                {
                    "lightness": -10
                }
            ]
        },
        {},
        {},
        {}
    ],

    modest: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#202c3e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                },
                {
                    "weight": "1.39"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "0.96"
                },
                {
                    "saturation": "9"
                },
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": "9"
                },
                {
                    "color": "#29446b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#193a55"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ],

    grayScale: [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#e0dfe0"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a8a9a8"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#5b5b5a"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]
}

//Source to icons:  https://heroicons.com/
const iconPaths = {
    origin: '/icons/flag.svg',
    marker: '/icons/location-marker.svg',
}

const Map = (props) => {
    const [currentMapStyle, setCurrentMapStyle] = useState(props.mapStyle);

    useEffect(() => {
        setCurrentMapStyle(props.mapStyle);
    }, [props.mapStyle])

    return (
        <GoogleMap
            defaultZoom={props.defaultZoom}
            defaultCenter={{ lat: props.defaultLat, lng: props.defaultLng }}
            defaultOptions={{ styles: mapStyles[currentMapStyle] }}
            key={`${currentMapStyle}-${props.defaultZoom}-${props.defaultLat}-${props.defaultLng}`} //This property forces the re-render when some inicial configuration of maps ocours
        >
            {props.markers1.map(point => (
                <Marker
                    key={`${point.lat} - ${point.lng}`}
                    position={{ lat: point.lat, lng: point.lng }}
                    icon={{
                        url: iconPaths[props.iconMarker1],
                        scaledSize: new window.google.maps.Size(props.sizeIconMarker1, props.sizeIconMarker1)
                    }}
                />
            ))}

            {props.markers2.map(point => (
                <Marker
                    key={`${point.lat} - ${point.lng}`}
                    position={{ lat: point.lat, lng: point.lng }}
                    icon={{
                        url: iconPaths[props.iconMarker2],
                        scaledSize: new window.google.maps.Size(props.sizeIconMarker2, props.sizeIconMarker2)
                    }}
                />
            ))}

        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

/**
 * This is a Google Maps component where the user can click in some markers and see its title, photo and description <br />
 * Via code, the developer can change the map style, the places on the map pinned, and the size, formats and informations of the icons markers <br />
 * <br />
 * You can check the code of this component to use on your project <a href='https://github.com/PedroMarianoAlmeida/storybook-components/blob/master/src/components/geo-location/GoogleMap.js' target='_blank'>here</a>. <br />
 *<br />
 * <strong>Note 1:</strong> If you just copy and paste it wont works, because you need a Google Cloud API Key (and my key is configured to works only in my storybook website), so search by googleMapURL variable and follow the instructions there <br />
 *<strong>Note 2:</strong> It is necessary to install the react-google-maps dependency
 */
const GoogleMapComponent = (props) => {
    console.log(process.env.REACT_APP_GOOGLE_KEY);
    return (
        <div style={{ height: `500px`, width: '1000px' }}>

            <WrappedMap
                //Remove or commment the line bellow... this key works only in Developer's adress (https://affectionate-stonebraker-6ad0ad.netlify.app/?path=/story/example-introduction--page)
                //googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJEckJqPRZdT97zOCIdNcFpKnyefsYvqw'

                /*
                Steps to make this component works on your project:
                1: Create a Google Cloud API Key 
                Reference tutorial: https://www.youtube.com/watch?v=5hTlSGD4_zk
                Note 1: In 4:22, search by "Maps JavaScript API", and not the Translator, same thing in 5:41
                Note 2: This video isn't mine =D

                2: Create a .env.local on your machine and insert the code: REACT_APP_GOOGLE_KEY= '<YOUR_API_KEY_VALUE>'               
                
                3: Uncomment the line bellow (googleMapUrl)
                */
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}

                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}

                defaultZoom={props.defaultZoom}
                defaultLat={props.defaultLat}
                defaultLng={props.defaultLng}
                mapStyle={props.mapStyle}

                markers1={props.markers1}
                iconMarker1={props.iconMarker1}
                sizeIconMarker1={props.sizeIconMarker1}

                markers2={props.markers2}
                iconMarker2={props.iconMarker2}
                sizeIconMarker2={props.sizeIconMarker2}
            />
        </div>

    );
}

GoogleMapComponent.propTypes = {
    /**
    * Defines the inicial zoom on the map
    */
    defaultZoom: PropTypes.number,

    /**
    * Defines the inicial Latitude on the map
    */
    defaultLat: PropTypes.number,

    /**
    * Defines the inicial Longitude on the map
    */
    defaultLng: PropTypes.number,

    /**
    * Defines the style of the map
    */
    mapStyle: PropTypes.oneOf(Object.keys(mapStyles)),

    /**
    * Defines the places of Marker 1
    */
    markers1: PropTypes.array,
    /**
    * Defines the image of marker 1
    */
    iconMarker1: PropTypes.oneOf(Object.keys(iconPaths)),
    /**
    * Defines the size of marker 1
    */
    sizeIconMarker1: PropTypes.number,

    /**
    * Defines the places of Marker 2
    */
    markers2: PropTypes.array,

    /**
    * Defines the image of marker 2
    */
    iconMarker2: PropTypes.oneOf(Object.keys(iconPaths)),

    /**
    * Defines the size of marker 2
    */
    sizeIconMarker2: PropTypes.number,
}

export default GoogleMapComponent;