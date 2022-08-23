import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
`;

export const HeaderContainer = styled.View`
    width: 100%;
`;

export const TitleRow = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const BackBtn = styled.TouchableOpacity`
    width: ${RFValue(47)}px;
    height: ${RFValue(47)}px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: ${RFValue(40)}px;
    left: ${RFValue(15)}px;
`;

export const TitleContainer = styled.View`
    margin-top: ${RFValue(40)}px;
    margin-bottom: ${RFValue(30)}px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(21)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_light};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(20)}px;
`;

export const FilterContainer = styled.View`
    width: 100%;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
    margin-bottom: ${RFValue(30)}px;
`;

export const RestaurantsList = styled.FlatList`
    flex:1;
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`;

export const ListLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(21)}px;
    margin-bottom: ${RFValue(15)}px;
    margin-left: ${RFValue(30)}px;
`;