import React from "react";
import { Button } from "react-native";
import Wrapper from "../../components/Wrapper";

export default ({ navigation }) => (
    <Wrapper>

        <Button title="Item 1" onPress={() => navigation.navigate("Item", { id: 1 })} />
        <Button title="Item 2" onPress={() => navigation.navigate("Item", { id: 2 })} />
        <Button title="Item 3" onPress={() => navigation.navigate("Item", { id: 3 })} />
        <Button title="Item 4" onPress={() => navigation.navigate("Item", { id: 4 })} />
        <Button title="Item 5" onPress={() => navigation.navigate("Item", { id: 5 })} />

    </Wrapper>
);