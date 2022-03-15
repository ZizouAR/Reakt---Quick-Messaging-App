import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ModalBody = ({ children }:Props) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center", 
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: "#FFF",
        height: "100%"
    }
});

interface Props {
    children: any
}

export default ModalBody;