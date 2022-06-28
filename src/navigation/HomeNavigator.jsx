import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Cuisine from '../screens/Cuisine';
import Campaign from '../screens/Campaign';
import RateOrder from '../screens/RateOrder';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Cuisine" component={Cuisine} />
      <Stack.Screen name="Campaign" component={Campaign} />
      <Stack.Screen name="RateOrder" component={RateOrder} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
