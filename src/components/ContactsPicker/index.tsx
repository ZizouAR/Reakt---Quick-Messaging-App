import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import ContactList from './List';
import Modal from '../modal/Modal';
import AvatarGroup from '../AvatarGroup';



export default function ContactsPicker({ onSelectDone }: any) {

    const [modal, setModal] = useState(false);


    const toggleNewTaskModal = () => {
        setModal(!modal);
    }


    return (
        <View>
            <AvatarGroup onPress={toggleNewTaskModal} position="absolute" max={3} />
            <Modal title="CONTACTS" visibility={modal} setVisibility={toggleNewTaskModal} padding={false}>
                <ContactList onSelectDone={onSelectDone} />
            </Modal>
        </View>
    );
}
