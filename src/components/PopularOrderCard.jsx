import React from 'react';
import { Pressable, Box, AspectRatio, Image, Text } from 'native-base';

const PopularOrderCard = (props) => {
  return (
    <Pressable
      bg="white"
      shadow="2"
      borderRadius="10"
      overflow="hidden"
      {...props}
    >
      <Box
        position="absolute"
        w="full"
        h="3/4"
        zIndex="2"
        bg={{
          linearGradient: {
            colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.5)"],
            start: [0, 1],
            end: [0, 0]
          }
        }}
      />
      <AspectRatio w="full" ratio={1.13}>
        <Image
          source={{ uri: props.data.cover }}
          alt="cover" size="full"
        />
      </AspectRatio>
      <Text
        p="1.5"
        fontSize="md"
        position="absolute"
        zIndex="3"
        color="white"
        bold
      >
        {props.data.title}
      </Text>
    </Pressable>
  );
}

export default PopularOrderCard;
