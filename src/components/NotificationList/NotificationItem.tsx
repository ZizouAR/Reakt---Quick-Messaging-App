import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NotificationItem extends Component {

    onPress = () => {
        console.log('Pressed');
    };

    static propTypes: { name: PropTypes.Requireable<object>; picture: PropTypes.Requireable<object>; login: PropTypes.Requireable<object>; item: PropTypes.Requireable<object>; };

    render() {
        const { name, picture, login } = this.props.item;

        return (
            <Swipeable
            renderRightActions={() => <TouchableWithoutFeedback>
                <View style={[styles.container, { backgroundColor: "mediumspringgreen" }]}>
                    <Icon name="notifications-off" size={36} color="#FFF"/>
                </View>
            </TouchableWithoutFeedback>}
            overshootRight={false}
            overshootFriction={8}
        >
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.item}>
                    <Avatar size={48} uri={picture.thumbnail} />
                    <View style={styles.nameView}>
                        <View style={styles.itemHeader}>
                            <Text style={styles.head}>
                                {name.first[0].toUpperCase() +
                                    name.first.slice(1) +
                                    ' ' +
                                    name.last[0].toUpperCase() +
                                    name.last.slice(1)}
                            </Text>
                            <Text style={styles.timestamp}>Just now</Text>
                        </View>
                        <View style={styles.descriptionView}>
                            <View style={styles.descriptionTextView}>
                                <Text style={styles.action}>Assigned you to a new task
                                    <Text style={styles.objectName}> WeReakt App Dev.</Text>
                                </Text>
                            </View>

                            <View style={styles.objectIcon}>
                                <FontAwesome5 name="tasks" size={23} color="gray" />
                            </View>
                        </View>
                        <View style={styles.actionsView}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: "#F2F2F2" }]}>
                                <Text style={{ fontWeight: "600" }} >Decline</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: "#C9FF62" }]}>
                                <Text style={styles.objectName}>Accept</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
            </Swipeable>
        );
    }
}

NotificationItem.propTypes = {
    name: PropTypes.object,
    picture: PropTypes.object,
    login: PropTypes.object,
    item: PropTypes.object
};
