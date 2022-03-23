import React, { useState, useRef } from 'react';
import { View, Text, Animated, Alert } from 'react-native';
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppStyles from '../../config/styles';
import EditGroup from './GroupModal';



export default function GroupItem({ navigation, item }: any) {

    const [ActionModal, setActionModal] = useState(false);
    const [modal, setModal] = useState(false);
    const shakeAnimation = useRef(new Animated.Value(0)).current;



    const removeAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this group? this process cannot be undone.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Canceled"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => remove() }
      ]
    );

    
    const toggleNewGroupModal = () => {
        setModal(!modal);
    }


    const startShake = () => {
        Animated.sequence([
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
            Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
        ]).start();
    }


    const redirect = () => {
        if (!ActionModal) setActionModal(false);
        //else toggleNewGroupModal();
    };

    const edit = () => {
        toggleNewGroupModal();
        setActionModal(false);
    };

    const remove = () => {
        //else toggleNewGroupModal();
        setActionModal(false);
    };

    const onLongPress = () => {
        setActionModal(!ActionModal);
        startShake();
    };

    return (
        <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <Card style={styles.card} onLongPress={onLongPress} onTouchCancel={() => console.log("haha")}>
                <View style={styles.cardView}>
                    <View style={styles.nameView}>
                        <TouchableOpacity onPress={redirect} style={styles.nameView}>
                            <FontAwesome name="group" color='#006AFF' size={30} />
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.last}>
                                Active {item.last_active}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {ActionModal ?
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={edit} style={styles.edit}>
                                <FontAwesome name="edit" color={AppStyles.colors.bleu} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={removeAlert} style={styles.delete}>
                                <FontAwesome name="minus-circle" color='red' size={30} />
                            </TouchableOpacity>
                        </View> :
                        <View style={styles.footer}>
                            <Text numberOflines={2} style={styles.members}>
                                {item.members}
                            </Text>
                        </View>
                    }
                </View>
            </Card>
            <EditGroup 
            visibility={modal} 
            setVisibility={toggleNewGroupModal} 
            update 
            info={{ name: "My old bad group name", selected: [] }}/>
        </Animated.View>
    );
}

GroupItem.propTypes = {
    item: PropTypes.object
};
