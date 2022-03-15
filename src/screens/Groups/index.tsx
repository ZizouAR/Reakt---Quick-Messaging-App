import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from "react-native"
import AppStyles from '../../config/styles';
import GroupsList from '../../components/GroupsList';

export default function Groups() {
        return (
            <View style={styles.container}>
                <GroupsList />
            </View>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppStyles.colors.lightWhite
    }
});