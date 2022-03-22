//
//  NewTask
//  events
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from "react-native"
import Modal from '../modal/Modal';
import ContactList from '../ContactsPicker/List';



export default function GroupModal({ visibility, setVisibility, info = { name: "", selected: [] }, update = false }: any) {

  const [name, setName] = useState(info.name);
  const [selected, setSelected] = useState(info.selected);


  const onSelectDone = (users: any) => {
    console.log(update)

    //console.log(name)
    //console.log("currentSelected : ")
    //console.log(selected)
  }

  const onSelectUpdate = (items: any) => {
    setSelected(items)
  }


  const RightHeader = () => {
    return <Button title={update ? "Update" : "Create"} disabled={selected.length == 0} onPress={onSelectDone} />
  }

  const LeftHeader = () => {
    return <Button title={"Cancel"} onPress={setVisibility} />
  }


  return <Modal title={(update ? "UPDATE" : "CREATE") + " GROUP"}
    visibility={visibility}
    ToggleModal={setVisibility}
    RightHeader={RightHeader}
    LeftHeader={LeftHeader}
    padding={false}>
    <View style={styles.header}>
      <TextInput
        autoCorrect={false}
        value={name}
        placeholder="Group name (required)"
        maxLength={100}
        onChangeText={setName}
        style={styles.titleTextInput}
      />
    </View>
    <ContactList
      currentSelected={selected}
      toggleNewTaskModal={setVisibility}
      onSelectUpdate={onSelectUpdate}
    />
  </Modal>
}



const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: "2%",
    marginVertical: "2%"
  },
  titleTextInput: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    padding: 0,
    width: "100%",
  },
})
