import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import styles from './styles';
import PropTypes from 'prop-types';

export default class FeedItem extends Component {
    onPress = () => {
        alert('Pressed');
    };

    render() {
        const { item }:any = this.props;
        return (
            <Card style={styles.card} onPress={this.onPress}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                    <Text style={styles.nameText}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.members}>
                        {item.last_active}
                        </Text>
                        
                    <View style={styles.footerItems}>
                        <Text style={styles.actions}>
                        {item.last_active}
                        </Text>
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
