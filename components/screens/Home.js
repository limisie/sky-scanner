import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { StyledBackground } from '../../constants/styled';
import { COLORS } from '../../constants';
import { HomeHeader, Map, Background } from '../';
import PassInfo from '../organisms/PassInfo';
import { headerData, passData } from '../../constants/data';



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
                    objectName={headerData.name}
                    currentLocation={headerData.location}
                    currentDate={headerData.date}
                />
                <Map/>
                <PassInfo passData={passData} nextPass='00:00:00'/>
            
            </StyledSafeAreaView>
            
            <Background/>
        </StyledBackground>
    
    );
};

export default Home;