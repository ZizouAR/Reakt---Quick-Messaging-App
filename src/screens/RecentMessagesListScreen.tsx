import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Components
import SearchBarSmall from '../components/search/SearchBarSmall';
import Tabs from '../components/navigator/Tabs';
import RecentMessagesList from '../components/list/RecentMessagesList';
import NewMessage from '../components/buttons/NewMessage';
import FloatingButton from '../components/buttons/FloatingButton';
import { useGlobal } from 'reactn';

// Components
import EditingDeleteButton from '../components/buttons/EditingDeleteButton';

// Functions
import getLatestMessages from '../functions/getLatestMessages';

// Types
import Message from '../types/Message';

const MessagesListScreen = ({ navigation }:any) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ value, setValue ] = useState("");
    const [ contacts ] = useGlobal<any>('contacts');
    const [ selectedItems, setSelectedItems ] = useState([]);
    const [ messages, setMessages ] = useState<Message[]>(() => getLatestMessages(contacts)); 
    const theme:any = useTheme();
    
    // Allow edit button in header to change state
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                //backgroundColor: '#007AFF',
                //height: 170,
                //borderRadius: 30
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            headerLeft: () => ( // EDIT BUTTON
                messages.length > 0 ? <View style={{ marginLeft: 8 }}><Button title={isEditing ? "Cancel" : "Edit"} onPress={() => setIsEditing(isEditing ? false : true)}/></View> : null
            ), // NEW MESSAGE BUTTON
            headerRight: () => isEditing ? <EditingDeleteButton messages={messages} selectedItems={selectedItems} setSelectedItems={setSelectedItems} setMessages={setMessages} /> : <NewMessage messages={messages} setMessages={setMessages} />
        });
    }, [navigation, isEditing, messages]);

    return (
        <View>
        <ScrollView style={{ backgroundColor: "#F4F4F4", height: "100%" }}>

            <Tabs navigation={navigation}/>

            <RecentMessagesList
                isEditing={isEditing}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                messages={messages}
                setMessages={setMessages}
                navigation={navigation}
            />
        </ScrollView>
        <FloatingButton/>

        </View>

    )
}

export default MessagesListScreen;