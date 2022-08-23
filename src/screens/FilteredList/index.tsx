import React, { useEffect, useState } from "react";
import { BackBtn, Container, FilterContainer, HeaderContainer, ListLabel, RestaurantsList, Subtitle, Title, TitleContainer, TitleRow } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import FilterInput from "../../components/FilterInput";
import { useRestaurants } from "../../hooks/useRestaurantsApi";
import LoadingFlatlist from "../../components/LoadingFlatlist";
import CardRestaurant from "../../components/CardRestaurant";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/@types/StackParamList";
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface RestaurantProps {
    name: string,
    id: number,
    image: string,
}

const FilteredList = () => {
    const theme = useTheme();
    const navigation = useNavigation<StackNavigationProp<StackParamList>>();
    const { filter } = useRoute().params as { filter: string };
    const [list, setList] = useState([]);
    const { isLoading, getFiltered } = useRestaurants();
    const [title, setTitle] = useState(filter);
    const [filterState, setFilterState] = useState('');
    const [page, setPage] = useState(1);
    const [noMore, setNoMore] = useState(false);
    const scrollY = useSharedValue(0);

    const submitFilter = () => {
        setTitle(filterState);
    }

    const scrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.value = e.nativeEvent.contentOffset.y;
    };

    const headerAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 500], [280, 0], Extrapolate.CLAMP),
            opacity: interpolate(scrollY.value, [0, 500], [1, 0])
        }
    })

    const endReached = () => {
        if (noMore) return;
        loadFilteredList(title, page + 1);
        setPage(page + 1);
    }

    const loadFilteredList = async (filter: string, page: number) => {
        let response = await getFiltered(filter, page);
        if (!response.length) {
            setNoMore(true);
            return;
        }
        setList(old => [...old, ...response]);
    }

    const renderItem = ({ item }: { item: RestaurantProps }) => {
        return <CardRestaurant name={item.name} image={item.image} id={item.id} />
    }

    useEffect(() => {
        setNoMore(false);
        setPage(1);
        setList([]);
        loadFilteredList(title, 1);
    }, [title]);

    return <Container>
        <Animated.View style={headerAnimation}>
            <HeaderContainer>
                <TitleRow>
                    <BackBtn onPress={() => navigation.goBack()}>
                        <MaterialIcons name='chevron-left' color={theme.colors.title} size={24} />
                    </BackBtn>
                    <TitleContainer>
                        <Subtitle>Resultados para</Subtitle>
                        <Title>{title ? title : 'Todos'}</Title>
                    </TitleContainer>
                </TitleRow>
                <FilterContainer>
                    <FilterInput value={filterState} setValue={setFilterState} onConfirm={submitFilter} />
                </FilterContainer>
                <ListLabel>Restaurantes</ListLabel>
            </HeaderContainer>
        </Animated.View>
        <RestaurantsList
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
            scrollEventThrottle={32}
            onScroll={scrollHandler}
        />
    </Container>
}

export default FilteredList;