import React, { useLayoutEffect, useState } from 'react';
import { View, Platform, Button, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

// Components
import Tabs from '../../components/navigator/Tabs';
import RecentMessagesList from '../../components/list/RecentMessagesList';
import NewMessage from '../../components/buttons/NewMessage';
import CreateRequestModal from '../../components/modal/CreateRequestModal';
import SegmentedControl from '../../components/SegmentedControl';
import { useGlobal } from 'reactn';
import {h, w} from "../../config/dimensions";
import { tabBarStyle } from "../../components/navigator/BottomNavigator";


// Components
import EditingDeleteButton from '../../components/buttons/EditingDeleteButton';

// Functions
import getLatestMessages from '../../functions/getLatestMessages';

// Types
import Message from '../../types/Message';


const MessagesList = ({ navigation }:any) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [ value, setValue ] = useState("");
    const [ contacts ] = useGlobal<any>('contacts');
    const [ selectedItems, setSelectedItems ] = useState([]);
    const [ messages, setMessages ] = useState<Message[]>(() => getLatestMessages(contacts)); 
    const theme:any = useTheme();
    
    // Allow edit button in header to change state
    useLayoutEffect(() => {

        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#F4F4F4",
                shadowColor: 'transparent'
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              }, 
            
            headerTitle: () => (
            <View style={{ width: 34.7*w, alignSelf: "center", marginLeft: Platform.OS === 'ios' ? 0 : 17*w}}>
              <SegmentedControl />
              </View>),

            headerLeft: () => ( // EDIT BUTTON
                messages.length > 0 ? <View style={{ marginLeft: 2.1*w }}><Button title={isEditing ? "Cancel" : "Edit"} onPress={() => setIsEditing(isEditing ? false : true)}/></View> : null
            ), // NEW MESSAGE BUTTON
            headerRight: () => isEditing ? <EditingDeleteButton messages={messages} selectedItems={selectedItems} setSelectedItems={setSelectedItems} setMessages={setMessages} /> : <NewMessage messages={messages} setMessages={setMessages} />
        });
    }, [navigation, isEditing, messages]);


    const onScroll = (opacity: number) => {
        navigation.setOptions({
            tabBarStyle: {
                ...tabBarStyle,
                opacity }
    })}

    

    return (
        <View>
        <ScrollView 
        onScrollBeginDrag={() => onScroll(0.3)} 
        onScrollEndDrag={() => onScroll(0.95)} 
        onMomentumScrollEnd={() => onScroll(0.95)} 
        style={{ backgroundColor: "#F4F4F4", height: "100%" }}>
        
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
        <CreateRequestModal/>

        </View>

    )
}

export default MessagesList;
