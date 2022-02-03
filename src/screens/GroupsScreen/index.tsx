import React, { Component } from 'react';
import { View } from 'react-native';

import GroupsList from '../../components/GroupsList';
import styles from './styles';

export default function GroupsScreen() {
        return (
            <View style={styles.container}>
                <GroupsList />
            </View>
        );
}

