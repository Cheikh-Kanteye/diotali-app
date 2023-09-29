import { colors } from "@/misc/colors";
import { HEIGHT, SPACING, WIDTH } from "@/misc/metrics";
import { View, StyleSheet, Text } from "react-native";

const Slide = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <View style={styles.slideContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    height: HEIGHT * 0.25,
    width: WIDTH,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "600",
    marginBottom: SPACING.s / 2,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
    paddingHorizontal: SPACING.m,
    // fontFamily: "RobotoSemibold"
  },
});
export default Slide;
