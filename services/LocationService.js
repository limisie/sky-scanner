import axios from 'axios';
import * as Location from 'expo-location';

const API_KEY = 'AIzaSyBQN2WyjoR7GfnPKsSluQGvR1AuYpJNG98';
const BASIC_URL = 'https://maps.googleapis.com/maps/api';

const getLocationDetails = async (latitude, longitude) => {
  return await axios.get(
    `${BASIC_URL}/geocode/json?address=${latitude},${longitude}&key=${API_KEY}`
  );
};

const getCurrentLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === 'granted') {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
    return { latitude, longitude };
  }
};

const getLocationName = async (latitude, longitude) => {
  const { data: { results } } = await getLocationDetails(latitude, longitude);
  const { address_components } = results[0];
  const { long_name: city } = address_components[4];
  const { short_name: countryCode } = address_components[6];
  return `${city}, ${countryCode}`;
};

export default {
  getLocationDetails,
  getCurrentLocation,
  getLocationName
};
