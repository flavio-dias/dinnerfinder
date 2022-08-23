import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex: 0.47;
    border-radius: ${RFValue(8)}px;
    height: ${RFValue(160)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const BackgroundIMG = styled.ImageBackground`
    flex:1;
    border-radius: ${RFValue(8)}px;
    justify-content: flex-end;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.primary_700};
    padding-left: ${RFValue(10)}px;;
`;