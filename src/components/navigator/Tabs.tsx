import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tabs = ({ navigation }:Props) => {    
    const theme = useTheme();

    return (
        <View style={styles.buttonStyleContainer}>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
  	<Ionicons name="notifications"  size={30} color="#007AFF"/>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
  	<Ionicons name="newspaper"  size={30} color="#007AFF"/>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
  	<MaterialIcons name="support-agent"  size={30} color="#007AFF"/>
    </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyleContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: "5%",
        paddingHorizontal: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: "5%",

    },
    button: {
        backgroundColor: "transparent",
        padding: 18,
        width: "35%",
        marginRight: "3%",
        borderRadius: 10,
        marginVertical: "3%",
        marginBottom: "5%"
      },
      text: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
      },
});


interface Props {
    navigation: any
}

export default Tabs;