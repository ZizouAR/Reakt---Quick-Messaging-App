import React, { Component, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FlatList, View, Animated, Text } from 'react-native';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import styles from './styles';
import SearchBarSmall from '../search/SearchBarSmall';
import { tabBarStyle } from '../navigator/BottomNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { h, w } from '../../config/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const enum term {
    short,
    mid,
    long
}

const data = [
    {
        title: 'WeReakt App Developement',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Abdelhamid, Zinnedine, Soltane, Moha + 320',
        type: "DISCLAIMER",
        term: term.long
    },
    {
        title: 'Create WeStrict App',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 256',
        type: "SUCCESS",
        term: term.short
    },
    {
        title: 'Design WePolitic Mobile App',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Jacob, Alex Jacob,Thomas Paul + 400',
        type: "IMPORTANT",
        term: term.mid

    },
    {
        title: 'Create WeFamily App',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 356',
        type: "IMPORTANT",
        term: term.long

    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex, Jacob Samuel, Sam, +12',
        type: "IMPORTANT",
        term: term.short

    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Vicky, Alex, Bob, William + 10',
        type: "IMPORTANT",
        term: term.mid

    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Manuel, Jacob Augustin,Sam TOny +2',
        type: "IMPORTANT",
        term: term.long

    },
    {
        title: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification',
        description: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        last_active: 'Dec 03, 2022 15:00 PM',
        members: 'Tom Alex,Jacob Mathews,Sam Tony',
        type: "IMPORTANT",
        term: term.short

    }
];




export default function TaskList({ navigation, toggleNewTaskModal }: any) {


    const [value, setValue] = useState("");
    const [y, setY] = useState(0);
    const [map, setMap] = useState(false);
    const offset = useRef(new Animated.Value(0)).current;
    const [OPACITY, setOPACITY] = useState(1);
    const HEADER_HEIGHT = 24.6 * h;
    const scrollRef = useRef();



    useLayoutEffect(() => {

        navigation.setOptions({
            headerStyle: {
                backgroundColor: "white",
            },

            headerTitle: () => (
                !map && <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tasks</Text>),

            headerLeft: () => (!map &&(
                <TouchableOpacity onPress={() => toTop()} style={{marginLeft: "20%"}}>
                    <MaterialCommunityIcons name="text-box-plus-outline" size={25} color="#5C567D" />
                </TouchableOpacity>)
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => setMap(!map)} style={{ flexDirection: "row", marginRight: "20%" }}>
                    <Text style={{ color: "#499494" }}> {map && "Mid term"} ■</Text>
                    <Text style={{ color: "#F37A72" }}> {map && "Short term"} ■</Text>
                    <Text style={{ color: "#817C99" }}> {map && "Long term"} ■</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation, map]);



    const toTop = () => {
        scrollRef.current.scrollToOffset({ animated: true, offset: 0 })
    }



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
                        <AddTask  toggleNewTaskModal={toggleNewTaskModal}/>
                    </View>}
            </Animated.View>
        );
    };



    return (
        <View style={{ backgroundColor: "white" }}>
            <AnimatedHeader animValue={offset} />
            <FlatList
                ref={scrollRef}
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
