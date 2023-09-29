import { images } from "@/assets";
import { HEIGHT, WIDTH } from "@/misc/metrics";
import { BlurView } from "expo-blur";
import { Image, StyleSheet, TransformsStyle } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

interface BackdropProps {
  scrollX: Animated.SharedValue<number>;
}

const Backdrop = ({ scrollX }: BackdropProps) => {
  const backdrop1Style = useAnimatedStyle(() => {
    const inputRange = [0, WIDTH, WIDTH * 2, WIDTH * 3];
    const rotate = interpolate(scrollX.value, inputRange, [
      0,
      -135,
      -175,
      125 - 45,
    ]);
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [0, -213, -215, 60]
    );
    const translateY = interpolate(scrollX.value, inputRange, [
      0,
      20,
      HEIGHT - 215,
      HEIGHT - 280,
    ]);

    return {
      transform: [{ translateX }, { translateY }, { rotate: `${rotate}deg` }],
    };
  });
  const backdrop2Style = useAnimatedStyle(() => {
    const inputRange = [0, WIDTH, WIDTH * 2, WIDTH * 3];
    const rotate = interpolate(scrollX.value, inputRange, [
      0,
      -135,
      -175,
      125 - 45,
    ]);
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [0, 213, 215, -70]
    );
    const translateY = interpolate(scrollX.value, inputRange, [
      0,
      -50,
      -HEIGHT + 215,
      -HEIGHT + 280,
    ]);

    const transform = [
      { translateX },
      { translateY },
      { rotate: `${rotate}deg` },
    ];

    return {
      transform,
    };
  });
  return (
    <BlurView
      intensity={100}
      style={{ ...StyleSheet.absoluteFillObject }}
      pointerEvents="none"
    >
      <Animated.View
        style={[backdrop1Style, { position: "absolute", top: 20, right: -20 }]}
      >
        <Image source={images.backdrop1} blurRadius={2} />
      </Animated.View>
      <Animated.View
        style={[
          backdrop2Style,
          { position: "absolute", bottom: 20, left: -20 },
        ]}
      >
        <Image source={images.backdrop2} blurRadius={2} />
      </Animated.View>
    </BlurView>
  );
};

export default Backdrop;
