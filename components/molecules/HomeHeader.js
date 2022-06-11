import { assets, COLORS, SIZES } from '../../constants';
import { StyledIcon, StyledRow, StyledRowSB, StyledText } from '../../constants/styled';
import styled from 'styled-components/native';


const Container = styled.View`
  width: 100%;
  padding-horizontal: ${SIZES.large}px;
  margin-vertical: ${SIZES.large}px;
`;

const HomeHeader = ({objectName, currentLocation, currentDate}) => {
    return (
        <Container>
            <StyledRowSB>
                <StyledText isBold size={SIZES.extraLarge} color={COLORS.white}>{objectName}</StyledText>
                <StyledIcon source={assets.search} resizeMode="contain"/>
            </StyledRowSB>
            <StyledRowSB>
                <StyledRow>
                    <StyledIcon source={assets.pin} width={20} height={20} resizeMode="contain"/>
                    <StyledText color={COLORS.white}>{currentLocation}</StyledText>
                </StyledRow>
                <StyledText color={COLORS.white}>{currentDate}</StyledText>
            </StyledRowSB>
        </Container>
    );
};

export default HomeHeader;