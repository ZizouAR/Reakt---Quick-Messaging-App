//
//  Messenger chat
//  Messenger
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import MessageSent from "../components/message/MessageSent"
import MessageReceived from "../components/message/MessageReceived"
import React, { useState } from 'react';
import { Linking, Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard, LayoutAnimation, Platform} from "react-native"
import {h, w} from "../config/dimensions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Modal from '../components/modal/Modal';
import ProfileImage from '../components/image/ProfileImage';
import ActionButton from '../components/buttons/ActionButton';

const Conversation = ({ navigation, route }: Props) => {

	const [text, setText] = useState('');
	const [inputWidth, setInputWidth] = useState(38.64*w);
    const [modalOpen, setModalOpen] = useState(false);
    const [contact, setContacat] = useState(route.params.contact);


	const onArrowBackPress = () => {
		navigation.navigate('BottomNavigator')
	}

	const onAvatarPress = () => {
	
	}

	const onPhonePress = () => {
	
	}

	const onVideoCallPress = () => {
	
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
		setInputWidth(38.6*w);
		Keyboard.dismiss();
	}

	const onInputFocus = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setText('');
		setInputWidth(71.4*w);
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
				navigation={navigation}/>
				<MessageSent
				navigation={navigation}/>
				</View>
		)
	}
	
		return <View
				style={styles.ConversationView}>
				<View
					style={styles.textsviewFlatListViewWrapper}>
					<FlatList
						renderItem={renderTextsviewFlatListCell}
						data={textsviewFlatListMockData}
						style={styles.textsviewFlatList}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: -15.45*w,
						top: 0,
						bottom: -1.22*h,
					}}>
					<View
						style={styles.conversationChatHeaderView}>
						<View
							pointerEvents="box-none"
							style={{
								width: 76.3*w,
								height: 14*h,
							}}>
								
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
									<TouchableOpacity onPress={() => setModalOpen(true)}>
									<View
									style={styles.userinfoviewView}>
									<View
										style={styles.avatarView}>
										<TouchableOpacity
											onPress={onAvatarPress}
											style={styles.avatarButton}>
											<Image
												source={require("../../assets/images/-avatar.png")}
												style={styles.avatarImage}/>
										</TouchableOpacity>
										<Image
											source={require("../../assets/images/-available.png")}
											style={styles.availableImage}/>
									</View>
									
									<View
										style={styles.userInformationView}>
										<Text
											style={styles.statusText}>Active now</Text>
										<Text
											style={styles.usernameText}>Abdelhamid Larachi</Text>
									</View>
								</View>
								</TouchableOpacity>
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
									
								<TouchableOpacity
								onPress={onArrowBackPress}>
									<Image
									source={require("../../assets/images/arrow-back.png")}
									style={styles.arrowBackImage}/>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={styles.contactviewView}>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 2.6*h,
									marginLeft: 2.4*w,
									marginRight: 7.2*w,
									marginTop: 1.1*h,
								}}>
								<TouchableOpacity
									onPress={onPhonePress}
									style={styles.phoneCall}>
									<Image
											source={require("../../assets/images/phone-icon.png")}
											style={styles.phoneIconImage}/>
								</TouchableOpacity>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									height: 3.9*h,
									marginLeft: 2.4*w,
									marginRight: 9.7*w,
									marginTop: 0.7*h,
								}}>
								<TouchableOpacity
									onPress={onVideoCallPress}
									style={styles.videoCall}>
									<Image
											source={require("../../assets/images/videochat-icon.png")}
											style={styles.videochatIconImage}/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.inputWrapper}>
					<View
						style={styles.conversationInputDefaultView}>
						<View
							style={styles.moreView}>
						{ text == '' ? 
							<TouchableOpacity
								onPress={onMorePress}
								style={styles.moreButton}>
							<Image
								source={require("../../assets/images/more.png")}
								style={styles.moreImage}/>
							</TouchableOpacity>
							:
							<TouchableOpacity
								onPress={onArrowNextPress}
								style={styles.arrowNextButton}>
							<Image
								source={require("../../assets/images/arrow-next.png")}
								style={styles.arrowNextImage}/>
							</TouchableOpacity>
	                      }
						</View>
						<View
							style={styles.cameraView}>
							<TouchableOpacity
								onPress={onCameraPress}
								style={styles.cameraButton}>
								<Image
								source={require("../../assets/images/camera-2.png")}
								style={styles.cameraImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={styles.photoView}>
							<TouchableOpacity
								onPress={onPhotoPress}
								style={styles.photoButton}>
								<Image
								source={require("../../assets/images/photo-2.png")}
								style={styles.photoImage}/>
							</TouchableOpacity>
						</View>
						<View
							style={styles.microView}>
							<TouchableOpacity
								onPress={onMicroPress}
								style={styles.microButton}>
								<Image
								source={require("../../assets/images/microphone.png")}
								style={styles.microphoneImage}/>
							</TouchableOpacity>
						</View>
						<View style={styles.msgInputView}>
						<Image
								source={require("../../assets/images/emoji-2.png")}
								style={styles.smileyIcon}/>						
					<TextInput 
					style={{		
					backgroundColor: '#f1f0f0',
					height: 4.3*h,
					width: inputWidth,
					borderRadius: 20, 
					color: 'black',
					paddingHorizontal: 10,
					fontSize: 1.6*h
				}} 
					placeholder="Aa"  
					onChangeText={(value) => setText(value)}
					onFocus={() => onInputFocus()}    
					onBlur={() => onArrowNextPress()}    
                />
				</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.likeView}>
						{ text == '' ? 
						<TouchableOpacity
								onPress={onLikeButtonPress}
								style={styles.LikeButton}>
								<Image
								source={require("../../assets/images/assets-icons-32-like.png")}
								style={styles.likeImage}/>
						</TouchableOpacity> : 
						<TouchableOpacity
								onPress={onInputChange}
								style={styles.LikeButton}>
								<Ionicons name="md-send"  size={25} color="#0084FF" />
						</TouchableOpacity>
	}
						</View>
					</View>
					{Platform.OS === 'ios' ? <KeyboardSpacer/> : null}		
					</View>
				</View>
				<Modal title="" visibility={modalOpen} setVisibility={setModalOpen}>
                <ProfileImage id={contact.id} image={contact.image} gender={contact.gender} name={contact.name} />
                <Text numberOfLines={2} style={{ fontSize: 32, maxWidth: "75%", marginTop: 8 }}>{contact.name}</Text>

                <View style={{ flexDirection: "row", marginTop: 16 }}>
                    <ActionButton iconName="phone" disabled={!contact.phone ? true : false} onPress={() => Alert.alert(`Could not call ${contact.phone}.`)} />
                    <ActionButton iconName="video-camera" disabled={true} onPress={null} />
                    <ActionButton iconName="envelope" disabled={!contact.email ? true : false} onPress={() => Alert.alert(`Could not send an email to ${contact.email}.`)} />
                    <ActionButton iconName="globe" disabled={false} onPress={() => Linking.canOpenURL("https://marcusfredriksson.com").then(supported => supported ? Linking.openURL("https://marcusfredriksson.com") : null)} />
                </View>
            </Modal>
			</View>
}


const styles = StyleSheet.create({
	
	ConversationView: {
		backgroundColor: "white",
		flex: 1,
	},
	textsviewFlatList: {
		backgroundColor: "transparent",
		width: "100%",
		height: "100%",
	},
	textsviewFlatListViewWrapper: {
		position: "absolute",
		alignSelf: "center",
		marginTop: "30%",
		width: 219.1*w,
		top: 0,
		height: '95%',
	},
	conversationChatHeaderView: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.16)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: Platform.OS === 'ios' ? 12.3*h : 8*h,
		marginRight: 14*w,
		flexDirection: "row",
		alignItems: "center",
	},
	inputWrapper: {
		position: 'absolute',
		bottom: 0,
		alignSelf: 'center'
	},
	userinfoviewView: {
		backgroundColor: "transparent",
		width: 69.3*w,
		height: 12.4*h,
		marginLeft: 12.1*w,
		flexDirection: "row",
		alignItems: "center",
		marginTop: 4.5*h
	},
	avatarView: {
		backgroundColor: "transparent",
		width: 15.9*w,
		height: 12.3*h,
	},
	avatarImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 12.3*w,
		height: 5.7*h,
	},
	avatarButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 3.1*w,
		right: 0.2*w,
		top: 3.1*h,
		height: 5.8*h,
	},
	availableImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0.2*w,
		width: 3.9*w,
		bottom: 2.8*h,
		height: 1.8*h,
	},
	userInformationView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 51.4*w,
		height: 8.6*h,
		marginLeft: 1.7*w,
		marginTop: 3*h,
		
	},
	statusText: {
		color: "rgba(0, 0, 0, 0.4)",
		fontFamily: "ArialMT",
		fontSize: 1.6*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0.5*w,
		bottom: 2.3*h,
	},
	usernameText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0.5*w,
		right: 23.7*w,
		top: 1.9*h,
		width: '100%'
	},
	arrowBackImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: 7.2*w,
		height: 2.2*h,
		marginTop: 4.5*h,
		marginLeft: 3.6*w
	},
	contactviewView: {
		backgroundColor: "transparent",
		width: 24.2*w,
		height: 5.1*h,
		marginRight: 4.6*w,
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 4.5*h
	},
	phoneIconImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 4.6*w,
		height: 2.1*h,
	},
	phoneCall: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0.3*h,
		height: 2.3*h,
	},
	videochatIconImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 12.8*w,
		height: 3.9*h,
	},
	videoCall: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 1.2*w,
		right: 0,
		top: 0.6*h,
		height: 2.8*h,
	},
	timestampText: {
		color: "rgb(168, 168, 168)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		marginRight: 114.5*w,
		marginTop: 21.1*h,
	},
	conversationInputDefaultView: {
		backgroundColor: "white",
		alignSelf: "center",
		width: 119.1*w,
		height: 8.9*h,
		flexDirection: "row",
		alignItems: "flex-end",
		marginRight: 15.2*w
},
	moreView: {
		backgroundColor: "transparent",
		width: 6.3*w,
		height: 2.9*h,
		marginLeft: 15*w,
		marginBottom: 6.1*h,
	},
	moreImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 6.3*w,
		top: 2.2*h,
		height: 2.9*h,
	},
	arrowNextImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		position: "absolute",
		right: 3.6*w,
		top: 2.6*h,
		width: 7.2*w,
		height: 2.2*h,
	},
	arrowNextButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: -2,
		width: 7.5*w,
		top: 0,
		height: 3.3*h,
	},
	msgInputView: {
		position: "absolute",
		top: 1.2*h,
		right: 24.2*w,
		flex: 1,
		flexDirection: 'row',
		height: 3.3*h,
	},
	smileyIcon: {
		position: "absolute",
		right: 1.2*w,	
		top: h,
		zIndex: 1,
		width: 4.8*w,
		height: 2.2*h,
		resizeMode: "stretch",
	},
	moreButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: -2,
		width: 7.5*w,
		top: 0,
		height: 3.3*h,
	},
	cameraView: {
		backgroundColor: "transparent",
		width: 8.2*w,
		height: 3*h,
		marginLeft: 3.6*w,
		marginBottom: 6.1*h,
	},
	cameraImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 8.2*w,
		top: 2.2*h,
		height: 3*h,
	},
	cameraButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0.2*w,
		width: 7.5*w,
		top: 0,
		height: 3.3*h,
	},
	photoView: {
		backgroundColor: "transparent",
		width: 6.8*w,
		height: 3*h,
		marginLeft: 3.6*w,
		marginBottom: 6.1*h,
	},
	photoImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		position: "absolute",
		left: 0,
		width: 6.8*w,
		top: 2.2*h,
		height: 3*h,
	},
	photoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: -1,
		width: 7.5*w,
		top: 0,
		height: 3.3*h,
	},
	microView: {
		backgroundColor: "transparent",
		width: 4.8*w,
		height: 3.2*h,
		marginLeft: 3.1*w,
		marginBottom: 6.1*h,
	},
	microphoneImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		position: "absolute",
		left: 0,
		width: 4.3*w,
		top: 2.2*h,
		height: 3*h,
	},
	microButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: -1,
		width: 6.3*w,
		top: 0,
		height: 3.3*h,
	},
	likeView: {
		backgroundColor: "transparent",
		width: 7.5*w,
		height: 3.3*h,
		marginRight: 12.6*w,
		marginBottom: 6.1*h,
	},
	likeImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: 6.8*w,
		height: 3.3*h,
	},
	LikeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 1.2*w,
		width: 7.5*w,
		top: 2.2*h,
		height: 3.3*h,
	},
})


export default Conversation;