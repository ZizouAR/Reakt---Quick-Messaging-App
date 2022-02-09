//
//  ScreenThree
//  Onboarding Screens Free
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View , Dimensions} from "react-native"
import {h, w} from "../../../config/dimensions";
import { LinearGradient } from "expo-linear-gradient"


export default function SMSVerification({ navigation, route }: Props) {


	const onComponent18Pressed = () => {
		navigation.navigate('Home')
	}

	return <LinearGradient

				colors={["rgba(238, 237, 245, 0.71)", "rgba(240, 239, 246, 0.75)", "rgb(246, 246, 249)", "rgb(252, 252, 253)", "rgb(254, 254, 254)", "white"]}
				style={styles.viewViewLinearGradient}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 4.3*w,
							right: 4.3*w,
							top: 5.9*h,
							bottom: 11.5*h,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 38.9*h,
							}}>
							<Image
								source={require("./../../../../assets/images/group-14.png")}
								style={styles.group14Image}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									width: 54.7*w,
									top: 3.9*h,
									height: 35*h,
									alignItems: "center",
								}}>
								<View
									style={styles.group208View}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											alignSelf: "center",
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../../../assets/images/group-47.png")}
											style={styles.group47Image}/>
									</View>
									<View
										style={styles.group207View}>
										<Image
											source={require("./../../../../assets/images/call-2.png")}
											style={styles.callImage}/>
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
												source={require("./../../../../assets/images/path-470-2.png")}
												style={styles.path470Image}/>
										</View>
										<Image
											source={require("./../../../../assets/images/group-48.png")}
											style={styles.group48Image}/>
										<Image
											source={require("./../../../../assets/images/path-472.png")}
											style={styles.path472Image}/>
									</View>
								</View>
								<Text
									style={styles.verificationText}>Verification</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 3.2*w,
								marginRight: 3.2*w,
								marginTop: 18.5*h,
							}}>
							<View
								style={styles.rectangle121View}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 6.1*w,
									right: 6.4*w,
									top: 5.5*h,
									bottom: 2*h,
									flexDirection: "row",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											height: 3*h,
											marginLeft: 12.8*w,
											marginRight: 14.9*w,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<TextInput
											autoCorrect={false}
											placeholder="0"
											style={styles.textInputTextInput}/>
										<TextInput
											autoCorrect={false}
											placeholder="7"
											style={styles.textInputTwoTextInput}/>
										<View
											style={{
												flex: 1,
											}}/>
										<TextInput
											autoCorrect={false}
											placeholder="8"
											style={styles.textInputThreeTextInput}/>
										<TextInput
											autoCorrect={false}
											placeholder="3"
											style={styles.textInputFourTextInput}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 0.1*h,
											marginLeft: 10.1*w,
											marginRight: 12*w,
											marginTop: 1.7*h,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Image
											source={require("./../../../../assets/images/path-433.png")}
											style={styles.path433Image}/>
										<Image
											source={require("./../../../../assets/images/path-433.png")}
											style={styles.path433TwoImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../../../assets/images/path-433.png")}
											style={styles.path433ThreeImage}/>
										<Image
											source={require("./../../../../assets/images/path-433-2.png")}
											style={styles.path433FourImage}/>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<TouchableOpacity
										onPress={onComponent18Pressed}
										style={styles.component18Button}>
										<Text
											style={styles.component18ButtonText}>Verify</Text>
									</TouchableOpacity>
								</View>
								<Image
									source={require("./../../../../assets/images/path-432.png")}
									style={styles.path432Image}/>
							</View>
						</View>
						<Text style={styles.reSendCodeIn059Text}>re-send code in 0:59 </Text>
					</View>
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
							style={styles.enterA4DigitNumbText}>Enter a 4 digit number that{"\n"} was sent to + (1) 555 678 2810</Text>
					</View>
				</View>
			</LinearGradient>
}

const styles = StyleSheet.create({
	viewViewLinearGradient: {
		flex: 1,
	},
	viewView: {
		width: "100%",
		height: "100%",
	},
	group14Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 35.3*h,
	},
	group208View: {
		backgroundColor: "transparent",
		width: 54.7*w,
		height: 23.8*h,
	},
	group47Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 29.3*w,
		height: 23.8*h,
	},
	group207View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 1.6*h,
		height: 19.2*h,
	},
	callImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 9.1*w,
		width: 2.7*w,
		top: 9.7*h,
		height: 1.2*h,
	},
	path470Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		opacity: 0.1,
		height: 19.2*h,
	},
	group48Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 21.9*w,
		width: 9.6*w,
		top: 3.3*h,
		height: 5.8*h,
	},
	path472Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 20.8*w,
		width: 5.1*w,
		top: 6.8*h,
		height: 2.3*h,
	},
	verificationText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 3.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginTop: 7.4*h,
	},
	rectangle121View: {
		backgroundColor: "white",
		borderRadius: 9,
		shadowColor: "rgba(0, 0, 0, 0.11)",
		shadowRadius: 25,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 85.1*w,
		top: 0,
		height: 18.5*h
	},
	textInputTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		width: 3.7*w,
		height: 2.8*h,
	},
	textInputTwoTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		padding: 0,
		width: 3.7*w,
		height: 2.8*h,
		marginLeft: 9*w,
	},
	textInputThreeTextInput: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 3.7*w,
		height: 2.8*h,
		marginRight: 6.5*w,
	},
	textInputFourTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 3.7*w,
		height: 2.8*h,
	},
	path433Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 9.3*w,
		height: 0.1*h
	},
	path433TwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9.3*w,
		height: 0.1*h,
		marginLeft: 2.3*w,
	},
	path433ThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9.3*w,
		height: 0.1*h
	},
	path433FourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 9.3*w,
		height: 0.1*h,
	},
	component18Button: {
		backgroundColor: "#0084FF",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		width: 72.5*w,
		height: 6.2*h,
		marginLeft: 9.3*w
	},
	component18ButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	component18ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	path432Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 5.1*w,
		height: 2.3*h,
		marginRight: 2.4*w,
		marginTop: 0.6*h,
	},
	reSendCodeIn059Text: {
		color: "#0084FF",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	enterA4DigitNumbText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.7*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 3*h,
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		marginLeft: 20*w,
	},
})
