import { View, Text } from "react-native";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { StackParamList } from "@/utils/types";
import AuthNavigator from "@/screens/Auth";
import TabNavigator from "@/screens/Tabs";

const Stack = createSharedElementStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
