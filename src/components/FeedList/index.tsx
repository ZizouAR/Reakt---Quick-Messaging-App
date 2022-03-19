import React, { Component } from 'react';
import { FlatList } from 'react-native';
import FeedItem from './FeedItem';
import styles from './styles';


const data = [
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Abdelhamid, Zinnedine, Soltane, Moha + 320',
        type: "DISCLAIMER"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 256',
        type: "SUCCESS"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 356',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex, Jacob Samuel, Sam, +12',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 10',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée, Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex,Jacob Mathews,Sam Tony',
        type: "IMPORTANT"
    }
];

export default function FeedList() {
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
