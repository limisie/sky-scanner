import { BasicContainer, RoundedContainer, StyledIcon, StyledRow, StyledText } from '../../constants/styled';
import { assets, COLORS, SIZES } from '../../constants';
import { FlatList, View } from 'react-native';
import { weatherIcon } from '../../constants/helpers';


const HeaderItem = ({flexBasis, children}) =>
    <View flexBasis={flexBasis}>
        <StyledText isBold size={SIZES.base} color={COLORS.gray}>
            {children}
        </StyledText>
    </View>;

const PassHeader = () => {
    return (
        <StyledRow spaceBetween>
            <HeaderItem flexBasis="30%">date</HeaderItem>
            <HeaderItem flexBasis="20%">from</HeaderItem>
            <HeaderItem flexBasis="20%">to</HeaderItem>
            <HeaderItem flexBasis="15%">weather</HeaderItem>
            <HeaderItem>alarm</HeaderItem>
        </StyledRow>
    );
};


const PassItem = ({data}) => {
    return (
        <StyledRow spaceBetween>
            <View flexBasis="30%"><StyledText>{data.date}</StyledText></View>
            <View flexBasis="20%"><StyledText>{data.from}</StyledText></View>
            <View flexBasis="20%"><StyledText>{data.to}</StyledText></View>
            <View flexBasis="15%"><StyledIcon source={weatherIcon(data.weather)} resizeMode="contain"/></View>
            <StyledIcon source={assets.clockDisabled}/>
        </StyledRow>
    );
};


const PassInfo = ({passData, nextPass}) => {
    return (
        <BasicContainer>
            <RoundedContainer marginTop={-SIZES.extraLarge}>
                <StyledRow spaceBetween>
                    <StyledText isBold>Next pass</StyledText>
                    <StyledText>{nextPass}</StyledText>
                </StyledRow>
                
                <FlatList
                    data={passData}
                    renderItem={({item}) => <PassItem data={item}/>}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<PassHeader/>}
                    horizontal={false}
                    numColumns={1}
                />
            </RoundedContainer>
        </BasicContainer>
    );
};

export default PassInfo;