import { assets, COLORS, SIZES } from '../../constants';
import { BasicContainer, StyledIcon, StyledRow, StyledText } from '../../constants/styled';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeHeader = ({objectName, currentLocation, currentDate}) => {
    const navigation = useNavigation();
    
    return (
        <BasicContainer marginVertical={SIZES.base}>
            
            <StyledRow spaceBetween>
                <StyledText isBold size={SIZES.extraLarge} color={COLORS.white}>{objectName}</StyledText>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <StyledIcon source={assets.search} resizeMode="contain"/>
                </TouchableOpacity>
            </StyledRow>
            
            <StyledRow spaceBetween>
                <StyledRow>
                    <StyledIcon source={assets.pin} width={20} height={20} resizeMode="contain"
                                mariginRight={SIZES.base}/>
                    <StyledText color={COLORS.white}>{currentLocation}</StyledText>
                </StyledRow>
                <StyledText color={COLORS.white}>{currentDate}</StyledText>
            </StyledRow>
        
        </BasicContainer>
    );
};

export default HomeHeader;