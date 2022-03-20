import React, { useState } from 'react';
import { SectionList, View } from 'react-native';
import { Text } from 'react-native-paper';
import SearchBarSmall from '../../components/search/SearchBarSmall';
import { tabBarStyle } from "../../components/navigator/BottomNavigator";
import ContactItem from './ContactItem';
import { users } from './data';
import styles from './styles';



export default function CallsList({ navigation }: any) {

    const [value, setValue] = useState("");
    const [selected, setSelected] = useState(users.results.slice(1, 3));
    const [suggested, setSuggested] = useState(users.results.slice(8, 33));
    const [recent, setRecent] = useState(users.results.slice(4, 6));
    const [search, setSearch] = useState(users.results.slice(1, 2));


    const sections = [
        { title: 'Search', data: search },
        { title: 'Selected', data: selected },
        { title: 'Recent', data: recent },
        { title: 'Suggested', data: suggested }
    ];


    users.results.forEach(user => {
        user.username = user.name.first + " " + user.name.last;
    });

    // select user
    const onSelect = (item: any) => {
        if (!selected.includes(item)) setSelected(selected => [...selected, item])
        else Unselect(item)
    };


    // unselect user
    const Unselect = (user: any) => {
        setSelected(selected.filter(item => user != item))
    };


    // search
    const onSearch = (search: string) => {
        setValue(search);
        setSearch(users.results.filter(item => item.username.toLowerCase().includes(search.toLowerCase())));
        if(search == "") setSearch([]);
    };



    const renderItem = ({ item, section }: any) => {
        item.selected = selected.includes(item);
        //console.log(item.username);
        return <ContactItem section={section.title} onSelect={onSelect} item={item} />;
    };



    const SortAlphabetically = () => {
        const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        [...text].forEach(title => {
            const data = users.results.filter(item => item.name.title.charAt(0) == title)
            sections.push({ title, data })
        });
    };



    const renderSectionHeader = ({ section: { title } }: any) => {
        return (
            <View style={styles.hView}>
                <Text style={styles.header}>{title}</Text>
            </View>
        );
    };



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
                <SearchBarSmall value={value} onSearch={onSearch} />
            </View>
            <SectionList
                onScrollBeginDrag={() => onScroll(0.3)}
                onScrollEndDrag={() => onScroll(1)}
                onMomentumScrollEnd={() => onScroll(1)}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                sections={sections}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}
