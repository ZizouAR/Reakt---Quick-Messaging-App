//
//  Screen
//  Chat App Sketch
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Screen extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					style={styles.group72View}>
					<View
						style={styles.group9View}>
						<View
							style={styles.group4View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/combined-shape-2.png")}
									style={styles.combinedShapeImage}/>
							</View>
							<Text
								style={styles.encryptedmessageText}>Message to this chat and calls are now</Text>
						</View>
					</View>
				</View>
				<View
					style={styles.group10View}>
					<Image
						source={require("./../../assets/images/group-7-2.png")}
						style={styles.group7Image}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.messageView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/placeholder-5.png")}
								style={styles.placeholderImage}/>
						</View>
						<Text
							style={styles.valueText}>Hi Anni, What’s Up</Text>
					</View>
				</View>
				<View
					style={styles.group11View}>
					<View
						style={styles.messageFourView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/placeholder-4.png")}
								style={styles.placeholderFourImage}/>
						</View>
						<Text
							style={styles.valueFiveText}>How about this friday</Text>
					</View>
					<Image
						source={require("./../../assets/images/group-12-2.png")}
						style={styles.group12Image}/>
				</View>
				<View
					style={styles.group10Copy2View}>
					<Image
						source={require("./../../assets/images/group-7-2.png")}
						style={styles.group7TwoImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.messageTwoView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/placeholder.png")}
								style={styles.placeholderTwoImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.valueTwoText}>Sounds Cool!!</Text>
						</View>
					</View>
				</View>
				<View
					style={styles.group13View}>
					<View
						style={styles.messageThreeView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/placeholder-2.png")}
								style={styles.placeholderThreeImage}/>
						</View>
						<Text
							style={styles.valueFourText}>Great Let’s catch up </Text>
					</View>
					<Image
						source={require("./../../assets/images/group-12-2.png")}
						style={styles.group12CopyImage}/>
				</View>
				<View
					style={styles.group10Copy3View}>
					<Image
						source={require("./../../assets/images/group-7-2.png")}
						style={styles.group7ThreeImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.placeholderView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/combined-shape-7.png")}
								style={styles.combinedShapeTwoImage}/>
						</View>
						<Text
							style={styles.valueThreeText}>01:24</Text>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "flex-start",
	},
	group72View: {
		backgroundColor: "rgba(233, 240, 251, 00.80)",
		borderRadius: 12,
		alignSelf: "center",
		width: 277,
		height: 71,
		marginTop: 125,
		justifyContent: "center",
		alignItems: "center",
	},
	group9View: {
		backgroundColor: "transparent",
		width: 217,
		height: 42,
	},
	group4View: {
		backgroundColor: "transparent",
		height: 20,
	},
	combinedShapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9,
		height: 12,
	},
	encryptedmessageText: {
		backgroundColor: "transparent",
		color: "rgb(145, 155, 191)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 20,
		position: "absolute",
		left: 9,
		right: 0,
		bottom: -25,
		height: 48,
	},
	group10View: {
		backgroundColor: "transparent",
		width: 212,
		height: 41,
		marginLeft: 22,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	group7Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 34,
		height: 34,
	},
	messageView: {
		backgroundColor: "transparent",
		width: 172,
		height: 41,
	},
	placeholderImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 42,
	},
	valueText: {
		color: "rgb(18, 18, 19)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.3,
		backgroundColor: "transparent",
		position: "absolute",
		left: 12,
		right: 18,
		top: 5,
	},
	group11View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 205,
		height: 41,
		marginRight: 20,
		marginTop: 148,
		flexDirection: "row",
		alignItems: "center",
	},
	messageFourView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 41,
		marginRight: 1,
	},
	placeholderFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 42,
	},
	valueFiveText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.3,
		backgroundColor: "transparent",
		position: "absolute",
		left: 16,
		right: 16,
		top: 4,
	},
	group12Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 13,
		height: 13,
		marginBottom: 1,
	},
	group10Copy2View: {
		backgroundColor: "transparent",
		width: 185,
		height: 41,
		marginLeft: 22,
		marginTop: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	group7TwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 34,
		height: 34,
	},
	messageTwoView: {
		backgroundColor: "transparent",
		width: 145,
		height: 41,
	},
	placeholderTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 42,
	},
	valueTwoText: {
		backgroundColor: "transparent",
		color: "rgb(18, 18, 19)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.3,
		paddingTop: 1,
		marginLeft: 12,
		marginRight: 13,
	},
	group13View: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 211,
		height: 41,
		marginRight: 20,
		marginTop: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	messageThreeView: {
		backgroundColor: "transparent",
		flex: 1,
		height: 41,
		marginRight: 1,
	},
	placeholderThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 42,
	},
	valueFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		letterSpacing: 0.3,
		position: "absolute",
		left: 15,
		right: 39,
		top: 5,
	},
	group12CopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 13,
		height: 13,
		marginBottom: 1,
	},
	group10Copy3View: {
		backgroundColor: "transparent",
		width: 291,
		height: 40,
		marginLeft: 22,
		marginTop: 22,
		flexDirection: "row",
		alignItems: "center",
	},
	group7ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 34,
		height: 34,
	},
	placeholderView: {
		backgroundColor: "transparent",
		width: 251,
		height: 40,
	},
	combinedShapeTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 41,
	},
	valueThreeText: {
		color: "rgb(42, 135, 255)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 13,
		backgroundColor: "transparent",
		position: "absolute",
		right: 12,
		top: 10,
	},
})
