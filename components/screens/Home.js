import { StatusBar } from 'react-native';
import { StyledBackground, StyledSafeAreaView } from '../../constants/styled';
import { assets, COLORS } from '../../constants';
import { HomeHeader, Map, Background, PassInfo } from '../';
import { passData, satelliteList } from '../../constants/data';
import { useEffect, useState } from 'react';
import SkyService from '../../services/SkyService';
import WeatherService from '../../services/WeatherService';
import LocationService from '../../services/LocationService';
import { dayTh } from '../../constants/helpers';

const Home = (props) => {
  const [skyObject, setSkyObject] = useState(satelliteList[0]);
  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [locationName, setLocationName] = useState('');
  const [time, setTime] = useState('');
  
  const mapToOptionObject = () => {
    return {
      observerLat: currentLatitude || 51.123523493468745, // Dirty for Breslau
      observerLng: currentLongitude || 17.053184453909658,
      days: 0,
      minElevation: 40,
      observerAlt: 0,
    };
  };
  
  useEffect(() => {
    getLocationData();
    
    setTime(getCurrentTime());
    // setInterval(() => {
    //   setTime(getCurrentTime());
    // }, 60000);
    
    if (props.route?.params) {
      setSkyObject(props.route?.params);
    }
    if (skyObject.noradId) {
      getAllInfoAboutSatellite(skyObject.noradId);
    }
    
    // getCurrentWeather(
    //   mapToOptionObject().observerLat,
    //   mapToOptionObject().observerLng
    // );
  }, []);
  
  const getLocationData = async () => {
    const { latitude, longitude } = await LocationService.getCurrentLocation();
    setCurrentLatitude(latitude);
    setCurrentLongitude(longitude);
    const name = await LocationService.getLocationName(latitude, longitude);
    setLocationName(name);
  };
  
  const getCurrentTime = () => {
    const today = new Date();
    const month = assets.monthNames[today.getMonth()];
    const day = today.getDate();
    const hour = (today.getHours() < 10 ? '0' : '') + today.getHours();
    const minute = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    
    return `${month} ${day}${dayTh(day)}, ${hour}:${minute}`;
  };
  
  const getCurrentWeather = async (observerLat, observerLng) => {
    const location = [observerLat, observerLng];
    const weather = await WeatherService.getWeather(location);
    // console.log(weather);
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
          currentDate={time}
        />
        <Map lat={currentLatitude} lon={currentLongitude}/>
        <PassInfo passData={passData} nextPass="00:00:00"/>
      </StyledSafeAreaView>
      
      <Background/>
    </StyledBackground>
  );
};

export default Home;
