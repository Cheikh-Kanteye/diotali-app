import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HEIGHT, WIDTH } from "@/misc/metrics";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SLIDES } from "@/misc/slides";
import { AnimatedImage, Backdrop, Paginator, Slide } from "@/components";
import { useRef, useState } from "react";

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      scrollX.value = x;
    },
  });
  const scrollTo = () => {
    const activeSlide = interpolate(
      scrollX.value,
      [0, WIDTH, WIDTH * 2, WIDTH * 3],
      [WIDTH, WIDTH * 2, WIDTH * 3, WIDTH * 4]
    );
    if (scrollRef.current) {
      if (activeSlide < SLIDES.length * WIDTH) {
        scrollRef.current.scrollTo({ x: activeSlide });
      } else {
        console.log("going to auth screen");
      }
    } else {
      console.log("scrollRef.current is maybe null");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop scrollX={scrollX} />
      <View style={styles.imageContainer}>
        {SLIDES.map((slide, index) => (
          <AnimatedImage
            key={index}
            source={slide.image}
            scrollX={scrollX}
            index={index}
            style={{ width: slide.w, height: slide.h, position: "absolute" }}
            resizeMode="contain"
          />
        ))}
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH}
        decelerationRate={"fast"}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        onScroll={scrollHandler}
        contentContainerStyle={{ alignItems: "flex-end" }}
      >
        {SLIDES.map((slide, index) => (
          <Slide key={index} title={slide.title} subtitle={slide.subtitle} />
        ))}
      </Animated.ScrollView>
      <Paginator scrollX={scrollX} scrollTo={scrollTo} />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
  },

  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT - HEIGHT * 0.35,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
