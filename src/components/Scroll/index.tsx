import React from "react";
import { StyleSheet, SafeAreaView, Animated, Dimensions } from "react-native";
import Screen from "./Screen";

const yOffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCROLL_VIEW_HEIGHT = 500;
const transitionAnimation = index => {
  console.log("index", (index - 1) * SCREEN_WIDTH);
  return {
    opacity: yOffset.interpolate({
      inputRange: [
        (index - 1) * SCROLL_VIEW_HEIGHT,
        index * SCROLL_VIEW_HEIGHT,
        (index + 1) * SCROLL_VIEW_HEIGHT
      ],
      outputRange: [0, 1, 0]
    }),
    transform: [
      { perspective: 800 },
      {
        scale: yOffset.interpolate({
          inputRange: [
            (index - 1) * SCROLL_VIEW_HEIGHT,
            index * SCROLL_VIEW_HEIGHT,
            (index + 1) * SCROLL_VIEW_HEIGHT
          ],
          outputRange: [0.25, 1, 0.25]
        })
      },
      {
        rotateX: yOffset.interpolate({
          inputRange: [
            (index - 1) * SCROLL_VIEW_HEIGHT,
            index * SCROLL_VIEW_HEIGHT,
            (index + 1) * SCROLL_VIEW_HEIGHT
          ],
          outputRange: ["-45deg", "0deg", "45deg"]
        })
      }
    ]
  };
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        horizontal={false}
        style={styles.scrollView}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: yOffset } } }],
          { useNativeDriver: false }
        )}
      >
        <Screen text="Screen 1" config={{ animated: transitionAnimation(0) }} />
        <Screen text="Screen 2" config={{ animated: transitionAnimation(1) }} />
        <Screen text="Screen 3" config={{ animated: transitionAnimation(2) }} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  scrollView: {
    height: 500,
    backgroundColor: "pink",
    marginHorizontal: 20
  },
  text: {
    fontSize: 42
  }
});
