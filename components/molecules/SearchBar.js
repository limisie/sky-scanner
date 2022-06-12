import { TextInput } from "react-native";
import styled from "styled-components/native";
import { assets, COLORS, SIZES } from "../../constants";
import { StyledIcon } from "../../constants/styled";

const StyledBar = styled.View`
  width: 100%;
  border-radius: ${SIZES.base}px;
  background-color: ${COLORS.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${SIZES.font}px;
  shadow-color: ${COLORS.black};
  shadow-offset: 0;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
  margin-vertical: ${SIZES.extraLarge}px;
`;

const SearchBar = ({ onChangeText, value }) => {
  return (
    <StyledBar>
      <TextInput
        placeholder="Search"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <StyledIcon source={assets.searchDark} resizeMode="contain" />
    </StyledBar>
  );
};

export default SearchBar;
