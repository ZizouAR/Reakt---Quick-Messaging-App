import React, { useState } from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import ContactList from './List';
import Modal from '../modal/Modal';
import AvatarGroup from '../AvatarGroup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppStyles from '../../config/styles';



export default function ContactsPicker({ onSelectDone, currentSelected }: any) {

    const [modal, setModal] = useState(false);
    const [selected, setSelected] = useState(currentSelected);


    const toggleNewTaskModal = () => {
        setModal(!modal);
    }

    const done = () => {
        setModal(!modal);
        onSelectDone(selected);
    }

    const onSelectUpdate = (items: any) => {
        setSelected(items)
    }

    const RightHeader = () => {
        return <Button title={"Select"} disabled={selected.length == 0} onPress={done} />
    }

    const LeftHeader = () => {
        return <Button title={"Cancel"} onPress={toggleNewTaskModal} />
    }


    return (
        <View>
            {currentSelected.length > 0 ?
                <AvatarGroup onPress={toggleNewTaskModal} position="absolute" max={3} /> :
                <TouchableOpacity onPress={toggleNewTaskModal} style={{ borderWidth: 1, borderStyle: "dashed", padding: "5%", borderColor: AppStyles.colors.darkBleu, width: 50, height: 50, borderRadius: 25, alignItems: "center", justifyContent: "center", alignSelf: "flex-end" }}>
                    <FontAwesome name="user-plus" color={AppStyles.colors.lightBleu} size={23} />
                </TouchableOpacity>}
            <Modal title="CONTACTS" visibility={modal} ToggleModal={toggleNewTaskModal} RightHeader={RightHeader} LeftHeader={LeftHeader} padding={false}>
                <ContactList currentSelected={currentSelected} toggleNewTaskModal={toggleNewTaskModal} onSelectUpdate={onSelectUpdate} onSelectDone={onSelectDone} />
            </Modal>
        </View>
    );
}
