import { StatusBar, PermissionsAndroid, Platform } from "react-native";
import { StyledBackground, StyledSafeAreaView } from "../../constants/styled";
import { COLORS } from "../../constants";
import { HomeHeader, Map, Background, PassInfo } from "../";
import { headerData, passData, satelliteList } from "../../constants/data";
import { useEffect, useState } from "react";
import SkyService from "../../services/SkyService";
import WeatherService from "../../services/WeatherService";

const Home = (props) => {
  const [skyObject, setSkyObject] = useState(satelliteList[0]);
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [currentLatitude, setCurrentLatitude] = useState("");
  const [locationStatus, setLocationStatus] = useState("");

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
    if (props.route?.params) {
      setSkyObject(props.route?.params);
    }

    const requestLocationPermission = async () => {
      if (Platform.OS === "ios") {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Access Required",
              message: "This App needs to Access your location",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus("Permission Denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();

    if (skyObject.noradId) {
      getAllInfoAboutSatellite(skyObject.noradId);
    }

    getCurrentWeather(
      mapToOptionObject().observerLat,
      mapToOptionObject().observerLng
    );

    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getCurrentWeather = async (observerLat, observerLng) => {
    console.log("Getting weather...");
    const location = [observerLat, observerLng];
    // const weather = await WeatherService.getWeather(location);
    console.log(weather);
    return weather;
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      }
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);

        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      }
    );
  };

  const getAllInfoAboutSatellite = async (noradId) => {
    const tle = await SkyService.getTle(noradId).data;

    const options = mapToOptionObject();

    const radio = await SkyService.getRadioPasses(noradId, options).data;
    const position = await SkyService.getSatellitePositions(noradId, options)
      .data;
    const visual = await SkyService.getVisualPasses(noradId, options).data;

    console.log({ tle, radio, position, visual });
    console.log("Options" + options);
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
          objectName={headerData.name}
          currentLocation={headerData.location}
          currentDate={headerData.date}
        />
        <Map />
        <PassInfo passData={passData} nextPass="00:00:00" />
      </StyledSafeAreaView>

      <Background />
    </StyledBackground>
  );
};

export default Home;
