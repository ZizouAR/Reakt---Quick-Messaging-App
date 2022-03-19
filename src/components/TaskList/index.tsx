import React, { Component, useEffect, useRef, useState } from 'react';
import { FlatList, View, Animated, Text } from 'react-native';
import TaskItem from './TaskItem';
import AddItem from './AddItem';
import styles from './styles';
import SearchBarSmall from '../../components/search/SearchBarSmall';
import { tabBarStyle } from '../navigator/BottomNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { h, w, HEIGHT, WIDTH } from '../../config/dimensions';


const data = [
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Abdelhamid, Zinnedine, Soltane, Moha + 320',
        type: "DISCLAIMER"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 256',
        type: "SUCCESS"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 356',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex, Jacob Samuel, Sam, +12',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 10',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2',
        type: "IMPORTANT"
    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex,Jacob Mathews,Sam Tony',
        type: "IMPORTANT"
    }
];



export default function TaskList({ navigation }: any) {

    const [value, setValue] = useState("");
    const [y, setY] = useState(0);
    const offset = useRef(new Animated.Value(0)).current;
    const [OPACITY, setOPACITY] = useState(1);
    const HEADER_HEIGHT = 24.6 * h;


    const onScroll = (opacity: number) => {

        navigation.setOptions({
            tabBarStyle: {
                ...tabBarStyle,
                opacity
            }
        })
    }

    const renderItem = ({ item }: any) => {
        return <TaskItem item={item} />;
    };


    const AnimatedHeader = ({ animValue }: any) => {
        const insets = useSafeAreaInsets();

        const headerHeight = animValue.interpolate({
            inputRange: [0, HEADER_HEIGHT + insets.top],
            outputRange: [HEADER_HEIGHT + insets.top, 0],
            extrapolate: 'clamp'
        });

        return (
            <Animated.View
                style={{
                    height: headerHeight,
                    backgroundColor: 'transparent',
                    marginHorizontal: "3%"
                }}>

                {y < 25.2 * h &&
                    <View style={{
                        flex: 1,
                        opacity: OPACITY
                    }}>
                        <View style={{
                            width: "100%",
                            paddingHorizontal: "5%"
                        }}>

                            <SearchBarSmall value={value} setValue={setValue} />
                        </View>
                        <AddItem />
                    </View>}
            </Animated.View>
        );
    };




    return (
        <View style={{ backgroundColor: "white" }}>
            <AnimatedHeader animValue={offset} />
            <FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    {
                        useNativeDriver: false,
                        listener: event => {
                            const y = event.nativeEvent.contentOffset.y;
                            setOPACITY(((HEADER_HEIGHT - y) * 100 / HEADER_HEIGHT) / 100)
                            setY(y);
                        },
                    }
                )}
                onScrollBeginDrag={() => onScroll(0.3)}
                onScrollEndDrag={() => onScroll(1)}
                onMomentumScrollEnd={() => onScroll(1)}
                data={data}
                contentContainerStyle={styles.list}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
