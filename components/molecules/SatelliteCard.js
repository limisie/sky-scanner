import { assets, COLORS, SIZES } from "../../constants";
import { RoundedContainer, StyledText } from "../../constants/styled";
import styled from "styled-components/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StyledImage = styled.Image`
  position: absolute;
  top: ${-SIZES.xxLarge}px;
  right: 0;
  width: 50%;
  height: 100px;
`;

const SatelliteCard = ({ data: { name, type, details, image, noradId } }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Home", { name, type, details, image, noradId });
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <RoundedContainer color={COLORS.primary} marginVertical={SIZES.large}>
        <StyledImage source={image} resizeMode="contain" />
        <StyledText color={COLORS.white} size={SIZES.extraLarge} isBold>
          {name}
        </StyledText>
        <StyledText color={COLORS.white}>{type}</StyledText>
        <StyledText color={COLORS.white} size={SIZES.small}>
          {details}
        </StyledText>
      </RoundedContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 0,
    marginVertical: 12,
    marginHorizontal: 0,
  },
});

export default SatelliteCard;
