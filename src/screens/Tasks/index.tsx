import React, { Component, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from '../../components/modal/Modal';
import NewTask from './NewTask';
import TaskList from '../../components/TaskList';



export default function Tasks({ navigation }: any) {

  const [modal, setModal] = useState(false);


  const toggleNewTaskModal = () => {
    setModal(!modal);
  }


  return (
    <View style={{ flex: 1 }}>
      <TaskList toggleNewTaskModal={toggleNewTaskModal}  navigation={navigation} />
      <Modal title="📝 NEW TASK" visibility={modal} setVisibility={toggleNewTaskModal}>
        <NewTask />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
  },
});