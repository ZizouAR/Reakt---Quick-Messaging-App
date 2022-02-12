import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';


const Tabs = ({ navigation }:Props) => {    
    const theme = useTheme();

    return (
        <View style={styles.buttonStyleContainer}>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
            <View><Ionicons name="notifications"  size={30} color="#3366FF"/><Badge style={styles.badge}>3</Badge></View>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
    <View><Ionicons name="newspaper"  size={30} color="#3366FF"/><Badge style={styles.badge}>7</Badge></View>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Feed')}>
    <View><MaterialIcons name="support-agent"  size={30} color="#3366FF"/><Badge style={styles.badge}>1</Badge></View>
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
        backgroundColor: "#D6DEF8",
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
      badge: {
        position: "absolute", 
        right: 20, 
        bottom:0, 
        color: "white", 
        backgroundColor: "#F84F31"
      },
});


interface Props {
    navigation: any
}

export default Tabs;