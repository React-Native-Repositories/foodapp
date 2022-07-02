import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar, useTheme } from 'native-base';
import HomeNavigator from './HomeNavigator';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const {colors} = useTheme();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary[600]} />
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
        drawerContent={props => (
          <DrawerContent {...props} />
        )}
      >
        <Drawer.Screen
          options={{
            drawerLabel: ""
          }}
          name="HomeRoot" component={HomeNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
