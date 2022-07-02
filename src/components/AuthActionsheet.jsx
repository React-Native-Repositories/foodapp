import React, { forwardRef, useImperativeHandle }  from 'react';
import {
  VStack,
  HStack,
  Center,
  Actionsheet,
  Heading,
  Text,
  Box,
  Pressable,
  IconButton,
  Icon,
  useDisclose
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FacebookIcon, GoogleIcon } from './Icons';

const AuthSheetItem = (props) => {
  return (
    <Pressable>
      <Box
        w="full"
        p="3.5"
        alignItems="center"
        shadow="1"
        borderWidth={props.type === 'email' ? "1" : "0"}
        borderColor={props.type === 'email' ? "primary.600" : "white"}
        borderRadius="10"
        bg={props.type === 'Facebook' ? "#1877F2" : "white"}
      >
        <Box position="absolute" left="3" top="3.5">
          {(props.type === 'Google') && <GoogleIcon />}
          {(props.type === 'Facebook') && <FacebookIcon />}
        </Box>
        <Text
          color={
            props.type === 'Google' ? "gray.500" :
            props.type === 'Facebook' ? "white" :
            "primary.600"
          }
          bold
        >
          Continue with {props.type}
        </Text>
      </Box>
    </Pressable>
  );
}

const AuthActionsheet = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  useImperativeHandle(ref, () => ({
    open() {
      props.navigation.toggleDrawer();
      onOpen();
    },
  }));

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      hideDragIndicator
    >
      <Actionsheet.Content
        alignItems="flex-start"
        roundedTop="2xl"
        px="4" py="0"
        bg="white"
      >
        <VStack mt="4" w="full">
          <IconButton
            alignSelf="flex-end"
            p="0" mb="-1"
            borderRadius="full"
            icon={
              <Icon
                as={Ionicons}
                size="21px"
                color="primary.600"
                name="close-outline"
              />
            }
            onPress={onClose}
          />
          <Heading>Sign up or log in</Heading>
        </VStack>
        <VStack space="3.5" my="4" w="full">
          <AuthSheetItem type="Google" />
          <AuthSheetItem type="Facebook" />
          <HStack alignItems="center" justifyContent="space-between" space="1">
            <Box flex="1" h="1px" bg="gray.200" />
            <Text bold>or</Text>
            <Box flex="1" h="1px" bg="gray.200" />
          </HStack>
          <AuthSheetItem type="email" />
          <HStack w="full" justifyContent="center">
            <Text fontSize="10" color="gray.500" mr="0.5" bold>By continuing, you agree to our</Text>
            <Pressable>
              <Text fontSize="10" color="primary.600" mr="0.5" bold>Terms and Conditions</Text>
            </Pressable>
            <Text fontSize="10" color="gray.500" mr="0.5" bold>and</Text>
            <Pressable>
              <Text fontSize="10" color="primary.600" bold>Privacy Policy</Text>
            </Pressable>
            <Text fontSize="10" color="gray.500" bold>.</Text>
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
});

export default AuthActionsheet;
