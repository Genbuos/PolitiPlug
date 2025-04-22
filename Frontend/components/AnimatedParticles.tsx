import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function AnimatedParticles() {
  const particle1 = useSharedValue(0);
  const particle2 = useSharedValue(0);

  // Animate particles
  particle1.value = withRepeat(withTiming(1, { duration: 3000 }), -1, true);
  particle2.value = withRepeat(withTiming(1, { duration: 4000 }), -1, true);

  const particle1Style = useAnimatedStyle(() => ({
    transform: [{ translateY: particle1.value * height }],
  }));

  const particle2Style = useAnimatedStyle(() => ({
    transform: [{ translateY: particle2.value * -height }],
  }));

  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
      <Animated.View style={[particle1Style, styles.particle]}>
        <Circle cx="50" cy="50" r="5" fill="black" />
      </Animated.View>
      <Animated.View style={[particle2Style, styles.particle]}>
        <Circle cx="150" cy="150" r="5" fill="black" />
      </Animated.View>
    </Svg>
  );
}

const styles = StyleSheet.create({
  particle: {
    position: "absolute",
  },
});