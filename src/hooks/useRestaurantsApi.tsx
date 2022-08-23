import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import restaurantsApi from "../services/restaurantsApi";

interface RestaurantsContextData {
    getByPage: (page?: number) => any,
    getFiltered: (filter: string, page: number) => any,
    getById: (id: number) => any,
    isLoading: boolean
}

const RestaurantsApiContext = createContext<RestaurantsContextData>({} as RestaurantsContextData);

function RestaurantsProvider({ children }) {
    const [isLoading, setLoading] = useState(false);

    const getByPage = async (page: number) => {
        setLoading(true);
        try {
            const response = await restaurantsApi.get(`?page=${String(page)}&limit=10`);
            setLoading(false)
            return response.data.data;
        } catch (e) {
            Alert.alert(e.message);
            setLoading(false)
        }
    };

    const getFiltered = async (filter: string, page: number) => {
        setLoading(true);
        try {
            const response = await restaurantsApi.get(`?page=${String(page)}&limit=10&search=${encodeURI(filter)}`);
            setLoading(false)
            return response.data.data;
        } catch (e) {
            Alert.alert(e.message);
            setLoading(false)
        }
    };

    const getById = async (id: number) => {
        setLoading(true);
        try {
            const response = await restaurantsApi.get(`/${String(id)}`);
            setLoading(false);
            console.log(response)
            return response.data.data;
        } catch (e) {
            Alert.alert(e.message);
            setLoading(false)
        }

    };


    return <RestaurantsApiContext.Provider
        value={{
            getById,
            getByPage,
            getFiltered,
            isLoading
        }}
    >
        {children}
    </RestaurantsApiContext.Provider>
}

function useRestaurants() {
    const context = useContext(RestaurantsApiContext);
    return context;
}

export { RestaurantsProvider, useRestaurants };