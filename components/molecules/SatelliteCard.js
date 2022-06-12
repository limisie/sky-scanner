import { assets, COLORS, SIZES } from '../../constants';
import { RoundedContainer, StyledText } from '../../constants/styled';
import styled from 'styled-components/native';

const StyledImage = styled.Image`
  position: absolute;
  top: ${-SIZES.xxLarge}px;
  right: 0;
  width: 50%;
  height: 100px;
`;

const SatelliteCard = () => {
    return (
        <RoundedContainer color={COLORS.primary} marginVertical={SIZES.large}>
            <StyledImage source={assets.satellite} resizeMode='contain'/>
            <StyledText color={COLORS.white} size={SIZES.extraLarge} isBold>Hubble</StyledText>
            <StyledText color={COLORS.white}>lorem ipsum</StyledText>
            <StyledText color={COLORS.white} size={SIZES.small}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam libero elit, porta ut consectetur
                in, maximus eu nisl. Mauris sed ex et purus efficitur laoreet.
            </StyledText>
        </RoundedContainer>
    );
};

export default SatelliteCard;
