import { SIZES } from '../../constants';
import { StyledRow, StyledText } from '../../constants/styled';
import SearchBar from '../molecules/SearchBar';
import SearchTab from '../atoms/SearchTab';

const SearchScreenHeader = () => {
    return (
        <>
            <SearchBar/>
            <StyledText isBold size={SIZES.xxLarge}>Explore</StyledText>
            <StyledRow spaceBetween marginBottom={SIZES.large}>
                <SearchTab isActive name="Tracked"/>
                <SearchTab name="Visible"/>
                <SearchTab name="All"/>
            </StyledRow>
        </>
    );
};

export default SearchScreenHeader;
