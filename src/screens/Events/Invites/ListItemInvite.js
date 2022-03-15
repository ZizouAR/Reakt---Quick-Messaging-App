//
//  ListItemInvite
//  events
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native"
import { h, w } from "../../../config/dimensions";


export default class ListItemInvite extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  
  }

  onListItemInvitePress = () => {
  
  }

  render() {
  
    return <TouchableWithoutFeedback
        onPress={this.onListItemInvitePress}>
        <View
          navigation={this.props.navigation}
          style={styles.listItemInvite}>
         
          <View
            style={[styles.listItemInviteView, {backgroundColor: this.props.backgroundColor}]}
            >
            <View
              pointerEvents="box-none"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
              }}>
              <Text
                style={styles.authorText}>Lucy Miller</Text>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                position: "absolute",
                left: 4.3*w,
                width: 45.1*w,
                top: 2*h,
                alignItems: "flex-start",
              }}>
              <Text
                style={styles.titleText}>Skype call: new challenges</Text>
              <Text
                style={styles.timeCopyText}>10:30 AM - 11:00 AM</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  }
}

const styles = StyleSheet.create({
  listItemInvite: {
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: "5%",
    marginLeft: "5%"
  },

  listItemInviteView: {
    borderRadius: 10,
    width: 72*w,
    height: 11.7*h,
  },
  authorText: {
    backgroundColor: "transparent",
    color: "black",
    fontFamily: "ArialMT",
    fontSize: 1.7*h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 4.3*w,
  },
  titleText: {
    color: "rgb(18, 18, 18)",
    fontFamily: "ArialMT",
    fontSize: 1.7*h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  timeCopyText: {
    backgroundColor: "transparent",
    color: "rgb(69, 70, 77)",
    fontFamily: "ArialMT",
    fontSize: 1.7*h,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 3.3*h,
  },
})
