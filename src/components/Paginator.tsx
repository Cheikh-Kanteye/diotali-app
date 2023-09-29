import { colors } from "@/misc/colors";
import { SLIDES } from "@/misc/slides";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { HEIGHT, SPACING, WIDTH } from "@/misc/metrics";
import Indicator from "./Indicator";

interface PaginatorProps {
  scrollX: Animated.SharedValue<number>;
  scrollTo: () => void;
}

const Paginator = ({ scrollX, scrollTo }: PaginatorProps) => {
  return (
    <View style={styles.paginatorContainer}>
      <View style={styles.indicatorContainer}>
        {SLIDES.map((_, index) => {
          return <Indicator key={index} i={index} scrollX={scrollX} />;
        })}
      </View>
      <TouchableOpacity style={styles.nextBtn} onPress={scrollTo}>
        <Ionicons name="arrow-forward" size={28} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginatorContainer: {
    width: WIDTH,
    height: HEIGHT * 0.125,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: SPACING.s * 0.5,
    paddingHorizontal: SPACING.m,
  },
  nextBtn: {
    padding: SPACING.m,
  },
});

export default Paginator;
