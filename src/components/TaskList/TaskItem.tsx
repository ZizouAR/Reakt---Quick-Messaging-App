import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styles from './styles';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';



const palette = [
    { background: "#CDE4E3", text: "#499494" },
    { background: "#FFE1DB", text: "#F37A72" },
    { background: "#E8E5F4", text: "#817C99" },
];


export default class TaskItem extends Component {
    onPress = () => {
        alert('Pressed');
    };



    AvatarGroup = (prop: string) => {
        const numbers = [
            "https://media-exp1.licdn.com/dms/image/C4D03AQGbJT0RhLAJRA/profile-displayphoto-shrink_800_800/0/1552228251838?e=1652918400&v=beta&t=8lJ_jDhBR0X0i3p-tNxXVBO5_B-Cg0hyc_rGR8qF7bA",
            "https://media-exp1.licdn.com/dms/image/C5603AQEBQI1nWZxKrQ/profile-displayphoto-shrink_800_800/0/1585423405508?e=1652918400&v=beta&t=kMejHzpqdUP8lyMkjtPyz_GcVC68fmaGRFGARLztcvg",
            "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
            "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
            "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ",
            "https://media-exp1.licdn.com/dms/image/C4E03AQHSad0h6j9TlA/profile-displayphoto-shrink_800_800/0/1612870024633?e=1652918400&v=beta&t=rDMFT0JcdXF-5JXNhS4h6M3uiWvPi5IOTcrWJEK6JgQ"
        ];

        let left = 0;

        return (
            <View style={{ flexDirection: "row", flex: 1, height: 38, width: "100%", marginTop: "5%" }}>
                {numbers.map(function (profile, i) {
                    if (i < prop.max) {
                        if (i > 0) left += 28;
                        return (
                            <TouchableOpacity style={{ position: prop.position, left }}>
                                <Avatar size={38} uri={profile} />
                            </TouchableOpacity>
                        )
                    }
                })}
                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#F6F5FC", position: prop.position, left: left + 28, width: 38, height: 38, borderRadius: 19 }}>
                    <Text style={{ fontSize: 16, color: "#696969" }}>+{numbers.length - prop.max}</Text>
                </TouchableOpacity>
            </View>
        )
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
                        <this.AvatarGroup position="absolute" max={3} />
                    </View>
                </View>
            </Card>
        );
    }
}

TaskItem.propTypes = {
    item: PropTypes.object
};
