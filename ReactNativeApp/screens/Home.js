import "react-native-gesture-handler";
import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import Index from "./Index/Index";
import Settings from "./Index/Settings";
import Sponsor from "./Index/Sponsor";

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator initialRouteName="Index" drawerContent={props => (
        <DrawerContentScrollView {...props}>
            <LinearGradient colors={["#250637", "#190425"]} start={[1, 0.5]} end={[0, 0.5]} style={{ flex: 1, height: Dimensions.get("window").height - 78, alignItems: "center", justifyContent: "center" }}>

                <DrawerItem
                    label="Home"
                    onPress={() => props.navigation.navigate("Index")}
                />

                <DrawerItem
                    label="Settings"
                    onPress={() => props.navigation.navigate("Settings")}
                />

                <DrawerItem
                    label="Sponsor"
                    onPress={() => props.navigation.navigate("Sponsor")}
                />

            </LinearGradient>
        </DrawerContentScrollView>
    )} drawerStyle={{ backgroundColor: "#3E0A5C" }}>

        <Drawer.Screen
            name="Index"
            component={Index}
            options={{ title: "Home" }}
        />

        <Drawer.Screen name="Settings" component={Settings} />

        <Drawer.Screen name="Sponsor" component={Sponsor} />

    </Drawer.Navigator>
);