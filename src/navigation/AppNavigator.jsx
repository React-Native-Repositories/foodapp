import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StatusBar, View, Text, Box, Pressable, useColorMode } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PressableRow from '../components/PressableRow';
import HomeNavigator from './HomeNavigator';
import AuthActionsheet from '../components/AuthActionsheet';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  const {colorMode} = useColorMode();
  const authSheet = React.useRef(null);
  return (
    <NavigationContainer theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
      <StatusBar backgroundColor="#D70F64" />
      <Drawer.Navigator
        drawerContent={props => (
          <>
            <AuthActionsheet ref={authSheet} {...props} />
            <DrawerContentScrollView {...props}>

              <View style={styles.header}>
                <View style={styles.headerContent}>
                  <Pressable onPress={() => authSheet.current.open()}>
                    <Text style={styles.headerText}>Log in / Create account</Text>
                  </Pressable>
                </View>
              </View>

              <View>
                <PressableRow leftIcon={<Feather name="heart" style={styles.drawerIcon} />}>
                  Favorites
                </PressableRow>
                <PressableRow leftIcon={<Ionicons name="receipt-outline" style={styles.drawerIcon} />}>
                  Orders & reordering
                </PressableRow>
                <PressableRow leftIcon={<Ionicons name="person-outline" style={styles.drawerIcon} />}>
                  Profile
                </PressableRow>
                <PressableRow leftIcon={<Ionicons name="location-outline" style={styles.drawerIcon} />}>
                  Addresses
                </PressableRow>
                <PressableRow leftIcon={<Ionicons name="trophy-outline" style={styles.drawerIcon} />}>
                  Challenges & rewards
                </PressableRow>
                <PressableRow leftIcon={<MaterialCommunityIcons name="ticket-confirmation-outline" style={styles.drawerIcon} />}>
                  Vouchers
                </PressableRow>
                <PressableRow leftIcon={<AntDesign name="questioncircleo" style={styles.drawerIcon} />}>
                  Help center
                </PressableRow>
                <PressableRow leftIcon={<AntDesign name="gift" style={styles.drawerIcon} />}>
                  Invite friends
                </PressableRow>

                <Box h="1px" bg="gray.200" />
                <PressableRow>Settings</PressableRow>
                <PressableRow>Terms & Conditions / Privacy</PressableRow>
              </View>
              
            </DrawerContentScrollView>
          </>
        )}
        screenOptions={{
          headerShown: false,
          activeTintColor: "#D70F64",
          inactiveTintColor: "black",
          pressColor: "blue"
        }}
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#D70F64",
    marginTop: -5,
    padding: 15
  },
  headerContent: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  headerText: {
    color: "white",
    fontSize: 16
  },
  drawerIcon: {
    fontSize: 18,
    marginRight: 20,
    color: "#D70F64",
  }
})
