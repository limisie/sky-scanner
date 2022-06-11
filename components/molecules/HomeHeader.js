import { assets, COLORS, SIZES } from '../../constants';
import { BasicContainer, StyledIcon, StyledRow, StyledText } from '../../constants/styled';


const HomeHeader = ({objectName, currentLocation, currentDate}) => {
    return (
        <BasicContainer marginVertical={SIZES.base}>
            
            <StyledRow spaceBetween>
                <StyledText isBold size={SIZES.extraLarge} color={COLORS.white}>{objectName}</StyledText>
                <StyledIcon source={assets.search} resizeMode="contain"/>
            </StyledRow>
            
            <StyledRow spaceBetween>
                <StyledRow>
                    <StyledIcon source={assets.pin} width={20} height={20} resizeMode="contain" mariginRight={SIZES.base}/>
                    <StyledText color={COLORS.white}>{currentLocation}</StyledText>
                </StyledRow>
                <StyledText color={COLORS.white}>{currentDate}</StyledText>
            </StyledRow>
            
        </BasicContainer>
    );
};

export default HomeHeader;