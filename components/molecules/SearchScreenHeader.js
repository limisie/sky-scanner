import { SIZES } from "../../constants";
import { StyledRow, StyledText } from "../../constants/styled";
import SearchBar from "../molecules/SearchBar";
import SearchTab from "../atoms/SearchTab";

const SearchScreenHeader = ({ onChangeText, value }) => {
  return (
    <>
      <SearchBar onChangeText={onChangeText} value={value} />
      <StyledText isBold size={SIZES.xxLarge}>
        Explore
      </StyledText>
      <StyledRow spaceBetween marginBottom={SIZES.extraLarge}>
        <SearchTab name="All" />
      </StyledRow>
    </>
  );
};

export default SearchScreenHeader;
