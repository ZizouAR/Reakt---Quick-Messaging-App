import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import ContactList from './List';
import Modal from '../modal/Modal';
import AvatarGroup from '../AvatarGroup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppStyles from '../../config/styles';



export default function ContactsPicker({ onSelectDone, currentSelected }: any) {

    const [modal, setModal] = useState(false);


    const toggleNewTaskModal = () => {
        setModal(!modal);
    }



    return (
        <View>
            {currentSelected.length > 0 ? 
            <AvatarGroup onPress={toggleNewTaskModal}  position="absolute" max={3} /> :
            <TouchableOpacity onPress={toggleNewTaskModal} style={{borderWidth: 1, borderStyle: "dashed", padding: "5%", borderColor: AppStyles.colors.darkBleu, width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center", alignSelf: "flex-end"}}>
            <FontAwesome name="user-plus" color={AppStyles.colors.lightBleu} size={23} />
            </TouchableOpacity>}
            <Modal title="CONTACTS" visibility={modal} setVisibility={toggleNewTaskModal} padding={false}>
                <ContactList currentSelected={currentSelected} toggleNewTaskModal={toggleNewTaskModal} onSelectDone={onSelectDone} />
            </Modal>
        </View>
    );
}
