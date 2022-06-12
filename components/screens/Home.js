import { StatusBar } from 'react-native';
import { StyledBackground, StyledSafeAreaView } from '../../constants/styled';
import { COLORS } from '../../constants';
import { HomeHeader, Map, Background, PassInfo } from '../';
import { headerData, passData } from '../../constants/data';


const Home = () => {
    return (
        <StyledBackground>
            <StatusBar animated={true} backgroundColor={COLORS.primary} barStyle="light-content"/>
            
            <StyledSafeAreaView>
                <HomeHeader
                    objectName={headerData.name}
                    currentLocation={headerData.location}
                    currentDate={headerData.date}
                />
                <Map/>
                <PassInfo passData={passData} nextPass="00:00:00"/>
            </StyledSafeAreaView>
            
            <Background/>
        </StyledBackground>
    
    );
};

export default Home;