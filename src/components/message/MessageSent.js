//
//  MessageRevceived
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation } from "react-native"
import { h, w } from "../../config/dimensions"
import Ionicons from 'react-native-vector-icons/Ionicons';



export default class MessageReceived extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			isReactionVisible: false,
			reaction: null,
			istimestampVisible: false
		};
	}

	setReaction = (action) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ reaction: action, isReactionVisible: false })
	}

	onBubbleLongPress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({ isReactionVisible: true })
	}
	onBubblePress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		if (this.state.isReactionVisible == true)
			this.setState({ isReactionVisible: false })
		else
			this.setState({ istimestampVisible: !this.state.istimestampVisible });
	}

	render() {

		return <View style={styles.Container}>
			{this.state.istimestampVisible ?
				<Text style={styles.timestampText}>SUN 13:15</Text> : null}


			<View style={styles.MessageReceived}>

				<TouchableWithoutFeedback
					onPress={() => this.onBubblePress()}>
					<View style={styles.bubbleText}>
						<Text style={{ fontSize: 16, color: "white", justifyContent: "center" }}>Nah!</Text>
						<View style={styles.rightArrow} />
						<View style={styles.rightArrowOverlap} />
					</View>
				</TouchableWithoutFeedback>

				<View
					style={styles.avatarView}>
						<Ionicons name="checkmark-circle-outline"  size={20} color="#2C87FF"/>

				</View>


			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	rightArrow: {
		position: "absolute",
		backgroundColor: "#2C87FF",
		width: 20,
		height: 25,
		bottom: 0,
		borderBottomLeftRadius: 25,
		right: -10
	  },
	  
	  rightArrowOverlap: {
		position: "absolute",
		backgroundColor: "#F0F5F9",
		width: 20,
		height: 35,
		bottom: -6,
		borderBottomLeftRadius: 18,
		right: -20
	  
	  },

	Container: {
		marginBottom: "5%",
		backgroundColor: "transparent",
		width: "100%",
		alignItems: "flex-end"
	},
	MessageReceived: {
		backgroundColor: "transparent",
		width: "85%",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		marginRight: "5%"
	},
	avatarView: {
		backgroundColor: "transparent",
		marginLeft: "2%",
		marginBottom: "3%",
	},
	avatarImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: 7.2 * w,
		height: 3.3 * h,
		marginLeft: 1.7 * w,
	},
	availableImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		position: "absolute",
		bottom: 0,
		right: -5,
		width: 2.9 * w,
		height: 1.3 * h,
	},

	bubbleText: {
		backgroundColor: "#2C87FF",
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 2.2 * h,
		alignSelf: 'flex-end',
		maxWidth: 87 * w,
		borderRadius: 20,
	},

	timestampText: {
		color: "rgb(168, 168, 168)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3 * h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 0.6 * h
	},

})
