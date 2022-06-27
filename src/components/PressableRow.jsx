import React from 'react';
import { Pressable, HStack, Text } from 'native-base';

const PressableRow = (props) => {
  return (
    <Pressable
      py="3" px="4"
      _light={{
        _pressed: { bg: 'gray.100' }
      }}
      _dark={{
        _pressed: { bg: 'gray.800' }
      }}
      onPress={props.onPress}
    >
      <HStack justifyContent="space-between">
        <HStack>
          {props.leftIcon}
          <Text color={props.color}>{props.children}</Text>
        </HStack>
        {props.rightIcon}
      </HStack>
    </Pressable>
  );
}

export default PressableRow;
