import React, { useEffect, useState } from "react";
import { BackBtn, BackgroundIMG, Container, Divider, Header, InfoContainer, InfoData, Logo, Subtitle, TextDetail, Title, TitleContainer } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/@types/StackParamList";
import { useRestaurants } from "../../hooks/useRestaurantsApi";
import LoadingScreen from "../../components/LoadingScreen";

interface DataProps {
    description: string,
    website: string,
    telephone: string,
    name: string,
    image: string,
    logo: string,
    price_range: string,
    payment_methods: string,
    opening_hours: string
}

const Details = () => {
    const theme = useTheme();
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();
    const { id } = useRoute().params as { id: number };
    const { getById } = useRestaurants();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<DataProps>();

    const getData = async () => {
        let response = await getById(id);
        setData(response);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);


    if (isLoading) return <LoadingScreen />

    return <Container>
        <Header>
            <BackgroundIMG source={{ uri: data?.image }} />
            <BackBtn onPress={() => navigation.goBack()} >
                <MaterialIcons name='chevron-left' color={theme.colors.background} size={24} />
            </BackBtn>
        </Header>
        <InfoContainer>
            <TitleContainer>
                <Logo source={{ uri: data?.logo ? data.logo : 'https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png' }}
                    resizeMode='cover' />
                <Title>{data?.name}</Title>
            </TitleContainer>
            <InfoData showsVerticalScrollIndicator={false} >
                <Subtitle>Descrição</Subtitle>
                <TextDetail breakline >{data?.description}</TextDetail>
                <Subtitle>Contato</Subtitle>
                <TextDetail>{data?.telephone}</TextDetail>
                <TextDetail breakline >{data?.website}</TextDetail>
                <Subtitle>Faixa de preço</Subtitle>
                <TextDetail breakline >{data?.price_range}</TextDetail>
                <Divider />
                <Subtitle>Horários de funcionamento</Subtitle>
                <TextDetail breakline >{data?.opening_hours}</TextDetail>
                <Subtitle>Formas de pagamento</Subtitle>
                <TextDetail breakline >{data?.payment_methods}</TextDetail>
            </InfoData>
        </InfoContainer>
    </Container>
}

export default Details;