import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
 flex-direction: row;
 border-radius: ${RFValue(8)}px;
 border-style: solid;
 border-width: 1px;
 border-color: ${({ theme }) => theme.colors.border};
 align-items: center;
 padding-left:  ${RFValue(14)}px;
`;

export const InputFilter = styled.TextInput`
margin-left: ${RFValue(8)}px;
color: ${({ theme }) => theme.colors.title};
line-height: ${RFValue(21)}px;
font-size: ${RFValue(14)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
flex:1;
padding-right:  ${RFValue(4)}px;
padding-top:  ${RFValue(15)}px;
padding-bottom:  ${RFValue(14)}px;
`;