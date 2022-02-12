import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';
import Modal from '../modal/Modal';
import InputAutoCompleteChips from '../Inputs/InputAutoCompleteChips';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useKeyboard } from '@react-native-community/hooks'
import {h, w} from '../../config/dimensions'

export default function FloatingButton() {

    const [modalOpen, setModalOpen] = useState(false);
    const [subject, setSubject] = React.useState('');
    const [description, setDescription] = React.useState('');
    const keyboard = useKeyboard();
    
    const setAttach = () => {

    }

    const setCalendar = () => {

    }

    const setVoice = () => {

    }

    const setPencil = () => {

    }

    const send = () => {
      
    }


  return <View>
  <FAB
    style={styles.fab}
    small
    animated
    icon="pencil"
    color="#006AFF"
    onPress={() => setModalOpen(true)}
      />
      
      <Modal title="✏️ Create Request" visibility={modalOpen} setVisibility={setModalOpen}>

      
      <View style={styles.TextView}>
        <Text style={styles.to}>To:  </Text>
      <InputAutoCompleteChips/>
      </View>

      <View style={styles.TextView}>
        <Text style={styles.to}>Subject:  </Text>
        <TextInput
      style={styles.subject}
      placeholder="..."
      value={subject}
      onChangeText={subject => setSubject(subject)}
      maxLength={40}
    />    
      </View>


      <View style={styles.divider}/>

      <TextInput
      style={styles.description}
      placeholder="Description"
      value={description}
      numberOfLines={4}
      multiline
      onChangeText={description => setDescription(description)}
      maxLength={300}
    />


<View style={[styles.icons, { bottom: keyboard.keyboardHeight + 14.77*h }]}>

<TouchableOpacity style={styles.icon} onPress={() => setVoice()}>
  	<MaterialCommunityIcons name="microphone"  size={23} color="#ABAFB2"/>
</TouchableOpacity>
<TouchableOpacity style={styles.icon} onPress={() => setAttach()}>
  	<Ionicons name="attach"  size={23} color="#ABAFB2"/>
</TouchableOpacity>
<TouchableOpacity style={styles.icon} onPress={() => setCalendar()}>
  	<Ionicons name="calendar"  size={23} color="#ABAFB2"/>
</TouchableOpacity>
<TouchableOpacity style={styles.icon} onPress={() => setPencil()}>
  	<MaterialCommunityIcons name="format-font"  size={23} color="#ABAFB2"/>
</TouchableOpacity>
<TouchableOpacity style={styles.send} onPress={() => send()}>
  <Ionicons name="md-send"  size={23} color="#007aff" />
</TouchableOpacity>
</View>


    </Modal>
      </View>
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#D6DEF8",
    color: "black",
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 30,
  },
  subject: {
    backgroundColor: "white",
    fontSize: 14,
    width: "82%"
  },

  TextView: { 
    marginTop: "5%",
    flexDirection: 'row', 
    alignItems: 'center',
  },
  description: { 
    marginTop: "5%",
    flexDirection: 'row', 
    alignItems: 'flex-start',
    padding: 10,
    width: "100%",
    height: "25%",
  },
  icons: { 
    marginTop: "5%",
    flexDirection: 'row', 
    alignItems: 'flex-end',
    justifyContent: "flex-start",
    width: "100%",
    position: "absolute"
  },
  to: {
    color: "#605e56"
  },
  icon: {
    marginRight: "5%"
  },
  send: {
    marginRight: "5%",
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    position: "absolute",
    right: 0
  },
  divider: {
    marginTop: "5%",
    borderBottomColor: '#605e56',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf:'stretch'
  }
})