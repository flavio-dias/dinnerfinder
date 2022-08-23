import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { StackParamList } from "../../navigation/@types/StackParamList";
import { BackgroundIMG, Container, Name } from "./styles";

interface CardProps {
    name: string,
    image: string,
    id: number
}

const CardRestaurant = ({ name, image, id }: CardProps) => {
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();
    const onPressBtn = () => {
        navigation.navigate('Details', { id });
    }

    return <Container onPress={onPressBtn} >
        <BackgroundIMG
            source={{ uri: image }}
            resizeMode='cover'
            imageStyle={{ borderRadius: RFValue(8) }}
        >
            <Name>{name}</Name>
        </BackgroundIMG>
    </Container>
}

export default React.memo(CardRestaurant);