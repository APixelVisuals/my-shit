import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Items from "./screens/Items";

const Tabs = createBottomTabNavigator();

export default () => (
    <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, border: "#190425" } }}>
        <Tabs.Navigator initialRouteName="Home" tabBarOptions={{ inactiveBackgroundColor: "#190425", inactiveTintColor: "#faa6ff", activeBackgroundColor: "#250637", activeTintColor: "#faa6ff" }}>

            <Tabs.Screen
                name="Home"
                component={Home}
                options={{ title: "Home Screen" }}
            />

            <Tabs.Screen name="Items" component={Items} />

        </Tabs.Navigator>
    </NavigationContainer>
);