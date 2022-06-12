import { SIZES } from '../../constants';
import { BasicContainer, StyledRow, StyledText } from '../../constants/styled';
import SearchBar from '../molecules/SearchBar';
import SearchTab from '../atoms/SearchTab';

const SearchScreenHeader = () => {
    return (
        <BasicContainer minHeight={190}>
            <SearchBar/>
            <StyledText isBold size={SIZES.xxLarge}>Explore</StyledText>
            <StyledRow spaceBetween>
                <SearchTab isActive name="Tracked"/>
                <SearchTab name="Visible"/>
                <SearchTab name="All"/>
            </StyledRow>
        </BasicContainer>
    );
};

export default SearchScreenHeader;
