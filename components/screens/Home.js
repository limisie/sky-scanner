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


const Home = (props) => {
  const [skyObject, setSkyObject] = useState(satelliteList[0]);
  const [currentLatitude, setCurrentLatitude] = useState(assets.wroclawLocation.latitude);
  const [currentLongitude, setCurrentLongitude] = useState(assets.wroclawLocation.longitude);
  const [locationName, setLocationName] = useState('');
  const [date, setDate] = useState('');
  
  const mapToOptionObject = () => {
    return {
      observerLat: currentLatitude,
      observerLng: currentLongitude,
      days: 0,
      minElevation: 40,
      observerAlt: 0,
    };
  };
  
  useFocusEffect(useCallback(() => {
    getLocationData();
    
    setDate(getCurrentDate());
    
    if (props.route?.params) {
      setSkyObject(props.route?.params);
    }
    if (skyObject.noradId) {
      const { tle, radio, position, visual } = getAllInfoAboutSatellite(skyObject.noradId);
      console.log(visual);
    }
    
    getCurrentWeather(
      mapToOptionObject().observerLat,
      mapToOptionObject().observerLng
    );
  }, [props.route]));
  
  
  const getLocationData = async () => {
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
    // const weather = await WeatherService.getWeather(location);
    return weather;
  };
  
  const getAllInfoAboutSatellite = async (noradId) => {
    const tle = await SkyService.getTle(noradId).data;
    
    const options = mapToOptionObject();
    
    const radio = await SkyService.getRadioPasses(noradId, options).data;
    const position = await SkyService.getSatellitePositions(noradId, options).data;
    const visual = await SkyService.getVisualPasses(noradId, options).data;
    
    return { tle, radio, position, visual };
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
        <Map lat={currentLatitude} lon={currentLongitude}/>
        <PassInfo passData={passData} nextPass="00:00:00"/>
      </StyledSafeAreaView>
      
      <Background/>
    </StyledBackground>
  );
};

export default Home;
