import React, { useState } from 'react';
import { SectionList, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBarSmall from '../../components/search/SearchBarSmall';
import { tabBarStyle } from "../../components/navigator/BottomNavigator";

import NotificationItem from './NotificationItem';
import AppStyles from '../../config/styles';

import { users } from './data';
import styles from './styles';

export default function CallsList({ navigation }: any) {

    const [value, setValue] = useState("");

    const renderItem = ({ item }: any) => {
        return <NotificationItem  item={item} />;
    };

    const onPress = () => {
        console.log('Pressed!');
    };

    const renderSectionHeader = ({ section: { title } }: any) => {
        return (
            <View style={styles.hView}>
                <Text style={styles.header}>{title}</Text>
            </View>
        );
    };

    const renderHeader = () => {
        return (
            <View style={styles.searchBar}>
                <SearchBarSmall value={value} setValue={setValue}/>
            </View>
        );
    };

    let recent = users.results.slice(10, 12);
    let suggested = users.results.slice(14, 30);

    const data = [
        { title: 'Recent', data: recent },
        { title: 'Other', data: suggested }
    ];


    const onScroll = (opacity: number) => {
        navigation.setOptions({
            tabBarStyle: {
                ...tabBarStyle,
                opacity
            }
        })
    }


    return (
        <View>
            <SectionList
                onScrollBeginDrag={() => onScroll(0.3)} 
                onScrollEndDrag={() => onScroll(1)}
                onMomentumScrollEnd={() => onScroll(1)}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                sections={data}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
}
