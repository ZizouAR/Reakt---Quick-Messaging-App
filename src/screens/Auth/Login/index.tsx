//
//  ScreenFive
//  Onboarding Screens Free
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View , Dimensions} from "react-native"
import {h, w} from "../../../config/dimensions";
import { LinearGradient } from "expo-linear-gradient"
import PageControl from "react-native-page-control"

export default function Login({ navigation, route }: Props) {

	const onGroup209Pressed = () => {
		navigation.navigate('PhoneNumber')
	}

	const onComponent111Pressed = () => {
	}

	return <LinearGradient
				locations={[0, 0.59, 0.73, 0.81, 0.89, 1]}
				colors={["rgba(238, 237, 245, 0.71)", "rgba(240, 239, 246, 0.75)", "rgb(246, 246, 249)", "rgb(252, 252, 253)", "rgb(254, 254, 254)", "white"]}
				style={styles.viewViewLinearGradient}>
				<View
					style={styles.viewView}>
					<View
						pointerEvents="box-none"
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: "25%",
							flex: 1
						}}>
						<Image
							source={require("./../../../../assets/images/group-20.png")}
							style={styles.group20Image}/>
						<Image
							source={require("./../../../../assets/images/group-14.png")}
							style={styles.group14Image}/>
					</View>
					
					<View style={styles.description}>
						<Text
						style={styles.letSGetStartedText}>Let's Get Started</Text>
					<Text
						style={styles.joinUsNowAndEnjoText}>join us now and create your company network {"\n"} by providing an electronic communications, transfer, switching and other facilities for your employees</Text>
					</View>
					
					
					<PageControl
						numberOfPages={3}
						currentPage={0}
						pageIndicatorTintColor="rgb(178, 182, 185)"
						currentPageIndicatorTintColor="black"
						style={styles.navigationPageControl}/>

					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={onComponent111Pressed}
						style={styles.component111Button}>
						<Text
							style={styles.component111ButtonText}>Create Your Network</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onGroup209Pressed}
						style={styles.group209Button}>
						<Text
							style={styles.group209ButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
}

const styles = StyleSheet.create({
	viewViewLinearGradient: {
		flex: 1,
	},
	description: {
		alignItems: "center",
		marginTop: "25%"
	},
	viewView: {
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	group20Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "center",
		width: 56.8*w,
		top: "10%",
		height: 26.2*h,
	},
	group14Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		height: "100%",
	},
	letSGetStartedText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 3.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent"
	},
	joinUsNowAndEnjoText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 3.6*h,
		letterSpacing: 0.24,
		backgroundColor: "transparent",
		marginTop: "5%",
	},
	group21Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 14.4*w,
		height: 1*h,
		marginTop: 6.4*h,
	},
	component111ButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	component111ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	component111Button: {
		backgroundColor: "#006AFF",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 72.5*w,
		height: 6.2*h,
		marginBottom: 2.8*h,
	},
	group209ButtonText: {
		color: "#006AFF",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	group209Button: {
		backgroundColor: "white",
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "#006AFF",
		borderStyle: "solid",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 72.8*w,
		height: 6.2*h,
		marginBottom: 11.2*h,
	},
	group209ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	navigationPageControl: {
		backgroundColor: "transparent",
		marginTop: "5%"
	}
})
