import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Box, VStack, Text, Pressable, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthActionsheet from './AuthActionsheet';
import PressableRow from '../components/PressableRow';

const DrawerContent = (props) => {
  const authSheet = React.useRef(null);
  return (
    <>
      <AuthActionsheet ref={authSheet} {...props} />
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
        <Box p="15" mt="-5px" bg="primary.600">
          <VStack h="200" justifyContent="flex-end">
            <Pressable onPress={() => authSheet.current.open()}>
              <Text fontSize="md" color="white">Log in / Create account</Text>
            </Pressable>
          </VStack>
        </Box>
        <PressableRow
          leftIcon={<Icon as={Feather} name="heart" color="primary.600" size="18" />}
        >
          Favorites
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={Ionicons} name="receipt-outline" color="primary.600" size="18" />}
        >
          Orders & reordering
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={Ionicons} name="person-outline" color="primary.600" size="18" />}
        >
          Profile
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={Ionicons} name="location-outline" color="primary.600" size="18" />}
        >
          Addresses
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={Ionicons} name="trophy-outline" color="primary.600" size="18" />}
        >
          Challenges & rewards
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={MaterialCommunityIcons} name="ticket-confirmation-outline" color="primary.600" size="18" />}
        >
          Vouchers
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={AntDesign} name="questioncircleo" color="primary.600" size="18" />}
        >
          Help center
        </PressableRow>
        <PressableRow
          leftIcon={<Icon as={AntDesign} name="gift" color="primary.600" size="18" />}
        >
          Invite friends
        </PressableRow>
        <Box h="1px" bg="gray.200" />
        <PressableRow>Settings</PressableRow>
        <PressableRow>Terms & Conditions / Privacy</PressableRow>
        <PressableRow>Log out</PressableRow>
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerContent;
