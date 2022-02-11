import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from "react-native"
import AppStyles from '../config/styles';
import FeedList from '../components/FeedList';

export default function Feed() {
        return (
            <View style={styles.container}>
                <FeedList />
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