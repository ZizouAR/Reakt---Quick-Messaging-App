import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class TaskItem extends Component {
    onPress = () => {
        alert('Pressed');
    };



    render() {

        return (
            <Card style={styles.card} onPress={this.onPress}>
                <View style={styles.cardView}>
                        <TouchableOpacity style={styles.addTask}>
                            <Ionicons name="add" size={25} color="#5C567D" />
                        </TouchableOpacity>
                        <Text style={styles.description}>Add New Task</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        borderRadius: 8,
        marginVertical: "5%",
        backgroundColor: "#F6F5FC",
        alignSelf: "center",
        borderWidth: 1.7,
        flex: 1,
        borderStyle: "dashed",
        borderColor: "#5C567D",
    },
    addTask: {
        width: 40,
        height: 40,
        resizeMode: "stretch",
        borderRadius: 8,
        backgroundColor: "#E8E5F4",
        alignItems: "center",
        justifyContent: "center"
    },
    cardView: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        flex: 1,
    },

    description: {
        color: "#5C567D",
        fontSize: 14,
        textAlign: 'center',
        marginTop: "5%"
    }
});