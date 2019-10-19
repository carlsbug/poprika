import React from "react";
import { StyleSheet, Text, View } from 'react-native'; //bridges

export default function Loading()
{
    return (
    <View style = {styles.container}>
        <Text style = {styles.title}>
            Poprika  
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 50,
    },
    title:{
      color: '#ff6a5a',
      fontSize: 35,
      fontWeight: 'bold',
    },
    dates:{
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
      },
    // whiteView: {
    //   flex: 8,
    //   backgroundColor: 'white'
    // },
  });