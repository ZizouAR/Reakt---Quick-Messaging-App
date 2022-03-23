import React, { Component } from 'react';
import { View } from 'react-native';

import AppStyles from '../../config/styles';
import NotificationList from '../../components/NotificationList';
import { StyleSheet } from 'react-native';


export default function Notifications({ navigation }:any) {
        return (
            <View style={styles.container}>
                <NotificationList navigation={navigation} />
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