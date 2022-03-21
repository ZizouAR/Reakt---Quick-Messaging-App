import React, { useState } from 'react';
import { SectionList, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBarSmall from '../../components/search/SearchBarSmall';
import { tabBarStyle } from "../../components/navigator/BottomNavigator";

import ContactItem from './ContactItem';
import AppStyles from '../../config/styles';

import { users } from './data';
import styles from './styles';

export default function CallsList({ navigation }: any) {

    const [value, setValue] = useState("");

    const renderItem = ({ item }: any) => {
        return <ContactItem  item={item} />;
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
            <TouchableOpacity
                onPress={onPress}
            >
                <View style={styles.groupView}>
                    <Icon
                        size={28}
                        style={styles.grpIcn}
                        color={AppStyles.colors.accentColor}
                        name="supervisor-account"
                    />

                    <Text style={styles.grpText}>Start Group Call</Text>
                </View>
            </TouchableOpacity>
        );
    };

    let recent = users.results.slice(31, 33);
    let suggested = users.results.slice(1, 30);

    const data = [
        { title: 'Recent', data: recent },
        { title: 'Suggested', data: suggested }
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
            <View style={styles.searchBar}>
                <SearchBarSmall value={value} setValue={setValue}/>
            </View>
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
