import { Onboarding } from "@/screens";
import "react-native-gesture-handler";
import * as Navbar from "expo-navigation-bar";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { colors } from "@/misc/colors";
import "react-native-gesture-handler";
import "react-native-reanimated";

export default function App() {
  useEffect(() => {
    if (Platform.OS == "android") {
      Navbar.setBackgroundColorAsync(colors.background);
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.background}
      />
      <Onboarding />
    </>
  );
}
