import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styles from './styles';
import PropTypes from 'prop-types';
import AvatarGroup from '../AvatarGroup';



const palette = [
    { background: "#CDE4E3", text: "#499494" },
    { background: "#FFE1DB", text: "#F37A72" },
    { background: "#E8E5F4", text: "#817C99" },
];


export default class TaskItem extends Component {
    onPress = () => {
        alert('Pressed');
    };




    render() {
        const { item }: any = this.props;
        return (
            <Card style={[styles.card, { backgroundColor: palette[item.term].background }]} onPress={this.onPress}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                        <View style={styles.header}>
                            <View style={styles.titleView}>
                                <Text style={[styles.title, { color: palette[item.term].text }]}>{item.title}</Text>
                                <Text style={[styles.datetime, { color: palette[item.term].text }]}>{item.last_active}</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionView}>
                            <Text style={[styles.description, { color: palette[item.term].text }]}>{item.description}</Text>
                        </View>
                        <AvatarGroup position="absolute" max={3} />
                    </View>
                </View>
            </Card>
        );
    }
}

TaskItem.propTypes = {
    item: PropTypes.object
};
