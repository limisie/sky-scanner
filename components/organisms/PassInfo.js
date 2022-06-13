import {
  RoundedContainer,
  StyledIcon,
  StyledRow,
  StyledText,
} from "../../constants/styled";
import { assets, COLORS, SIZES } from "../../constants";
import { FlatList, View } from "react-native";
import { weatherIcon } from "../../constants/helpers";
import dateFormat, { masks } from "dateformat";

const PassInfo = ({ passData }) => {
  const dateFormatBasicString = "H:MM:ss TT";

  return (
    <RoundedContainer marginTop={-SIZES.extraLarge}>
      <StyledRow spaceBetween>
        <StyledText isBold>Next pass</StyledText>
        <StyledText>
          {dateFormat(new Date(passData[0].startUTC), dateFormatBasicString)}
        </StyledText>
      </StyledRow>

      <PassHeader />
      <FlatList
        data={passData}
        renderItem={({ item }) => <PassItem data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={1}
        scrollEnabled={true}
      />
    </RoundedContainer>
  );
};

const HeaderItem = ({ flexBasis, children }) => (
  <View flexBasis={flexBasis}>
    <StyledText isBold size={SIZES.base} color={COLORS.gray}>
      {children}
    </StyledText>
  </View>
);

const PassHeader = () => (
  <StyledRow spaceBetween>
    <HeaderItem flexBasis="30%">Start</HeaderItem>
    <HeaderItem flexBasis="20%">Max</HeaderItem>
    <HeaderItem flexBasis="20%">End</HeaderItem>
    <HeaderItem flexBasis="15%">Weather</HeaderItem>
    <HeaderItem>alarm</HeaderItem>
  </StyledRow>
);

const PassItem = ({ data }) => {
  const dateFormatString = "ddd H:MM:ss TT";
  return (
    <StyledRow spaceBetween>
      <View flexBasis="30%">
        <StyledText>{dateFormat(new Date(data.startUTC))}</StyledText>
      </View>
      <View flexBasis="20%">
        <StyledText>{dateFormat(new Date(data.maxUTC))}</StyledText>
      </View>
      <View flexBasis="20%">
        <StyledText>{dateFormat(new Date(data.endUTC))}</StyledText>
      </View>
      <View flexBasis="15%">
        {/* <StyledIcon source={weatherIcon(data.weather)} resizeMode="contain" /> */}
      </View>
      <StyledIcon source={assets.clockDisabled} />
    </StyledRow>
  );
};

export default PassInfo;
