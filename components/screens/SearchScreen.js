import { StatusBar } from 'react-native';
import { COLORS } from '../../constants';
import { BasicContainer, StyledBackground, StyledSafeAreaView } from '../../constants/styled';
import { Background } from '../index';
import SearchScreenHeader from '../molecules/SearchScreenHeader';
import SatelliteCard from '../molecules/SatelliteCard';

const SearchScreen = () => {
    return (
        <StyledBackground>
            
            <StyledSafeAreaView>
                <StatusBar animated={true}
                           backgroundColor={COLORS.white}
                           barStyle="dark-content"/>
                <SearchScreenHeader/>
                
                <BasicContainer>
                    <SatelliteCard/>
                    <SatelliteCard/>
                    <SatelliteCard/>
                    <SatelliteCard/>
                </BasicContainer>
            </StyledSafeAreaView>
            
            <Background isLight/>
        </StyledBackground>
    );
};

export default SearchScreen;
