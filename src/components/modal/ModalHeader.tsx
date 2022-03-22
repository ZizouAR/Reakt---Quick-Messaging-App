import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

const ModalHeader = ({ title, RightHeader, LeftHeader, ToggleModal, modalLevel }: Props) => {
    const level = modalLevel ? modalLevel * 25 : 10;
    const theme = useTheme();

    return (
        <>
            <SafeAreaView>
                <View style={[styles.container, { backgroundColor: theme.colors.card, marginTop: level }]}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{title}</Text>
                    <View style={{ right: 16, position: "absolute" }}>
                       {RightHeader ?  <RightHeader/> : 
                       <Button title={"Close"} onPress={ToggleModal} />
                       }
                    </View>
                    {LeftHeader &&
                        <View style={{ left: 16, position: "absolute" }}>
                            <LeftHeader/>
                        </View>
                    }
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 16,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

interface Props {
    title: string,
    ToggleModal: any,
    RightHeader: any,
    LeftHeader?: any,
    modalLevel?: number
}

export default ModalHeader;