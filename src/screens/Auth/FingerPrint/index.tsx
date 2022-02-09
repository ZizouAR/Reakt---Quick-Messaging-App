//
//  FingerPrint
//  Onboarding Screens Free
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2018 otp. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View , Dimensions} from "react-native"
import {h, w} from "../../../config/dimensions";
import { LinearGradient } from "expo-linear-gradient"


export default function FingerPrint({ navigation, route }: Props) {

	const onComponent19Pressed = () => {
		navigation.navigate('Welcome')
	}

	const onGroup50Pressed = () => {
	
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
							marginTop: 5.2*h,
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
						<View
							style={styles.group214View}>
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
									source={require("./../../../../assets/images/path-308.png")}
									style={styles.path308Image}/>
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
								<View
									style={styles.group46View}>
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
											source={require("./../../../../assets/images/group-45.png")}
											style={styles.group45Image}/>
									</View>
									<Image
										source={require("./../../../../assets/images/fingerprints.png")}
										style={styles.fingerprintsImage}/>
								</View>
							</View>
						</View>
					</View>
					<Text
						style={styles.fingerprintText}>Fingerprint</Text>
					<Text
						style={styles.restYourFingerAtText}>Rest your finger at the sensor {"\n"}to capture your fingerprint{"\n"}(optional)</Text>
					<Image
						source={require("./../../../../assets/images/fingerprint.png")}
						style={styles.fingerprintImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={onComponent19Pressed}
						style={styles.component19Button}>
						<Text
							style={styles.component19ButtonText}>continue</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={onGroup50Pressed}
						style={styles.group50Button}>
						<Image
							source={require("./../../../../assets/images/arrow-forward.png")}
							style={styles.group50ButtonImage}/>
						<Text
							style={styles.group50ButtonText}>skip this step</Text>
					</TouchableOpacity>
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
		alignItems: "center",
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
	group38Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		alignSelf: "center",
		width: 54.4*w,
		top: 5.9*h,
		height: 23.3*h,
	},
	callImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 23.5*w,
		width: 2.9*w,
		top: 14.9*h,
		height: 1.4*h,
	},
	group214View: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 59.5*w,
		top: 2.7*h,
		height: 27.5*h,
	},
	path308Image: {
		backgroundColor: "transparent",
		opacity: 0.1,
		resizeMode: "cover",
		height: 27.5*h,
	},
	group46View: {
		backgroundColor: "transparent",
		height: 20.8*h,
		marginLeft: 3.5*w,
		marginRight: 2.4*w,
	},
	group45Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 20.8*h,
	},
	fingerprintsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 9.9*w,
		top: 6.4*h,
		height: 6.4*h,
	},
	fingerprintText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 3.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginTop: 0.5*h,
	},
	restYourFingerAtText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.7*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 3*h,
		letterSpacing: 0.22,
		alignSelf: "flex-start",
		marginLeft: 21.3*w,
		marginTop: 2.5*h,
	},
	fingerprintImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 23.5*w,
		height: 14*h,
		marginTop: 4.2*h,
	},
	component19ButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	component19Button: {
		backgroundColor: "rgb(79, 68, 255)",
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 72.5*w,
		height: 6.2*h,
		marginBottom: 1.9*h,
	},
	component19ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	group50Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 35.5*w,
		height: 2.2*h,
		marginBottom: 6.4*h,
	},
	group50ButtonImage: {
		resizeMode: "contain",
		marginRight: 2.7*w,
	},
	group50ButtonText: {
		color: "rgb(79, 68, 255)",
		fontFamily: "ArialMT",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})
