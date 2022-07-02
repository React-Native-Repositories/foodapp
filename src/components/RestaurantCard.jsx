import React from 'react';
import { Box, AspectRatio, Image, Text } from 'native-base';
import AnimatedPressable from './AnimatedPressable';

const RestaurantCard = (props) => {
  return (
    <AnimatedPressable>
      <Box
        overflow="hidden"
        maxW="235"
        {...props}
      >
        <Box
          bg="white"
          borderWidth="1"
          borderColor="gray.200"
          borderRadius="10"
        >
          <AspectRatio w="full" ratio={16/9}>
            <Image
              source={{ uri: props.cover }}
              alt="cover" size="full"
            />
          </AspectRatio>
          {props.promo1 &&
          <Box
            bg="primary.600"
            position="absolute"
            top="1.5"
            px="1.5"
            py="0.5"
            borderRightRadius="5"
          >
            <Text fontSize="xs" color="white" bold>{props.promo1}</Text>
          </Box>}
          {props.promo2 &&
          <Box
            bg="primary.600"
            position="absolute"
            top="9"
            px="1.5"
            py="0.5"
            borderRightRadius="5"
          >
            <Text fontSize="xs" color="white" bold>{props.promo2}</Text>
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
        <Text fontSize="sm" isTruncated bold>{props.title}</Text>
        <Text fontSize="sm" isTruncated color="gray.500">{props.subtitle}</Text>
        <Text fontSize="xs" bold pb="2">{props.deliveryFee}</Text>
      </Box>
    </AnimatedPressable>
  );
}

export default RestaurantCard;
