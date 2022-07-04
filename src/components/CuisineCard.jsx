import React from 'react';
import { Pressable, Box, AspectRatio, Image, Text } from 'native-base';

const CuisineCard = (props) => {
  return (
    <Pressable
      w="80px"
      bg="white"
      shadow="2"
      borderRadius="10"
      overflow="hidden"
      onPress={() => {
        props.navigation.navigate('Cuisine', { title: props.title });
      }}
      {...props}
    >
      <Box
        position="absolute"
        w="full"
        h="1/2"
        bottom="0"
        zIndex="2"
        bg={{
          linearGradient: {
            colors: ["rgba(0,0,0,0)", "white"],
            start: [0, 0],
            end: [0, 1]
          }
        }}
      />
      <AspectRatio w="full" ratio={1}>
        <Image
          source={{ uri: props.cover }}
          alt="cover" size="full"
        />
      </AspectRatio>
      <Text
        p="1.5"
        fontSize="xs"
        position="absolute"
        bottom="0"
        zIndex="3"
        bold
      >
        {props.title}
      </Text>
    </Pressable>
  );
}

export default CuisineCard;
