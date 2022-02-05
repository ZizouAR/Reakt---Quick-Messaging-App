import React, { Component } from 'react';
import { View } from 'react-native';

import AppStyles from '../config/styles';
import CallsList from '../components/ContactList';
import { StyleSheet } from 'react-native';


export default function ContactsScreen() {
        return (
            <View style={styles.container}>
                <CallsList />
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