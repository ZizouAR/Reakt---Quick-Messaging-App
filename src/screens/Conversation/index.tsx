//
//  Messenger chat
//  Messenger
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import MessageSent from "../../components/message/MessageSent"
import MessageReceived from "../../components/message/MessageReceived"
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, LayoutAnimation, Platform } from "react-native"
import { h, w } from "../../config/dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Modal from '../../components/modal/Modal';
import UserProfile from "./UserProfile";


const Conversation = ({ navigation, route }: Props) => {

	const [text, setText] = useState('');
	const [inputWidth, setInputWidth] = useState(62 * w);
	const [modalOpen, setModalOpen] = useState(false);
	const [visible, setVisible] = useState(false);
	const [microphone, setMicrophone] = useState(true);




	const openMenu = () => setVisible(true);
	const closeMenu = () => setVisible(false);



	const onArrowBackPress = () => {
		navigation.navigate('Home')
	}

	const onAvatarPress = () => {

	}


	const onPhonePress = () => {

	}

	const onTaskPress = () => {

	}

	const onLikeButtonPress = () => {

	}

	const onMorePress = () => {

	}

	const onPhotoPress = () => {

	}

	const onMicroPress = () => {

	}

	const onCameraPress = () => {

	}

	const onInputChange = () => {

	}

	const onArrowNextPress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setText('');
		setInputWidth(62 * w);
		setMicrophone(true)
		Keyboard.dismiss();
	}

	const onInputFocus = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setText('');
		setInputWidth(71.4 * w);
		setMicrophone(false)
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

	}


	const textsviewFlatListMockData = [{
		key: "1",
	}, {
		key: "2",
	}, {
		key: "3",
	}, {
		key: "4",
	}, {
		key: "5",
	}, {
		key: "6",
	}, {
		key: "7",
	}, {
		key: "8",
	}, {
		key: "9",
	}, {
		key: "10",
	}]

	const renderTextsviewFlatListCell = ({ item }: any) => {
		return (<View>
			<MessageReceived
				navigation={navigation} />
			<MessageSent
				navigation={navigation} />
		</View>
		)
	}

	return <View style={styles.ConversationView}>
		<View
			pointerEvents="box-none"
			style={{
				width: "100%",
				height: "100%",
				backgroundColor: "#F0F5F9"
			}}>


			<View style={styles.headerView}>

				<View style={{
					//flexDirection: "row",
					justifyContent: "flex-start",
					alignSelf: "center",
					alignItems: "flex-start",
					backgroundColor: "#F0F5F9",
					flex: 1,
					marginLeft: "5%"
				}}>
					<TouchableOpacity onPress={onArrowBackPress}>
						<Ionicons name="chevron-back" size={25} color="#ABAFB2" />
					</TouchableOpacity>
				</View>


				<View style={styles.userinfoviewView}>
					<TouchableOpacity onPress={() => setModalOpen(true)}>
						<View style={styles.avatarView}>
							<TouchableOpacity
								onPress={onAvatarPress}
								style={styles.avatarButton}>
								<Image
									source={require("../../../assets/images/-avatar.png")}
									style={styles.avatarImage} />
							</TouchableOpacity>
						</View>
						<View
							style={styles.userInformationView}>
							<View
								style={styles.statusView}>
								<Ionicons name="alert-circle-sharp" size={10} color="#50ebaa" style={styles.availableImage} />
								<Text
									style={styles.statusText}>Active now</Text>
							</View>
							<Text
								style={styles.usernameText}>Abdelhamid Larachi</Text>
						</View>
					</TouchableOpacity>

				</View>

				<View
					style={{
						//flexDirection: "row",
						justifyContent: "flex-end",
						alignSelf: "center",
						alignItems: "flex-end",
						backgroundColor: "#F0F5F9",
						flex: 1,
						marginRight: "5%",
					}}>

					<View style={{ marginBottom: "20%" }}>
						<TouchableOpacity onPress={onPhonePress}>
							<MaterialCommunityIcons name="phone" size={23} color="#ABAFB2" />
						</TouchableOpacity>
					</View>

					<View >
						<TouchableOpacity onPress={onTaskPress}>
							<FontAwesome5 name="tasks" size={23} color="#ABAFB2" />
						</TouchableOpacity>
					</View>
				</View>


			</View>

			<View
				style={styles.textsviewFlatListViewWrapper}>
				<FlatList
					renderItem={renderTextsviewFlatListCell}
					data={textsviewFlatListMockData}
					style={styles.textsviewFlatList} />
			</View>

			<View style={styles.inputWrapper}>
				<View
					style={styles.moreView}>
					<TouchableOpacity
						onPress={onMorePress}>
						<MaterialCommunityIcons name="plus-circle-outline" size={25} color="#ABAFB2" />
					</TouchableOpacity>
				</View>
				{microphone && <View
					style={styles.microView}>
					<TouchableOpacity
						onPress={onMicroPress}>
						<MaterialCommunityIcons name="microphone" size={23} color="#ABAFB2" />
					</TouchableOpacity>
				</View>}

				<View style={styles.msgInputView}>
					<TextInput
						style={{
							backgroundColor: '#f1f0f0',
							height: 4.3 * h,
							width: inputWidth,
							borderRadius: 20,
							color: 'black',
							paddingHorizontal: 10,
							fontSize: 1.9 * h
						}}
						placeholder="Aa"
						onChangeText={(value) => setText(value)}
						onFocus={() => onInputFocus()}
						onBlur={() => onArrowNextPress()}
					/>
					{/*<MaterialCommunityIcons name="face" size={19} color="#ABAFB2" style={styles.smileyIcon} />*/}
				</View>

				<View
					style={styles.sendView}>
					<TouchableOpacity
						onPress={onInputChange}>
						<Ionicons name="md-send" size={23} color="#ABAFB2" />
					</TouchableOpacity>
				</View>
			</View>



			{Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
		</View>
		<Modal title="" visibility={modalOpen} ToggleModal={setModalOpen}>
			<UserProfile contact={route.params.contact} />
		</Modal>
	</View>
}


const styles = StyleSheet.create({

	ConversationView: {
		backgroundColor: "#F0F5F9",
		width: "100%",
		flex: 1,
	},
	textsviewFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	textsviewFlatListViewWrapper: {
		flex: 1,
		alignSelf: "center",
		width: "100%",
		height: '100%',
	},

	inputWrapper: {
		alignSelf: "flex-end",
		width: "100%",
		height: "7%",
		backgroundColor: "#F0F5F9",
		flexDirection: "row",
		paddingHorizontal: "5%"
	},
	userinfoviewView: {
		backgroundColor: "#F0F5F9",
		height: "25%",
		alignSelf: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	headerView: {
		backgroundColor: "#F0F5F9",
		width: "100%",
		height: "20%",
		flexDirection: "row",
		marginTop: "5%"
	},
	avatarView: {
		backgroundColor: "transparent",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "10%"
	},
	avatarImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 12.3 * w,
		height: 5.7 * h,
	},
	avatarButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	availableImage: {
		backgroundColor: "transparent",
		width: 3.9 * w,
		height: 1.8 * h,
		top: 2 * h,
		right: 5 * w
	},
	userInformationView: {
		backgroundColor: "#F0F5F9",
		alignSelf: "center",
		width: "100%",
	},
	statusText: {
		color: "rgba(0, 0, 0, 0.4)",
		fontFamily: "ArialMT",
		fontSize: 1.6 * h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	statusView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: "3%"
	},
	usernameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2 * h,
		textAlign: "center",
		backgroundColor: "transparent",
		width: '100%',
	},
	moreView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		marginRight: "2%"
	},
	moreImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		position: "absolute",
		top: 2.2 * h
	},

	msgInputView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center",
	},
	smileyIcon: {
		alignItems: "flex-end",
		justifyContent: "flex-end",
		position: "absolute",
		right: "8%"
	},
	microView: {
		backgroundColor: "transparent",
		alignSelf: "center",
	},
	sendView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		justifyContent: "flex-end",
	},
	sendButton: {
		backgroundColor: "transparent",
		justifyContent: "flex-end",
		alignSelf: "flex-end",
	},
})


export default Conversation;