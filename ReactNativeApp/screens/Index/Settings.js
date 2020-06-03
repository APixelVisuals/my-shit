import React from "react";
import { Button } from "react-native";
import Wrapper from "../../components/Wrapper";

export default () => (
    <Wrapper>

        <Button title="Do a Thing" onPress={() => alert("This definitely changed something")} />

    </Wrapper>
);