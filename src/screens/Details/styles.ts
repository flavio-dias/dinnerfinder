import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface TextDetailProp {
    breakline: boolean;
}

export const Container = styled.View`
 flex:1;
`;

export const Header = styled.View`
    height: ${RFValue(159)}px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackgroundIMG = styled.ImageBackground`
    flex:1;
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

export const InfoContainer = styled.View`
    margin-top: ${RFValue(-32)}px;
    border-top-left-radius: ${RFValue(32)}px;
    border-top-right-radius: ${RFValue(32)}px;
    flex:1;
    background-color: ${({ theme }) => theme.colors.background};
    padding-left: ${RFValue(30)}px;
    padding-right: ${RFValue(30)}px;
`;

export const InfoData = styled.ScrollView`
    flex:1;
`;

export const TitleContainer = styled.View`
    margin-top: ${RFValue(-90)}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    line-height: ${RFValue(28)}px;
    margin-bottom: ${RFValue(30)}px;;
`;

export const Logo = styled.Image`
height: ${RFValue(119)}px;
width: ${RFValue(119)}px;
border-radius:${RFValue(65)}px;
`;

export const Subtitle = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_700};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(21)}px;
`;

export const TextDetail = styled.Text<TextDetailProp>`
font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
    ${({ breakline }) => breakline && css`
        margin-bottom: ${RFValue(30)}px;
    `};
`;

export const Divider = styled.View`
    height: 2px;
    width: 100%;
    background-color: #CCCCCC;
    margin-bottom:${RFValue(30)}px;
`;