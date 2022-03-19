import React, { Component, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from '../../components/modal/Modal';
import NewEvent from './NewEvent';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import TaskList from '../../components/TaskList';



export default function Tasks({ navigation }: any) {

  const [modal, setModal] = useState(false);


  const toggleNewEventModal = () => {
    setModal(!modal);
  }


  return (
    <View style={{ flex: 1 }}>
      <TaskList navigation={navigation} />
      <Modal title="🗓️ NEW EVENT" visibility={modal} setVisibility={toggleNewEventModal}>
        <NewEvent />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
  },
});