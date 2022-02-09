//
//  ScreenFour
//  Onboarding Screens Free
//
//  Created by Abdelhamid Larachi.
//  Copyright � 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {h, w} from "../../../config/dimensions";
import { LinearGradient } from "expo-linear-gradient"


export default function PhoneNumber({ navigation, route }: Props) {

	const onComponent15Pressed = () => {
		navigation.navigate('SMSVerification')
	}

	
	return <LinearGradient
				start={{
					x: 0.5,
					y: 0,
				}}
				end={{
					x: 0.5,
					y: 1,
				}}
				locations={[0, 0.59, 0.73, 0.81, 0.89, 1]}
				colors={["rgba(238, 237, 245, 0.71)", "rgba(240, 239, 246, 0.75)", "rgb(246, 246, 249)", "rgb(252, 252, 253)", "rgb(254, 254, 254)", "white"]}
				style={styles.viewViewLinearGradient}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 35.3*h,
							marginLeft: 4.3*w,
							marginRight: 4.3*w,
							marginTop: 4.7*h,
						}}>
						<Image
							source={require("./../../../../assets/images/group-14.png")}
							style={styles.group14Image}/>
						<View
							style={styles.group215View}>
							<Image
								source={require("./../../../../assets/images/group-43.png")}
								style={styles.group43Image}/>
							<Image
								source={require("./../../../../assets/images/group-38-2.png")}
								style={styles.group38Image}/>
							<Image
								source={require("./../../../../assets/images/ellipse-133.png")}
								style={styles.ellipse133Image}/>
						</View>
						<Image
							source={require("./../../../../assets/images/call.png")}
							style={styles.callImage}/>
					</View>
					<Text
						style={styles.registrationText}>Verification</Text>
					<Text
						style={styles.enterYourMobileNuText}>Enter your mobile number to {"\n"}receive a verification code</Text>
					<View
						style={styles.component111View}>
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
							<View
								style={styles.rectangle120View}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: 72.5*w,
								top: 4.3*h,
								height: 15.8*h,
								alignItems: "center",
							}}>
							<View
								style={styles.component16View}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										alignSelf: "center",
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<TextInput
										autoCorrect={false}
										placeholder="+ (1) 555 678 2810"
										style={styles.textInputTextInput}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Image
										source={require("./../../../../assets/images/path-432.png")}
										style={styles.path471Image}/>
								</View>
							</View>
							<TouchableOpacity
								onPress={onComponent15Pressed}
								style={styles.component15Button}>
								<Text
									style={styles.component15ButtonText}>Send</Text>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../../../assets/images/800px-flag-of-algeria.png")}
							style={styles.pxFlagOfTheUnImage}/>
					</View>
				</View>
			</LinearGradient>
}

const styles = StyleSheet.create({
	viewView: {
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	viewViewLinearGradient: {
		flex: 1,
	},
	group14Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 35.3*h,
	},
	group215View: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 64.5*w,
		top: 5.5*h,
		height: 25.1*h,
	},
	group43Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 3.1*h,
		height: 22*h,
	},
	group38Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 4*w,
		right: 3.7*w,
		top: 0,
		height: 24.3*h,
	},
	ellipse133Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 11.5*w,
		width: 5.3*w,
		top: 7.4*h,
		height: 2.5*h,
	},
	callImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 25.9*w,
		width: 2.7*w,
		top: 13.5*h,
		height: 1.2*h,
	},
	registrationText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 3.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 1*h,
	},
	enterYourMobileNuText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 3.6*h,
		letterSpacing: 0.24,
		alignSelf: "flex-start",
		marginLeft: 20.8*w,
		marginTop: 2.2*h,
	},
	component111View: {
		backgroundColor: "transparent",
		width: 85.3*w,
		height: 23.5*h,
		marginTop: 5.5*h,
	},
	rectangle120View: {
		backgroundColor: "white",
		borderRadius: 9,
		shadowColor: "rgba(0, 0, 0, 0.11)",
		shadowRadius: 25,
		shadowOpacity: 1,
		height: 23.5*h,
	},
	component16View: {
		backgroundColor: "white",
		borderRadius: 16,
		borderWidth: 1,
		borderColor: "#0084FF",
		borderStyle: "solid",
		width: 72.5*w,
		height: 6.2*h,
	},
	textInputTextInput: {
		color: "#0084FF",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		width: 35.2*w,
		height: 2.2*h,
	},
	path471Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 5.1*w,
		height: 2.3*h,
		marginRight: 2.4*w,
	},
	component15Button: {
		backgroundColor: "#0084FF",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 72.5*w,
		height: 6.2*h,
		marginTop: 3.4*h,
	},
	component15ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	component15ButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	pxFlagOfTheUnImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 10.4*w,
		width: 9.1*w,
		top: 5.9*h,
		height: 3*h,
	},
})
