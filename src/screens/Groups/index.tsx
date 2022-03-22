import React, { useState, useLayoutEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from "react-native"
import AppStyles from '../../config/styles';
import GroupsList from '../../components/GroupsList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewGroup from '../../components/GroupsList/GroupModal';


export default function Groups({ navigation }: any) {
    const [modal, setModal] = useState(false);

    const toggleNewGroupModal = () => {
        setModal(!modal);
    }

    // Allow edit button in header to change state
    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => <TouchableOpacity onPress={toggleNewGroupModal} style={{ marginRight: "10%" }}>
                <MaterialCommunityIcons name="plus" color={AppStyles.colors.bleu} size={23} />
            </TouchableOpacity>
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <GroupsList />
            <NewGroup visibility={modal} setVisibility={toggleNewGroupModal} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: AppStyles.colors.lightWhite
    }
});