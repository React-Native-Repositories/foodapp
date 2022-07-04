import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Restaurants from '../screens/Restaurants';
import Restaurant from '../screens/Restaurant';
import JuanMart from '../screens/JuanMart';
import Shops from '../screens/Shops';
import DineIn from '../screens/DineIn';
import Pickup from '../screens/Pickup';
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
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="JuanMart" component={JuanMart} />
      <Stack.Screen name="Shops" component={Shops} />
      <Stack.Screen name="DineIn" component={DineIn} />
      <Stack.Screen name="Pickup" component={Pickup} />
      <Stack.Screen name="Cuisine" component={Cuisine} />
      <Stack.Screen name="Campaign" component={Campaign} />
      <Stack.Screen name="RateOrder" component={RateOrder} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
