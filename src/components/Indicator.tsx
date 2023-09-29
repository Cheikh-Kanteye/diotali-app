import { colors } from "@/misc/colors";
import { INDICATOR_SIZE, WIDTH } from "@/misc/metrics";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolateColor,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

interface IndicatorProps {
  i: number;
  scrollX: Animated.SharedValue<number>;
}

const Indicator = ({ i, scrollX }: IndicatorProps) => {
  const animeStyle = useAnimatedStyle(() => {
    const inputRange = [WIDTH * (i - 1), WIDTH * i, WIDTH * (i + 1)];

    return {
      backgroundColor: interpolateColor(scrollX.value, inputRange, [
        "transparent",
        colors.primary,
        "transparent",
      ]),
      transform: [
        {
          scale: withSpring(
            interpolate(
              scrollX.value,
              inputRange,
              [0.6, 1, 0.6],
              Extrapolate.CLAMP
            )
          ),
        },
      ],
    };
  });

  return <Animated.View style={[animeStyle, styles.indicator]} />;
};

export default Indicator;

const styles = StyleSheet.create({
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
