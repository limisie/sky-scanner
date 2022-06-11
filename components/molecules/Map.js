import { assets } from '../../constants';
import styled from 'styled-components/native';

const StyledMap = styled.Image`
  width: 100%;
  height: 250px;
`;

const Map = () => {
    return (
        <StyledMap source={assets.map} resizeMode="cover"/>
    );
};

export default Map;