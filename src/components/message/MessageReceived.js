//
//  MessageRevceived
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation } from "react-native"
import { h, w } from "../../config/dimensions"
import { Button, Menu, Divider, Provider } from 'react-native-paper';

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
						<Text style={{ fontSize: 16, color: "#000", justifyContent: "center" }}>I just realized it's Elizabeth's birthday next week. I want to plan a surprise 🎂 for her</Text>
						<View style={styles.leftArrow} />
						<View style={styles.leftArrowOverlap} />
					</View>
				</TouchableWithoutFeedback>

				<View
					style={styles.avatarView}>
					<View pointerEvents="box-none">
						<Image
							source={require("../../../assets/images/-avatar.png")}
							style={styles.avatarImage} />
					</View>
					<Image
						source={require("../../../assets/images/-available.png")}
						style={styles.availableImage} />
				</View>
			</View>
		</View>
	}
}

const styles = StyleSheet.create({
	/*Arrow head for recevied messages*/
	leftArrow: {
		position: "absolute",
		backgroundColor: "#DDE6FF",
		width: 20,
		height: 25,
		bottom: 0,
		borderBottomRightRadius: 25,
		left: -10,
	},

	leftArrowOverlap: {
		position: "absolute",
		backgroundColor: "#F0F5F9",
		width: 20,
		height: 35,
		bottom: -6,
		borderBottomRightRadius: 18,
		left: -20,
	},

	Container: {
		backgroundColor: "transparent",
		width: "100%",
		marginLeft: "2%",
		alignItems: "flex-start",
		marginBottom: "5%",
	},
	MessageReceived: {
		backgroundColor: "transparent",
		width: "85%",
		flexDirection: "row-reverse",
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	avatarView: {
		backgroundColor: "transparent",
		marginRight: "4%",
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
		backgroundColor: "#DDE6FF",
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 2.2 * h,
		alignSelf: 'flex-start',
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
