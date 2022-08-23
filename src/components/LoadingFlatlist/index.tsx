import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { Container, TextLoading } from "./styles";

const LoadingFlatlist = () => {
    const theme = useTheme();

    return <Container>
        <TextLoading>Carregando</TextLoading>
        <ActivityIndicator color={theme.colors.primary} />
    </Container>
}

export default LoadingFlatlist;