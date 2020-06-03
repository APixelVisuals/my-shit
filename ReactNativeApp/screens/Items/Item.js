import React from "react";
import { Text, Button } from "react-native";
import Wrapper from "../../components/Wrapper";

export default ({ route, navigation }) => (
    <Wrapper>

        <Text style={{ color: "#ffffff" }}>Item {route.params.id}</Text>

        <Button title="Back" onPress={navigation.goBack} />

    </Wrapper>
);