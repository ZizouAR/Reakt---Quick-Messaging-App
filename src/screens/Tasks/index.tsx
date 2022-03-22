import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
      <Modal title="📝 NEW TASK" visibility={modal} ToggleModal={toggleNewTaskModal}>
        <NewTask />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
  },
});