import React, { Component } from 'react';
import { FlatList } from 'react-native';
import GroupsItem from './GroupItem';
import styles from './styles';

const data = [
    {
        name: 'Service',
        last_active: '15 days ago',
        members: 'Abdelhamid, Zinnedine, Soltane, Moha + 320'
    },
    {
        name: 'Commune',
        last_active: '30 days ago',
        members: 'Vicky, Alex, Bob, William + 256'
    },
    {
        name: 'Wilaya',
        last_active: '30 days ago',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400'
    },
    {
        name: 'Département',
        last_active: '10 days ago',
        members: 'Vicky, Alex, Bob, William + 356'
    },
    {
        name: 'Direction',
        last_active: '5 days ago',
        members: 'Tom Alex, Jacob Samuel, Sam, +12'
    },
    {
        name: 'Direction Générale',
        last_active: '24 days ago',
        members: 'Vicky, Alex, Bob, William + 10'
    },
    {
        name: 'Amis',
        last_active: '1 day ago',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2'
    },
    {
        name: 'Mission',
        last_active: '28 days ago',
        members: 'Tom Alex,Jacob Mathews,Sam Tony'
    }
];

export default function GroupsList() {
    const renderItem = ({ item }:any) => {
        return <GroupsItem item={item} />;
    };

        return (
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        );
}
