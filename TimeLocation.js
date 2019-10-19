import React from "react";
import {StyleSheet, View, Text} from "react-native";
import Proptypes from "prop-types";

export default function TimeLocation({temp}){
    return <View style={styles.container}>
    <Text> {temp}
        </Text>
    </View>
}

TimeLocation.propTypes = {
    temp: Proptypes.number.isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

