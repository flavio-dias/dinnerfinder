import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
padding: ${RFValue(14)}px 0px ${RFValue(14)}px 0px;
width: 100%;
justify-content: center;
align-items: center;
`;

export const TextLoading = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_detail};
    margin-right: ${RFValue(5)}px;
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(21)}px;
`;