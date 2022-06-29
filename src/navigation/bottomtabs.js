import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from '@expo/vector-icons'; 
import { Text } from 'react-native';
import MainNavigator from './main';
import CartNavigator from './cart';


const BottomTabs = createBottomTabNavigator();


const tabBarIcon = (name, color) => {
    return <AntDesign name={name} size={24} color={color} />
}
const tabBarLabel = (label, color) => {
    return <Text color={color} >{label}
    </Text>
}
const TabNavigator = () => {
    return (<BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
        headerShown: false,
      }}>
        <BottomTabs.Screen component={MainNavigator} name="ShopTab" options={{
            tabBarIcon: ({ focused }) => focused ? tabBarIcon('calculator', 'black'): tabBarIcon('play', 'black'),
            tabBarLabel: ({ focused }) => focused ? tabBarLabel('Home', 'black'): tabBarLabel('Home', 'black')
        }}/>
        <BottomTabs.Screen component={CartNavigator} name="CartTab" options={{
            tabBarIcon: ({ focused }) => focused ? tabBarIcon('plussquare', 'black'): tabBarIcon('minussquare', 'black'),
            tabBarLabel: ({ focused }) => focused ? tabBarLabel('Cart', 'black'): tabBarLabel('Cart', 'black')
        }}/>
    </BottomTabs.Navigator>);
        
}

export default TabNavigator;