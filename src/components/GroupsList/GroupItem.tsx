import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import PropTypes from 'prop-types';

export default class GroupItem extends Component {
    onPress = () => {
        alert('Pressed');
    };

    render() {
        const { item }:any = this.props;
        return (
            <Card style={styles.card} onPress={this.onPress}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                    <FontAwesome name="group"  color='#006AFF' size={30}/>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.last}>
                            Active {item.last_active}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text numberOflines={2} style={styles.members}>
                            {item.members}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    }
}

GroupItem.propTypes = {
    item: PropTypes.object
};
