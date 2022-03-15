import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';
import {h, w} from "../../config/dimensions";


const Tabs = ({ navigation }:Props) => {    
    const theme = useTheme();

    return (
        <View style={styles.buttonStyleContainer}>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Invites')}>
            <View><Ionicons name="notifications"  size={35} color="#3366FF"/><Badge style={styles.badge}>3</Badge></View>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
    <View><Ionicons name="newspaper"  size={35} color="#3366FF"/><Badge style={styles.badge}>7</Badge></View>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Events')}>
    <View><Ionicons name="calendar"  size={35} color="#3366FF"/><Badge style={styles.badge}>1</Badge></View>
    </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonStyleContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: "5%",
        marginTop: "5%",
        paddingHorizontal: "10%",
        backgroundColor: "#D6DEF8",
        borderRadius: 10,
        marginBottom: "3%",

    },
    button: {
        backgroundColor: "transparent",
        padding: "3%",
        width: "35%",
        marginRight: "3%",
        borderRadius: 10,
        marginVertical: "3%",
        marginBottom: "5%"
      },
      badge: {
        position: "absolute", 
        right: "45%", 
        bottom:0, 
        color: "white", 
        backgroundColor: "#F84F31"
      },
});


interface Props {
    navigation: any
}

export default Tabs;
