import React, { Component } from 'react';
import { View } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../config/styles'
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ContactItem extends Component {
    onPress = () => {
        console.log('Pressed');
    };
    static propTypes: { name: PropTypes.Requireable<object>; picture: PropTypes.Requireable<object>; login: PropTypes.Requireable<object>; item: PropTypes.Requireable<object>; };


    render() {
        const { name, picture, login } = this.props.item;

        return (
            <TouchableOpacity
                onPress={this.onPress}
            >
                <View style={styles.item}>
                    <Avatar uri={picture.thumbnail} />
                    <View style={styles.nameView}>
                        <Text style={styles.head}>
                            {name.first[0].toUpperCase() +
                                name.first.slice(1) +
                                ' ' +
                                name.last[0].toUpperCase() +
                                name.last.slice(1)}
                        </Text>
                        <Text style={styles.sub}>@{login.username}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.onPress}
                        style={styles.icon}
                    >
                        <Icon
                            size={24}
                            color={AppStyles.colors.accentColor}
                            name="call"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPress}
                        style={styles.icon}
                    >
                        <FontAwesome5 name="tasks" size={24} color={AppStyles.colors.accentColor}/>

                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

ContactItem.propTypes = {
    name: PropTypes.object,
    picture: PropTypes.object,
    login: PropTypes.object,
    item: PropTypes.object
};
