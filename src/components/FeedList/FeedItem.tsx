import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { h, w } from "../../config/dimensions";


import styles from './styles';
import PropTypes from 'prop-types';

export const props: any =
{
    DISCLAIMER: { light: "#F9F0F4", dark: "#F60C51", badgeBackground: "#F8D4E0", icon: "alert-circle"},
    SUCCESS: { light: "#F0F9F6", dark: "#38EE93", badgeBackground: "#D3F8E9", icon: "checkbox-marked-circle-outline" },
    IMPORTANT: { light: "#F1F4FB", dark: "#507CFE", badgeBackground: "#F1F4FB", icon: "note-text-outline"}
}

export default class FeedItem extends Component {
    onPress = () => {
        alert('Pressed');
    };

    render() {
        const { item }: any = this.props;
        return (
            <Card style={styles.card} onPress={this.onPress}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                        <View style={styles.header}>
                            <View>
                                <View 
                                style={[styles.alert_icon, 
                                {
                                    backgroundColor: props[item.type].light,
                                    borderColor: props[item.type].dark
                                }]}>
                                    <MaterialCommunityIcons name={props[item.type].icon}size={8 * w} color={props[item.type].dark} />
                                </View>
                                <View style={[styles.alert_badge, 
                                {
                                    backgroundColor: props[item.type].badgeBackground,
                                }]}><Text style={{ color: props[item.type].dark, fontWeight: "bold", fontSize: 12 }}>Overdue</Text></View>
                            </View>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.datetime}>{item.last_active}</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionView}>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>

                    </View>
                </View>
            </Card>
        );
    }
}

FeedItem.propTypes = {
    item: PropTypes.object
};
