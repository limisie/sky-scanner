import { StatusBar } from 'react-native';
import { StyledBackground, StyledSafeAreaView } from '../../constants/styled';
import { assets, COLORS } from '../../constants';
import { HomeHeader, Map, Background, PassInfo } from '../';
import { passData, satelliteList } from '../../constants/data';
import { useCallback, useEffect, useState } from 'react';
import SkyService from '../../services/SkyService';
import WeatherService from '../../services/WeatherService';
import LocationService from '../../services/LocationService';
import { dayTh } from '../../constants/helpers';
import { useFocusEffect } from '@react-navigation/core';
import * as satellite from 'satellite.js';

const Home = (props) => {
  const [skyObject, setSkyObject] = useState(satelliteList[0]);
  const [satellitePositions, setSatellitePositions] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(assets.wroclawLocation.latitude);
  const [currentLongitude, setCurrentLongitude] = useState(assets.wroclawLocation.longitude);
  const [locationName, setLocationName] = useState('');
  const [date, setDate] = useState('');
  const [apiData, setApiData] = useState(null);
  
  const mapToOptionObject = () => {
    return {
      observerLat: currentLatitude,
      observerLng: currentLongitude,
      observerAlt: 0,
      days: 10,
    };
  };
  
  useEffect(() => {
    setLocationData();
    
    setDate(getCurrentDate());
  }, []);
  
  useFocusEffect(
    useCallback(() => {
      if (props.route?.params) {
        setSkyObject(props.route?.params);
      }
      
      if (skyObject.noradId) {
        getAllInfoAboutSatellite(skyObject.noradId)
          .then(res => setApiData(res));
        
        getSkyObjectPositions(new Date())
          .then(res => setSatellitePositions(res));
      }
      
      getCurrentWeather(
        mapToOptionObject().observerLat,
        mapToOptionObject().observerLng
      );
    }, [props.route])
  );
  
  const setLocationData = async () => {
    const { latitude, longitude } = await LocationService.getCurrentLocation();
    setCurrentLatitude(latitude);
    setCurrentLongitude(longitude);
    const name = await LocationService.getLocationName(latitude, longitude);
    setLocationName(name);
  };
  
  const getCurrentDate = () => {
    const today = new Date();
    const month = assets.monthNames[today.getMonth()];
    const day = today.getDate();
    
    return `${month} ${day}${dayTh(day)}`;
  };
  
  const getCurrentWeather = async (observerLat, observerLng) => {
    const location = [observerLat, observerLng];
    const weather = await WeatherService.getWeather(location);
    return weather;
  };
  
  const getAllInfoAboutSatellite = async (noradId) => {
    const {
      data: { tle },
    } = await SkyService.getTle(noradId);
    
    const options = mapToOptionObject();
    const visual = await SkyService.getVisualPasses(noradId, options);
    
    return { tle, visual: visual.data };
  };
  
  const getSkyObjectPositions = async () => {
    const { data: { tle } } = await SkyService.getTle(skyObject.noradId);
    
    const satrec = satellite.twoline2satrec(
      tle.split('\n')[0].trim(),
      tle.split('\n')[1].trim()
    );
    
    const now = new Date();
    const positions = [];
    
    for (let i = 0; i < 150; i += 1) {
      let time = new Date(now.setSeconds(now.getSeconds() + i));
      
      let positionAndVelocity = satellite.propagate(satrec, time);
      let gmst = satellite.gstime(time);
      let position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);
      
      let longitude = satellite.degreesLong(position.longitude);
      let latitude = satellite.degreesLat(position.latitude);
      
      positions.push({ longitude, latitude });
    }
    
    return positions;
  };
  
  return (
    <StyledBackground>
      <StyledSafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.primary}
          barStyle="light-content"
        />
        <HomeHeader
          objectName={skyObject.name}
          currentLocation={locationName}
          currentDate={date}
        />
        <Map
          lat={currentLatitude}
          lon={currentLongitude}
          satellitePositions={satellitePositions}
        />
        <PassInfo passData={apiData}/>
      </StyledSafeAreaView>
      
      <Background/>
    </StyledBackground>
  );
};

export default Home;
