import React from 'react';
import { Modal } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';


const ModalComponent = ({ title, visibility, children, RightHeader, LeftHeader, ToggleModal, modalLevel, padding }: Props) => {
    const level = modalLevel || 0;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}>
            <ModalHeader title={title} ToggleModal={ToggleModal} RightHeader={RightHeader} LeftHeader={LeftHeader}  modalLevel={level} />
            <ModalBody padding={padding}>
                {children}
            </ModalBody>
            <KeyboardSpacer />
        </Modal>
    )
}


interface Props {
    children: any,
    visibility: boolean,
    title: string,
    ToggleModal: any,
    padding?: boolean,
    modalLevel?: number,
    RightHeader?: any,
    LeftHeader?: any,
}

export default ModalComponent;