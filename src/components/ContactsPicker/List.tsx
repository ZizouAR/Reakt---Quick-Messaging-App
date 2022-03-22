import React, { useEffect, useState } from 'react';
import { SectionList, View, TouchableOpacity, Text } from 'react-native';
import SearchBarSmall from '../../components/search/SearchBarSmall';
import ContactItem from './Item';
import { users } from './data';
import styles from './styles';

export default function ContactList({onSelectUpdate, currentSelected}: any) {

    const [value, setValue] = useState("");
    const [selected, setSelected] = useState(currentSelected);
    const [suggested, setSuggested] = useState(users.results.slice(8, 33));
    const [recent, setRecent] = useState(users.results.slice(4, 6));
    const [searched, setSearched] = useState(users.results.slice(1, 1));
    const [selectButtonOpacity, setSelectButtonOpacity] = useState(1);


    // update parent state
    useEffect(() => {
        onSelectUpdate(selected)
     }, [selected]);



    const sections = [
        { title: 'Searched', data: searched },
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
        setValue("");
        setSearched([]);
    };


    // unselect user
    const Unselect = (user: any) => {
        setSelected(selected.filter(item => user != item), )
    };


    // search
    const onSearch = (search: string) => {
        setValue(search);
        setSearched(users.results.filter(item => item.username.toLowerCase().includes(search.toLowerCase())));
        if (search == "") setSearched([]);
    };



    const renderItem = ({ item, section }: any) => {
        item.selected = selected.includes(item);
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
        setSelectButtonOpacity(opacity)
    }



    return (
        <View style={{ flex: 1, height: "100%", width: "100%" }}>
            <View style={[styles.searchBar, { width: "100%", alignSelf: "center" }]}>
                <SearchBarSmall value={value} onSearch={onSearch} />
            </View>

            <SectionList
                onScrollBeginDrag={() => onScroll(0.2)}
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
