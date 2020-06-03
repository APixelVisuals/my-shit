import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./Items/Index";
import Item from "./Items/Item";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Index">

        <Stack.Screen
            name="Index"
            component={Index}
            options={{ title: "Items" }}
        />

        <Stack.Screen name="Item" component={Item} />

    </Stack.Navigator>
);