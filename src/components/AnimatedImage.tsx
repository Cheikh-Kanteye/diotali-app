import { WIDTH } from "@/misc/metrics";
import { ImageProps } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface AnimatedImgProps extends ImageProps {
  scrollX: Animated.SharedValue<number>;
  index: number;
}

const AnimatedImage: React.FC<AnimatedImgProps> = (props) => {
  const { index: i, scrollX } = props;
  const animatedImgStyle = useAnimatedStyle(() => {
    const inputRange = [WIDTH * (i - 1), WIDTH * i, WIDTH * (i + 1)];
    return {
      opacity: interpolate(
        scrollX.value,
        inputRange,
        [0, 1, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: withTiming(
            interpolate(scrollX.value, inputRange, [0, 1, 0], Extrapolate.CLAMP)
          ),
        },
      ],
    };
  });

  return <Animated.Image {...props} style={[animatedImgStyle, props.style]} />;
};

export default AnimatedImage;
