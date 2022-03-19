import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

const styles = StyleSheet.create({
  scrollPage: {
    height: 500,
    padding: 30
  },
  screen: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white"
  },
  text: {
    fontSize: 45,
    fontWeight: "bold"
  }
});

const Screen = props => {
  return (
    <View style={styles.scrollPage}>
      {console.log("opacity", props.config.animated)}
      <Animated.View style={[styles.screen, props.config.animated]}>
        <Text style={styles.text}>{props.text}</Text>
      </Animated.View>
    </View>
  );
};

export default Screen;
