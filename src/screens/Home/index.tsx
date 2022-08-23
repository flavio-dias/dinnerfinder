import React, { useEffect } from "react";
import { useState } from "react";
import CardRestaurant from "../../components/CardRestaurant";
import FilterInput from "../../components/FilterInput";
import LoadingFlatlist from "../../components/LoadingFlatlist";
import { useRestaurants } from "../../hooks/useRestaurantsApi";
import { BGImage, Container, FlatlistContainer, FlatlistRestaurants, Header, LabelList, Subtitle, Title } from "./styles";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/@types/StackParamList";

interface RestaurantProps {
    name: string,
    id: number,
    image: string,
}

const Home = () => {
    const [filter, setFilter] = useState('');
    const { getByPage, isLoading } = useRestaurants();
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [noMoreResults, setNoMore] = useState(false);
    const scrollY = useSharedValue(0);
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();

    const searchFilter = () => {
        navigation.navigate('FilteredList', { filter });
    };

    const scrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.value = e.nativeEvent.contentOffset.y;
    };

    const headerAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 1000], [313, 20], Extrapolate.CLAMP),
            opacity: interpolate(scrollY.value, [0, 1000], [1, 0])
        }
    })

    const loadList = async (p: number) => {
        const listpage = await getByPage(p);
        if (!listpage.length) {
            setNoMore(true);
            return;
        }
        setList(old => [...old, ...listpage]);
    }

    const endReached = () => {
        if (noMoreResults) return;
        loadList(page + 1);
        setPage(page + 1);
    }

    const renderItem = ({ item }: { item: RestaurantProps }) => {
        return <CardRestaurant name={item.name} image={item.image} id={item.id} />
    }

    useEffect(() => {
        setList([]);
        loadList(1);
    }, []);

    return <Container>
        <Animated.View
            style={headerAnimation}
        >
            <Header>
                <BGImage source={require('../../assets/images/home_background.png')} resizeMode='cover'>
                    <Title>Descubra novos sabores</Title>
                    <Subtitle>
                        Aqui eu converso com você sobre nossa proposta
                    </Subtitle>
                </BGImage>
            </Header>
        </Animated.View>
        <FlatlistContainer>
            <FilterInput value={filter} setValue={setFilter} onConfirm={searchFilter} />
            <LabelList>Restaurantes</LabelList>
            <FlatlistRestaurants
                data={list}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                onEndReached={endReached}
                ListFooterComponent={
                    isLoading && <LoadingFlatlist />
                }
                onScroll={scrollHandler}
                scrollEventThrottle={32}
            />
        </FlatlistContainer>
    </Container>
}

export default Home;