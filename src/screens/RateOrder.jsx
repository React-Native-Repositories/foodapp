import React from 'react';
import {
  View,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  AspectRatio,
  Image,
  Icon
} from 'native-base';
import AppHeader from '../components/headers/AppHeader';
import Feather from 'react-native-vector-icons/Feather';

const Rating = (props) => {
  return (
    <HStack space="0.5" {...props}>
      <Box w="1/5" py="3" px="6" bg="rose.100" borderLeftRadius="20">
        <Icon size="md" color="#D70F64" as={Feather} name="star" />
      </Box>
      <Box w="1/5" py="3" px="6" bg="rose.100">
        <Icon size="md" color="#D70F64" as={Feather} name="star" />
      </Box>
      <Box w="1/5" py="3" px="6" bg="rose.100">
        <Icon size="md" color="#D70F64" as={Feather} name="star" />
      </Box>
      <Box w="1/5" py="3" px="6" bg="rose.100">
        <Icon size="md" color="#D70F64" as={Feather} name="star" />
      </Box>
      <Box w="1/5" py="3" px="6" bg="rose.100" borderRightRadius="20">
        <Icon size="md" color="#D70F64" as={Feather} name="star" />
      </Box>
    </HStack>
  );
}

const RateOrder = (props) => {
  const { data } = props.route.params;
  return (
    <>
      <AppHeader
        title="Rate your order"
        shadow="none"
        _light={{ bg: 'gray.100' }}
        {...props}
      />
      <View flex={1} p="4">
        <HStack>
          <VStack w="3/4" space="2">
            <Heading>{data.title}</Heading>
            <Text>How was your experience?</Text>
          </VStack>
          <Box h="67" borderRadius="10" overflow="hidden" bg="black" w="1/4">
            <AspectRatio w="full" ratio={4/3}>
              <Image
                source={{ uri: data.cover }}
                alt="cover" size="full"
              />
            </AspectRatio>
          </Box>
        </HStack>
      </View>
      <View
        p="4"
        w="full"
        bg="white"
        position="absolute"
        bottom="0"
        shadow="4"
      >
        <Text bold>Choose your rating</Text>
        <Rating my="2" />
        <HStack justifyContent="space-between">
          <Text>Poor</Text>
          <Text>Excellent</Text>
        </HStack>
      </View>
    </>
  );
}

export default RateOrder;
