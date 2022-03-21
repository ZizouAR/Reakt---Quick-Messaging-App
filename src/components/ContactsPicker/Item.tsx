import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyles from '../../config/styles'
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class ContactItem extends Component {


    static propTypes: {
        section: PropTypes.Requireable<object>;
        name: PropTypes.Requireable<object>;
        picture: PropTypes.Requireable<object>;
        login: PropTypes.Requireable<object>;
        item: PropTypes.Requireable<object>;
        onSelect: PropTypes.Requireable<any>;
    };


    render() {
        const { name, picture, login, selected } = this.props.item;
        return (
            !(this.props.section != "Selected" && selected)  &&
            <TouchableOpacity onPress={() => this.props.onSelect(this.props.item)}>
                <View style={styles.item}>
                    <Avatar size={48} uri={picture.thumbnail} />
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
                    <TouchableOpacity onPress={() => this.props.onSelect(this.props.item)} style={styles.icon} >
                        <Icon
                            size={24}
                            color={selected ? AppStyles.colors.accentColor : "silver"}
                            name={selected ? "account-check" : "account-check-outline"}
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity >
        );
    }
}

ContactItem.propTypes = {
    name: PropTypes.object,
    picture: PropTypes.object,
    login: PropTypes.object,
    item: PropTypes.object,
    onSelect: PropTypes.object
};
