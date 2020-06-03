import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default (props) => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LinearGradient colors={["#250637", "#190425"]} style={{ position: "absolute", alignItems: "center", justifyContent: "center", top: 0, bottom: 0, left: 0, right: 0 }}>

            {props.children}

        </LinearGradient>
    </View>
);