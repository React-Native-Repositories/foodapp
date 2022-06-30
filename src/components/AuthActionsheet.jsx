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
        p="3"
        alignItems="center"
        shadow={props.type === 'email' ? "none" : "2"}
        borderWidth={props.type === 'email' ? "1" : "0"}
        borderColor={props.type === 'email' ? "#D70F64" : "white"}
        borderRadius="10"
        bg={props.type === 'Facebook' ? "#1877F2" : "white"}
      >
        <Box position="absolute" left="3" top="1/2">
          {(props.type === 'Google') && <GoogleIcon />}
          {(props.type === 'Facebook') && <FacebookIcon />}
        </Box>
        <Text
          color={
            props.type === 'Google' ? "gray.500" :
            props.type === 'Facebook' ? "white" :
            "#D70F64"
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
      rounded="0"
    >
      <Actionsheet.Content
        alignItems="flex-start"
        roundedTop="8"
        px="4" py="0"
      >
        <VStack space="1" mt="4" w="full">
          <IconButton
            alignSelf="flex-end"
            p="0"
            borderRadius="full"
            icon={
              <Icon
                as={Ionicons}
                size="md"
                color="#D70F64"
                name="close-outline"
              />
            }
            onPress={onClose}
          />
          <Heading>Sign up or log in</Heading>
        </VStack>
        <VStack space="3" my="5" w="full">
          <AuthSheetItem type="Google" />
          <AuthSheetItem type="Facebook" />
          <HStack alignItems="center" justifyContent="space-between" space="1">
            <Box flex="1" h="1px" borderWidth="1" borderColor="gray.200" />
            <Text bold>or</Text>
            <Box flex="1" h="1px" borderWidth="1" borderColor="gray.200" />
          </HStack>
          <AuthSheetItem type="email" />
          <HStack w="full" justifyContent="center">
            <Text fontSize="10" color="gray.500" mr="0.5" bold>By continuing, you agree to our</Text>
            <Pressable>
              <Text fontSize="10" color="#D70F64" mr="0.5" bold>Terms and Conditions</Text>
            </Pressable>
            <Text fontSize="10" color="gray.500" mr="0.5" bold>and</Text>
            <Pressable>
              <Text fontSize="10" color="#D70F64" bold>Privacy Policy</Text>
            </Pressable>
            <Text fontSize="10" color="gray.500" bold>.</Text>
          </HStack>
        </VStack>
      </Actionsheet.Content>
    </Actionsheet>
  );
});

export default AuthActionsheet;
