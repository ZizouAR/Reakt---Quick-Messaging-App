//
//  NewTask
//  events
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React, { useState } from 'react'
import { ScrollView, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity } from "react-native"
import { h, w } from "../../../config/dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppStyles from '../../../config/styles';



export default function NewTask() {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('datetime');
  const [show, setShow] = useState(false);



  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };


  const onSwitchOffValueChanged = () => {

  }

  const onRightIconPressed = () => {

  }

  const onLeftIconPressed = () => {

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
            style={styles.eventDetailsDetailEightView}>
            <Text
              style={styles.addParticipantsSevenText}>Starts</Text>
            <DateTimePicker
              style={styles.addParticipantsSevenTextButton}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          </View>
          <View
            style={styles.eventDetailsDetailSevenView}>
            <Text
              style={styles.addParticipantsSixText}>Ends</Text>
            <DateTimePicker
              style={styles.addParticipantsSevenTextButton}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
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
            <TouchableOpacity style={styles.circle}>
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

  circle: {
    marginTop: "20%",
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

  switchAllDay: {
    position: "absolute",
    right: 0
  },

  contentScrollView: {
    flex: 1,
    height: "100%",
  },
  eventDetailsTitleView: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "flex-start",
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
    marginVertical: "20%"
  },

  timeView: {
    marginTop: "5%",
    marginBottom: "10%",
  },
  eventDetailsDetailNineView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%"
  },

  addParticipantsEightText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: "5%",
  },

  eventDetailsDetailEightView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "12%",
    marginBottom: "20%"
  },
  addParticipantsSevenText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    position: "absolute",
    left: 0,
  },
  addParticipantsSevenTextButton: {
    position: "absolute",
    right: 0,
    width: "100%"
  },
  eventOptionComponentsAccesoryTimeTextInput: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    paddingTop: "2%",
    width: "30%",
  },
  eventDetailsDetailSevenView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "4%"
  },
  addParticipantsSixText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
  },
  eventOptionComponentsAccesoryTimeTwoView: {
    backgroundColor: "transparent",
    width: "30%",
    height: 5.7 * h,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  pmTwoTextInput: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    padding: 0,
  },
  eventDetailsDetailSixView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addParticipantsFiveText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    left: 0,
    position: "absolute",

  },
  eventOptionComponentsAccesoryTimeView: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  pmTextInput: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent",
  },
  tagsView: {
    backgroundColor: "transparent",
    height: 11.3 * h,
    marginTop: 2.7 * h,
  },
  eventDetailsDetailFiveView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsEventParticipantsCopy3FiveImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 6.9 * w,
    height: 3.2 * h,
    marginLeft: 8.5 * w,
  },
  eventOptionComponentsTitleScrollView: {
    width: "100%",
    marginLeft: "20%"
  },
  enventTagView: {
    backgroundColor: "rgb(207, 236, 255)",
    borderRadius: 16,
    width: 25.3 * w,
    height: 3.9 * h,
    justifyContent: "center",
  },
  meetingText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 1.7 * h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginLeft: 5.9 * w,
    marginRight: 5.9 * w,
  },
  enventTagCopy2View: {
    backgroundColor: "rgb(207, 236, 255)",
    borderRadius: 16,
    width: 18.1 * w,
    height: 3.9 * h,
    justifyContent: "flex-end",
  },
  meetingThreeText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 1.7 * h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginLeft: 3.7 * w,
    marginRight: 3.7 * w,
  },
  enventTagCopyView: {
    backgroundColor: "rgb(207, 236, 255)",
    borderRadius: 16,
    width: 22.7 * w,
    height: 3.9 * h,
    justifyContent: "flex-end",
  },
  meetingTwoText: {
    color: "rgb(51, 51, 51)",
    fontFamily: "ArialMT",
    fontSize: 1.7 * h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    marginLeft: 4.8 * w,
    marginRight: 4.8 * w,
  },
  addParticipantsButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    alignSelf: "flex-start",
    width: 20 * w,
    height: 2.7 * h,
    marginLeft: 30.1 * w,
    marginBottom: 1.5 * h,
  },
  addParticipantsButtonText: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontSize: 2 * h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
  },
  addParticipantsButtonImage: {
    resizeMode: "contain",
    marginRight: 2.7 * w,
  },
  eventDetailsDetailFourView: {
    backgroundColor: "transparent",
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconsEventParticipantsCopy3FourImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 4.3 * w,
    height: 2.7 * h,
    marginLeft: 9.6 * w,
  },
  addLocation: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    width: "75%",
    marginLeft: "10%",
    fontSize: 16
  },
  eventDetailsDetailThreeView: {
    backgroundColor: "transparent",
    height: 5.7 * h,
    marginBottom: 2.7 * h,
    flexDirection: "row",
    alignItems: "center",
  },
  iconsEventParticipantsCopy3ThreeImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 4.3 * w,
    height: 2.5 * h,
    marginLeft: 9.6 * w,
  },
  addParticipantsThreeText: {
    backgroundColor: "transparent",
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontSize: 2 * h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginRight: 51.5 * w,
  },
  eventDetailsDetailTwoView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "8%",
  },
  iconsEventParticipantsCopy3TwoImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 6.4 * w,
    height: 1.7 * h,
    marginLeft: 8.5 * w,
  },
  addParticipantsTwoText: {
    color: "rgb(141, 146, 166)",
    fontFamily: "ArialMT",
    fontStyle: "normal",
    fontWeight: "normal",
    backgroundColor: "transparent",
    textAlign: "center",
    width: "75%",
    fontSize: 16
  },
  descriptionView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "8%",
    height: "50%",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    padding: "5%"
  },
  iconsEventParticipantsCopy3Image: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 4.3 * w,
    height: 2.1 * h,
    marginLeft: 9.6 * w,
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
