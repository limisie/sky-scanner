import { FlatList, StatusBar } from 'react-native';
import { COLORS } from '../../constants';
import { StyledBackground, StyledSafeAreaView } from '../../constants/styled';
import { Background } from '../index';
import SearchScreenHeader from '../molecules/SearchScreenHeader';
import SatelliteCard from '../molecules/SatelliteCard';
import { satelliteList } from '../../constants/data';

const SearchScreen = () => {
    return (
        <StyledBackground>
            <StatusBar animated={true}
                       backgroundColor={COLORS.white}
                       barStyle="dark-content"/>
            
            <StyledSafeAreaView flexDirection="column">
                <SearchScreenHeader/>
                <FlatList data={satelliteList}
                          renderItem={({item}) => <SatelliteCard data={item}/>}
                />
            </StyledSafeAreaView>
            
            <Background isLight/>
        </StyledBackground>
    );
};

export default SearchScreen;
