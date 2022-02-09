//
//  ScreenSix
//  Onboarding Screens Free
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"


export default function Welcome({ navigation, route }: Props) {

	
	const onComponent110Pressed = () => {
		navigation.navigate('Login')
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
							height: 287,
							marginTop: "20%"
						}}>
						<Image
							source={require("./../../../../assets/images/group-14.png")}
							style={styles.group14Image}/>
						<Image
							source={require("./../../../../assets/images/group-38.png")}
							style={styles.group38Image}/>
						<Image
							source={require("./../../../../assets/images/call-3.png")}
							style={styles.callImage}/>
						<Image
							source={require("./../../../../assets/images/path-541.png")}
							style={styles.objectsImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							marginBottom: "20%"
						}}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								width: "100%",
								top: 0,
								bottom: 0,
								alignItems: "center",
							}}>
							<Text
								style={styles.welcomeText}>Welcome</Text>
							<Text
								style={styles.wellYouHaveThusCText}>Well you have thus come this far!{"\n"}Speak friend and enter or some lorem ipsum</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={onComponent110Pressed}
								style={styles.component110Button}>
								<Text
									style={styles.component110ButtonText}>Hooray!</Text>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../../../assets/images/group-14.png")}
							style={styles.group206Image}/>
					</View>
				</View>
			</LinearGradient>
}

const styles = StyleSheet.create({
	viewView: {
		width: "100%",
		height: "100%",
	},
	viewViewLinearGradient: {
		flex: 1,
	},
	group14Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: "100%",
	},
	group38Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: "100%",
		height: "100%",
	},
	callImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
	},
	objectsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center"
	},
	welcomeText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 27,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	wellYouHaveThusCText: {
		color: "rgb(26, 26, 26)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 25,
		letterSpacing: 1.05,
		backgroundColor: "transparent",
		marginTop: "5%",
	},
	component110ButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	component110ButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	component110Button: {
		backgroundColor: "rgb(79, 68, 255)",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: "70%",
		height: "12%",
	},
	group206Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
	},
})
