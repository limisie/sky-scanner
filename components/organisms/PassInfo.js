import {
  RoundedContainer,
  StyledIcon,
  StyledRow,
  StyledText,
} from '../../constants/styled';
import { assets, COLORS, SIZES } from '../../constants';
import { FlatList, View } from 'react-native';
import { weatherIcon } from '../../constants/helpers';
import dateFormat from 'dateformat';
import { Text } from 'react-native';
import { useEffect, useState } from 'react';

const PassInfo = ({ passData }) => {
  const dateFormatBasicString = 'mmm d H:MM:ss TT';
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setData(passData?.visual.passes);
  }, [passData]);
  
  return (
    <RoundedContainer marginTop={-SIZES.extraLarge}>
      <StyledRow spaceBetween>
        <StyledText isBold>Next pass</StyledText>
        {data ? <StyledText>
          {dateFormat(new Date(data[0].startUTC * 1000), dateFormatBasicString)}
        </StyledText> : null}
      </StyledRow>
      
      <PassHeader/>
      {data ? <FlatList
        data={data}
        renderItem={({ item }) => <PassItem data={item}/>}
        // keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={1}
        scrollEnabled={true}
      /> : <Text>Loading..</Text>}
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
    <HeaderItem flexBasis="30%">Dat</HeaderItem>
    <HeaderItem flexBasis="20%">Start</HeaderItem>
    <HeaderItem flexBasis="20%">End</HeaderItem>
    <HeaderItem flexBasis="15%">Weather</HeaderItem>
    <HeaderItem>alarm</HeaderItem>
  </StyledRow>
);

const PassItem = ({ data }) => {
  const dateFormatString = 'mmm d';
  const timeFormatString = 'H:MM:ss';
  return (
    <StyledRow spaceBetween>
      <View flexBasis="30%">
        <StyledText>{dateFormat(new Date(data.startUTC * 1000), dateFormatString)}</StyledText>
      </View>
      <View flexBasis="20%">
        <StyledText>{dateFormat(new Date(data.startUTC * 1000), timeFormatString)}</StyledText>
      </View>
      <View flexBasis="20%">
        <StyledText>{dateFormat(new Date(data.endUTC * 1000), timeFormatString)}</StyledText>
      </View>
      <View flexBasis="15%">
        <StyledIcon source={assets.rain} resizeMode="contain"/>
      </View>
      <StyledIcon source={assets.clockDisabled}/>
    </StyledRow>
  );
};

export default PassInfo;
