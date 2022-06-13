import { StatusBar } from "react-native";
import { StyledBackground, StyledSafeAreaView } from "../../constants/styled";
import { assets, COLORS } from "../../constants";
import { HomeHeader, Map, Background, PassInfo } from "../";
import { passData, satelliteList } from "../../constants/data";
import { useCallback, useEffect, useState } from "react";
import SkyService from "../../services/SkyService";
import WeatherService from "../../services/WeatherService";
import LocationService from "../../services/LocationService";
import { dayTh } from "../../constants/helpers";
import { useFocusEffect } from "@react-navigation/core";
import * as satellite from "satellite.js";

const Home = (props) => {
  const [skyObject, setSkyObject] = useState(satelliteList[0]);
  const [satellitePath, setSatellitePath] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(
    assets.wroclawLocation.latitude
  );
  const [currentLongitude, setCurrentLongitude] = useState(
    assets.wroclawLocation.longitude
  );
  const [locationName, setLocationName] = useState("");
  const [date, setDate] = useState("");

  const mapToOptionObject = () => {
    return {
      observerLat: currentLatitude,
      observerLng: currentLongitude,
      days: 0,
      minElevation: 40,
      observerAlt: 0,
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
        setApiSattleiteInfo(getAllInfoAboutSatellite(skyObject.noradId));

        getSkyObjectPosition(new Date()).then((res) =>
          setSkyObjectLocation(res)
        );
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
    // const weather = await WeatherService.getWeather(location);
    return weather;
  };

  const getAllInfoAboutSatellite = async (noradId) => {
    const {
      data: { tle },
    } = await SkyService.getTle(noradId);
    const options = mapToOptionObject();

    const radio = await SkyService.getRadioPasses(noradId, options);
    const position = await SkyService.getSatellitePositions(noradId, options);
    const visual = await SkyService.getVisualPasses(noradId, options);

    return { tle, radio, position, visual };
  };

  const getSkyObjectPosition = async (date) => {
    const {
      data: { tle },
    } = await SkyService.getTle(skyObject.noradId);

    const satrec = satellite.twoline2satrec(
      tle.split("\n")[0].trim(),
      tle.split("\n")[1].trim()
    );
    const positionAndVelocity = satellite.propagate(satrec, date);
    const gmst = satellite.gstime(date);
    const position = satellite.eciToGeodetic(
      positionAndVelocity.position,
      gmst
    );

    const longitude = satellite.degreesLong(position.longitude);
    const latitude = satellite.degreesLat(position.latitude);
    return { longitude, latitude };
  };

  const getSkyObjectPositions = async () => {
    const {
      data: { tle },
    } = await SkyService.getTle(skyObject.noradId);

    const satrec = satellite.twoline2satrec(
      tle.split("\n")[0].trim(),
      tle.split("\n")[1].trim()
    );

    const now = new Date();
    const positions = [];

    for (let i = 0; i < 86400; i += 3600) {
      let time = new Date(now.getDate() + i);

      let positionAndVelocity = satellite.propagate(satrec, time);
      let gmst = satellite.gstime(time);
      let position = satellite.eciToGeodetic(
        positionAndVelocity.position,
        gmst
      );

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
          satelliteLocations={satellitePath}
        />
        <PassInfo passData={passData} nextPass="00:00:00" />
      </StyledSafeAreaView>

      <Background />
    </StyledBackground>
  );
};

export default Home;
