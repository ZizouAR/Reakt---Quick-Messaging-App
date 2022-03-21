import React, { Component } from 'react';
import { View } from 'react-native';

import AppStyles from '../../config/styles';
import CallsList from '../../components/ContactsList';
import { StyleSheet } from 'react-native';


export default function Contacts({ navigation }:any) {
        return (
            <View style={styles.container}>
                <CallsList navigation={navigation} />
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