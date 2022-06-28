import React from 'react';
import { HStack, Text } from 'native-base';
import AnimatedPressable from './AnimatedPressable';

const PressableRow = (props) => {
  return (
    <AnimatedPressable py="3" px="4" onPress={props.onPress}>
      <HStack justifyContent="space-between">
        <HStack>
          {props.leftIcon}
          <Text color={props.color}>{props.children}</Text>
        </HStack>
        {props.rightIcon}
      </HStack>
    </AnimatedPressable>
  );
}

export default PressableRow;
