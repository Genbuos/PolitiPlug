import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedProps, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const { width, height } = Dimensions.get("window");

export default function HyperspeedStars() {
  const star1 = useSharedValue(0);
  const star2 = useSharedValue(0);

  // Animate stars moving outward
  star1.value = withRepeat(withTiming(1, { duration: 2000 }), -1, false);
  star2.value = withRepeat(withTiming(1, { duration: 3000 }), -1, false);

  const star1Props = useAnimatedProps(() => ({
    r: 2 + star1.value * 10, // Increase radius
    opacity: 1 - star1.value, // Fade out
  }));

  const star2Props = useAnimatedProps(() => ({
    r: 2 + star2.value * 10, // Increase radius
    opacity: 1 - star2.value, // Fade out
  }));

  return (
    <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
      {/* Star 1 */}
      <Circle
        cx={width / 2}
        cy={height / 2}
        fill="white"
       
      />
      {/* Star 2 */}
      <Circle
        cx={width / 2}
        cy={height / 2}
        fill="white"
        
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  star: {
    position: "absolute",
  },
});