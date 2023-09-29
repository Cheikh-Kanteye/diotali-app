import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "@/utils/types";
import Home from "./Home";
import QRScanner from "./QRScanner";
import Settings from "./Settings";

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaction" component={Home} />
      <Tab.Screen name="Setting" component={Settings} />
      <Tab.Screen name="QRScanner" component={QRScanner} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
