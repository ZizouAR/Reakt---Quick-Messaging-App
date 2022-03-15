import React, { useState } from 'react';
import { View, Image} from 'react-native';
import { StyleSheet } from "react-native"
import AppStyles from '../config/styles';
import FeedList from '../components/FeedList';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { props as types } from '../components/FeedList/FeedItem';


export default function Feed() {
    const [index, setIndex] = useState(0);

    const updateColor = (i: number) => {
        /*

        switch (i) {
            case 0: return setIndex({ id: 0, backgroundColor: "white", fontStyle: "black", activeFontStyle: types.IMPORTANT.dark, tintColor: types.IMPORTANT.light, fontWeight: "bold", fontSize: 16 });
            case 1: return setIndex({ id: 1, backgroundColor: "white", fontStyle: "black", activeFontStyle: types.DISCLAIMER.dark, tintColor: types.DISCLAIMER.light, fontWeight: "bold", fontSize: 16 });
            case 2: return setIndex({ id: 2, backgroundColor: "white", fontStyle: "black", activeFontStyle: types.SUCCESS.dark, tintColor: types.SUCCESS.light, fontWeight: "bold", fontSize: 16 });
        }
        */
    }

    return (
        <View style={styles.container}>
            <View style={{ width: "85%", alignSelf: "center", marginVertical: "5%" }}>
                <SegmentedControl
                    style={{ padding: "10%" }}
                    tintColor={index.tintColor}
                    backgroundColor={index.backgroundColor}
                    fontStyle={{ color: index.fontStyle }}
                    activeFontStyle={{ color: index.activeFontStyle, fontWeight: "bold", fontSize: 16}}
                    values={['All', 'Disclaimer', 'Success']}
                    selectedIndex={index}
                    onChange={(event) => {
                        setIndex(event.nativeEvent.selectedSegmentIndex);
                    }}
                />
            </View>
            <FeedList />
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