import styled from 'styled-components/native';
import { View } from 'react-native';
import { FONTS, SIZES, COLORS } from './theme';

export const StyledText = styled.Text`
  font-family: ${props => props.isBold ? FONTS.bold : FONTS.light};
  font-size: ${props => props.size ? props.size : SIZES.font}px;
  color: ${props => props.color ? props.color : COLORS.secondary};
`;

export const StyledIcon = styled.Image`
  width: ${props => props.width || 20}px;
  height: ${props => props.height || 20}px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: ${props => props.spaceBetween ? 'space-between' : 'center'};
  align-items: center;
  padding-vertical: ${SIZES.xSmall}px;
`;

export const BasicContainer = styled.View`
  width: 100%;
  padding-horizontal: ${props => props.padding ? props.padding : SIZES.large}px;
  flex-direction: column;
  flex: 1;
`;

export const RoundedContainer = styled(View)`
  background-color: ${props => props.color ? props.color : COLORS.offWhite};
  border-radius: ${SIZES.large}px;
  padding: ${SIZES.large}px;
  flex-direction: column;
  shadow-color: ${COLORS.black};
  shadow-offset: 0;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
  flex: 1;
  margin-horizontal: ${props => props.padding ? props.padding : SIZES.large}px;
`;

export const StyledBackground = styled.View`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  z-index: 0;
`;