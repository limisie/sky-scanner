import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { StyledBackground } from '../../constants/styled';
import { COLORS } from '../../constants';
import { HomeHeader, Map, Background } from '../';

const headerInfo = {
    name: 'Hubble',
    location: 'Warsaw, Poland',
    date: 'March 12th, 12:39'
};

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  z-index: 0;
`;

const Home = () => {
    return (
        <StyledBackground>
            <StyledSafeAreaView>
                <StatusBar animated={true} backgroundColor={COLORS.primary} barStyle="light-content"/>
                <HomeHeader
                    objectName={headerInfo.name}
                    currentLocation={headerInfo.location}
                    currentDate={headerInfo.date}
                />
                <Map/>
            </StyledSafeAreaView>
            
            <Background/>
        </StyledBackground>
    
    );
};

export default Home;