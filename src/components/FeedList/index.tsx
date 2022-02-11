import React, { Component } from 'react';
import { FlatList } from 'react-native';
import FeedItem from './FeedItem';
import styles from './styles';

const data = [
    {
        title: 'Ticket #4630',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '15 days ago',
        members: 'Abdelhamid, Zinnedine, Soltane, Moha + 320'
    },
    {
        title: 'Ticket #2145',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '30 days ago',
        members: 'Vicky, Alex, Bob, William + 256'
    },
    {
        title: 'Ticket #4630',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '30 days ago',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400'
    },
    {
        title: 'Ticket #2145',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '10 days ago',
        members: 'Vicky, Alex, Bob, William + 356'
    },
    {
        title: 'Direction',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '5 days ago',
        members: 'Tom Alex, Jacob Samuel, Sam, +12'
    },
    {
        name: 'Direction Générale',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '24 days ago',
        members: 'Vicky, Alex, Bob, William + 10'
    },
    {
        title: 'Amis',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '1 day ago',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2'
    },
    {
        title: 'Mission',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: '28 days ago',
        members: 'Tom Alex,Jacob Mathews,Sam Tony'
    }
];

export default function GroupsList() {
    const renderItem = ({ item }:any) => {
        return <FeedItem item={item} />;
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
