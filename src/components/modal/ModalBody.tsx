import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ModalBody = ({ children, padding }: Props) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: padding ? 16 : 10,
            paddingLeft: padding ? 16 : 10,
            backgroundColor: "#FFF",
            height: "100%"
        }}>
            {children}
        </View>
    )
}

interface Props {
    children: any,
    padding: boolean
}

export default ModalBody;