import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Images from '../../config/images';
import styles from './styles';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
    static defultProps: { enableDot: boolean; large: boolean; isGroup: boolean; liveEnabled: boolean; };
    static propTypes: { large: PropTypes.Requireable<boolean>; isGroup: PropTypes.Requireable<boolean>; enableDot: PropTypes.Requireable<boolean>; uri: PropTypes.Requireable<string>; size: PropTypes.Requireable<number>; };

    
    render() {
        const { uri, large, isGroup, enableDot, size }: any = this.props;

        return (
            <View style={[large ? styles.avatarLargeView : styles.avatarView, { 
                width: size,
                height: size
                }]}>
                {isGroup ? (
                    <Icon name="face" size={64} color="grey" />
                ) : (
                    <Image
                        source={uri ? { uri: uri } : Images.profile.avatar}
                        style={[large ? styles.avatarLarge : styles.avatar, {
                            width: size,
                            height: size,
                        }]}
                    />
                )}
                {enableDot ? (
                    <View
                        style={large ? styles.statusDotLarge : styles.statusDot}
                    />
                ) : (
                    <View style={{}} />
                )}
            </View>
        );
    }
}

Avatar.defultProps = {
    enableDot: true,
    large: false,
    isGroup: false,
    liveEnabled: true
};

Avatar.propTypes = {
    large: PropTypes.bool,
    isGroup: PropTypes.bool,
    enableDot: PropTypes.bool,
    uri: PropTypes.string
};
