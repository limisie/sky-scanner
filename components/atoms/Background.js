import { StyledBackground } from '../../constants/styled';
import { COLORS } from '../../constants';
import styled from 'styled-components/native';

const TopColor = styled.View`
  height: 300px;
  background-color: ${props => props.isLight ? COLORS.white : COLORS.secondary};
`;

const BottomColor = styled.View`
  flex: 1;
  background-color: ${props => props.isLight ? COLORS.white : COLORS.primary};
`;

const Background = () => {
    return (
        <StyledBackground>
            <TopColor/>
            <BottomColor/>
        </StyledBackground>
    );
};

export default Background;