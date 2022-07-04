import React from 'react';
import { HStack, Heading, IconButton, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppHeader = (props) => {
  return (
    <HStack
      py="3"
      shadow="4"
      alignItems="center"
      justifyContent="space-between"
      px={{ base: 4, md: 8 }}
      {...props}
    >
      <HStack alignItems="center" space="4">
        <IconButton
          p="1"
          borderRadius="full"
          icon={
            <Icon
              as={Ionicons}
              size="lg"
              color="primary.600"
              name={props.close ? "close-outline" : "arrow-back-outline"}
            />
          }
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Heading fontSize="md">{props.title ? props.title : props.route.name}</Heading>
      </HStack>
    </HStack>
  );
}

export default AppHeader;
