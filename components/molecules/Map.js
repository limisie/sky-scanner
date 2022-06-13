import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS, SIZES } from '../../constants';
import { useEffect, useRef, useState } from 'react';


const Map = ({ lat, lon, skyObject }) => {
  const ref = useRef(null);
  const [satelliteLocation, setSatelliteLocation] = useState(null);
  
  useEffect(() => {
    setSatelliteLocation(skyObject);
  }, [skyObject]);
  
  useEffect(() => {
    ref.current.animateCamera(
      {
        center: {
          latitude: lat,
          longitude: lon,
        },
        pitch: 0,
        zoom: 0
      },
      {
        duration: 1500
      });
  }, [lat, lon]);
  
  return (
    <MapView
      ref={ref}
      style={{ height: '65%', width: '100%' }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      minZoomLevel={0}
      maxZoomLevel={1}
      rotateEnabled={false}
      pitchEnabled={false}
      loadingEnabled={true}
      mapPadding={{
        top: 0,
        right: SIZES.base,
        bottom: SIZES.xxLarge,
        left: SIZES.large
      }}
    >
      {satelliteLocation ? <Marker
        key={1}
        coordinate={{
          latitude: satelliteLocation.latitude,
          longitude: satelliteLocation.longitude
        }}
        title="ISS"
      /> : null}
    </MapView>
  );
};


const mapStyle = [
  {
    'featureType': 'geometry',
    'stylers': [
      {
        'color': COLORS.primary
      }
    ]
  },
  {
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'administrative',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': COLORS.secondary
      },
      {
        'saturation': -65
      },
      {
        'lightness': 5
      }
    ]
  },
  {
    'featureType': 'road',
    'stylers': [
      {
        'color': COLORS.primary
      },
      {
        'saturation': -55
      },
      {
        'lightness': 5
      },
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      {
        'color': COLORS.secondary
      }
    ]
  },
  {
    'featureType': 'administrative',
    'stylers': [
      {
        'color': '#2c394b'
      },
      {
        'saturation': -25
      },
      {
        'lightness': 5
      }
    ]
  },
];


export default Map;