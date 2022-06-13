import { RoundedContainer, StyledIcon, StyledRow, StyledText } from '../../constants/styled';
import { assets, COLORS, SIZES } from '../../constants';
import { FlatList, View } from 'react-native';
import { weatherIcon } from '../../constants/helpers';


const PassInfo = ({ passData, nextPass }) => {
  return (
    <RoundedContainer margin-top={-SIZES.extraLarge}>
      <StyledRow spaceBetween>
        <StyledText isBold>Next pass</StyledText>
        <StyledText>{nextPass}</StyledText>
      </StyledRow>
      
      <PassHeader/>
      <FlatList
        data={passData}
        renderItem={({ item }) => <PassItem data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={1}
        scrollEnabled={true}
      />
    </RoundedContainer>
  );
};


const HeaderItem = ({ flexBasis, children }) =>
  <View flexBasis={flexBasis}>
    <StyledText isBold size={SIZES.base} color={COLORS.gray}>
      {children}
    </StyledText>
  </View>;


const PassHeader = () =>
  <StyledRow spaceBetween>
    <HeaderItem flexBasis="30%">date</HeaderItem>
    <HeaderItem flexBasis="20%">from</HeaderItem>
    <HeaderItem flexBasis="20%">to</HeaderItem>
    <HeaderItem flexBasis="15%">weather</HeaderItem>
    <HeaderItem>alarm</HeaderItem>
  </StyledRow>;


const PassItem = ({ data }) => {
  return (
    <StyledRow spaceBetween>
      <View flexBasis="30%"><StyledText>{data.date}</StyledText></View>
      <View flexBasis="20%"><StyledText>{data.from}</StyledText></View>
      <View flexBasis="20%"><StyledText>{data.to}</StyledText></View>
      <View flexBasis="15%">
        {/*<StyledIcon source={weatherIcon(data.weather)} resizeMode="contain"/>*/}
      </View>
      <StyledIcon source={assets.clockDisabled}/>
    </StyledRow>
  );
};


export default PassInfo;
