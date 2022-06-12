import { FlatList, StatusBar } from "react-native";
import { COLORS } from "../../constants";
import {
  BasicContainer,
  StyledBackground,
  StyledSafeAreaView,
} from "../../constants/styled";
import { Background } from "../index";
import SearchScreenHeader from "../molecules/SearchScreenHeader";
import SatelliteCard from "../molecules/SatelliteCard";
import { satelliteList } from "../../constants/data";
import SkyService from "../../services/SkyService";
import { onChange } from "react-native-reanimated";
import { useState } from "react";
import { SIZES } from "../../constants";

const SearchScreen = () => {
  const [satelliteStateList, setSatelliteStateList] = useState(satelliteList);
  const [searchValue, setSearchValue] = useState("");

  const onChangeText = (text) => {
    setSearchValue(text);
    filterSateliteList(text);
  };

  const filterSateliteList = (text) => {
    const filteredSatelliteList = satelliteList.filter(
      (satellite) =>
        satellite.name.toLowerCase().includes(text.toLowerCase()) ||
        satellite.type.toLowerCase().includes(text.toLowerCase()) ||
        satellite.details.toLowerCase().includes(text.toLowerCase())
    );
    setSatelliteStateList(filteredSatelliteList);
  };

  return (
    <StyledBackground>
      <StyledSafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.white}
          barStyle="dark-content"
        />

        <BasicContainer>
          <SearchScreenHeader
            onChangeText={onChangeText}
            value={searchValue}
            marginBottom={SIZES.extraLarge}
          />
          <FlatList
            data={satelliteStateList}
            renderItem={({ item }) => <SatelliteCard data={item} />}
          />
        </BasicContainer>
      </StyledSafeAreaView>

      <Background isLight />
    </StyledBackground>
  );
};

export default SearchScreen;
