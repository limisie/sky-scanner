import { TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import styled from 'styled-components/native';

const Tab = styled.Text`
  font-family: ${props => props.isActive ? FONTS.medium : FONTS.light};
  font-size: ${SIZES.large}px;
  color: ${props => props.isActive ? COLORS.secondary : COLORS.gray};
  margin-top: ${SIZES.medium}px;
`;

const Underline = styled.View`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${COLORS.secondary};
  bottom: ${-SIZES.base}px;
`;

const SearchTab = ({isActive, name, handlePress}) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Tab isActive={isActive}>{name}</Tab>
            {isActive ? <Underline/> : null}
        </TouchableOpacity>
    );
};

export default SearchTab;
