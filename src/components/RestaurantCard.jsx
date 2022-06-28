import React from 'react';
import { Box, AspectRatio, Image, Text } from 'native-base';
import AnimatedPressable from './AnimatedPressable';

const RestaurantCard = (props) => {
  return (
    <AnimatedPressable>
      <Box
        bg="white"
        borderWidth="1"
        borderColor="gray.200"
        borderRadius="10"
        overflow="hidden"
        maxW="235"
        {...props}
      >
        <AspectRatio w="full" ratio={16/9}>
          <Image
            source={{ uri: props.cover }}
            alt="cover" size="full"
          />
        </AspectRatio>
        {props.discount &&
        <Box
          bg="#D70F64"
          position="absolute"
          top="1.5"
          px="1.5"
          py="0.5"
          borderRightRadius="5"
        >
          <Text fontSize="xs" color="white" bold>{props.discount}</Text>
        </Box>}
        {props.discountSub &&
        <Box
          bg="#D70F64"
          position="absolute"
          top="9"
          px="1.5"
          py="0.5"
          borderRightRadius="5"
        >
          <Text fontSize="xs" color="white" bold>{props.discountSub}</Text>
        </Box>}
        <Box
          bg="white"
          position="absolute"
          left="1.5"
          bottom="1.5"
          px="1.5"
          py="0.5"
          borderRadius="10"
          shadow="1"
        >
          <Text fontSize="xs" bold>{props.deliveryTime}</Text>
        </Box>
      </Box>
      <Text fontSize="sm" bold>{props.title}</Text>
      <Text fontSize="sm" color="gray.500">{props.subtitle}</Text>
      <Text fontSize="xs" bold pb="2">{props.deliveryFee}</Text>
    </AnimatedPressable>
  );
}

export default RestaurantCard;
