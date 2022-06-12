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

const SatelliteCard = ({data: {name, type, details, image}}) => {
    return (
        <RoundedContainer color={COLORS.primary} marginVertical={SIZES.large}>
            <StyledImage source={image} resizeMode="contain"/>
            <StyledText color={COLORS.white} size={SIZES.extraLarge} isBold>{name}</StyledText>
            <StyledText color={COLORS.white}>{type}</StyledText>
            <StyledText color={COLORS.white} size={SIZES.small}>{details}</StyledText>
        </RoundedContainer>
    );
};

export default SatelliteCard;
