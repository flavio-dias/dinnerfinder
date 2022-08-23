import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
`;

export const BGImage = styled.ImageBackground`
    flex:1;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(313)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(24)}px;
    line-height: ${RFValue(34)}px;
    margin: ${RFValue(46)}px ${RFValue(27)}px ${RFValue(20)}px ${RFValue(33)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(27)}px;
    margin: 0px ${RFValue(27)}px ${RFValue(123)}px ${RFValue(33)}px;
`;

export const FlatlistContainer = styled.View`
    flex:1;
    margin-top: ${RFValue(-32)}px;
    padding: ${RFValue(32)}px ${RFValue(30)}px 0px ${RFValue(30)}px;
    background-color: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${RFValue(32)}px;
    border-top-right-radius: ${RFValue(32)}px;
`;

export const FlatlistRestaurants = styled.FlatList`
`;

export const LabelList = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(21)}px;
    margin-top: ${RFValue(44)}px;
    margin-bottom: ${RFValue(10)}px;
`;