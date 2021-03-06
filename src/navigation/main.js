import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CategoriesScreen,
  ProductDetailScreen,
  ProductsScreen,
} from "../screens/index";
import { colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
    <Stack.Navigator
      initialRouteName="Categories"
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
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}
        style={{
            height: 10
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({ title: route.params.categoryTitle })}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    </Stack.Navigator>
    </SafeAreaView>
  );
};

export default MainNavigator;
