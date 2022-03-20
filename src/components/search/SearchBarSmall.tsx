import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBarSmall = ({ value, onSearch, backgroundColor = "#F3F1F3" }: Props) => {
    const theme = useTheme();

    return (<TextInput
        onChangeText={text => onSearch(text)}
        value={value}
        placeholder={"Search"}
        style={{ padding: 8, borderRadius: 5, backgroundColor: backgroundColor, marginVertical: "3%", fontSize: 16 }}
    />
    )
}

interface Props {
    value: string,
    onSearch: any,
    backgroundColor: string,
}

export default SearchBarSmall;