import styled from 'styled-components/native';
import { FONTS, SIZES, COLORS } from './theme';

export const StyledRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledRowSB = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${SIZES.base}px;
`;

export const StyledText = styled.Text`
  font-family: ${props => props.isBold ? FONTS.bold : FONTS.light};
  font-size: ${props => props.size ? props.size : SIZES.font}px;
  color: ${props => props.color ? props.color : COLORS.primary};
`;

export const StyledIcon = styled.Image`
  width: ${props => props.width || 20}px;
  height: ${props => props.height || 20}px;
  margin-right: ${SIZES.base}px;
`;

export const StyledBackground = styled.View`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
