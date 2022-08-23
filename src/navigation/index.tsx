import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Details from "../screens/Details";
import FilteredList from "../screens/FilteredList";
import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export default function Navigation() {

    return <NavigationContainer>
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="FilteredList"
                component={FilteredList}
            />
            <Screen
                name="Details"
                component={Details}
            />
        </Navigator>
    </NavigationContainer>
}