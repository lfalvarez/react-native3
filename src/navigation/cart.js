import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  OrdersScreen,
} from "../screens/index";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "FredokaOne",
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
        style={{
            height: 10
        }}
      />
    </Stack.Navigator>
    </SafeAreaView>
  );
};


export default CartNavigator;
