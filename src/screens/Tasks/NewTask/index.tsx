//
//  NewTask
//  events
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React, { useState } from 'react'
import { ScrollView, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity, Button } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppStyles from '../../../config/styles';
import ContactsPicker from '../../../components/ContactsPicker';



export default function NewTask() {

  const [date, setDate] = useState(new Date(1598051730000));


  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };


  const onSelectDone = (users: any) => {
    console.log("selected : ")
    console.log(users)
  }


  return <View style={styles.newEventView}>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.contentScrollView}
    >
      <View style={{ height: "100%" }}>
        <View
          style={styles.eventDetailsTitleView}>
          <TextInput
            autoCorrect={false}
            placeholder="Task title"
            maxLength={100}
            style={styles.titleTextInput}
          />
        </View>
        {/*<Text>selected: {date.toLocaleString()}</Text>*/}
        <View
          style={styles.timeView}>
          <View
            style={styles.datetimeView}>
            <Text
              style={styles.addParticipantsSevenText}>Starts</Text>
            <DateTimePicker
              style={styles.datetime}
              testID="dateTimePicker"
              value={date}
              mode={"datetime"}
              is24Hour={true}
              onChange={onChange}
            />
          </View>
          <View
            style={styles.datetimeView}>
            <Text
              style={styles.addParticipantsSevenText}>Ends</Text>
            <DateTimePicker
              style={styles.datetime}
              testID="dateTimePicker"
              value={date}
              mode={"datetime"}
              is24Hour={true}
              onChange={onChange}
            />
          </View>
        </View>

        <View
          style={styles.members}>
          <Text
            style={styles.assignToText}>Assign to</Text>
          <View style={styles.AvatarsView}>
            <ContactsPicker onSelectDone={onSelectDone} />
          </View>
        </View>

        <View>

          <View
            style={styles.descriptionView}>
            <MaterialIcons name="notes" color="gray" size={23} />
            <TextInput
              returnKeyType="done"
              autoCorrect={false}
              placeholder="Add Description"
              maxLength={400}
              multiline
              style={styles.addDescription} />
          </View>

          <View>
            <TouchableOpacity style={styles.done}>
              <Ionicons name="checkmark" style={{ alignSelf: "center" }} color={AppStyles.colors.bleu} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  done: {
    marginTop: "10%",
    marginRight: "5%",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: AppStyles.colors.lightBleu,
    alignSelf: "flex-end",
    justifyContent: "center",
  },


  newEventView: {
    flex: 1,
    marginLeft: "5%",
    marginRight: "5%",
    height: "100%",
    marginBottom: "10%"
  },


  contentScrollView: {
    flex: 1,
    height: "100%",
  },

  eventDetailsTitleView: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "15%",
    marginBottom: "8%"
  },

  titleTextInput: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    padding: 0,
    width: "100%",
  },

  timeView: {
    marginTop: "5%",
    marginBottom: "10%",
  },

  members: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1
  },
  addParticipantsSevenText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    alignSelf: "center",
  },

  assignToText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    alignSelf: "center",
    flex: 1,
  },

  AvatarsView: {
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: "20%"
  },

  datetime: {
    alignSelf: "flex-end",
    width: "100%",
    flex: 1,
  },

  datetimeView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%"
  },

  descriptionView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "15%",
    height: "50%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: "5%"
  },

  addDescription: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    width: "80%",
    marginLeft: "10%",
    fontSize: 16
  },
})
