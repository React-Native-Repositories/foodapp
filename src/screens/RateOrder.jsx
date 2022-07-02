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
    <HStack justifyContent="space-between" space="0.5" left="-3" {...props}>
      <Box py="3" w="1/5" alignItems="center" bg="primary.50" borderLeftRadius="20">
        <Icon size="md" color="primary.600" as={Feather} name="star" mx="1px" />
      </Box>
      <Box py="3" w="1/5" alignItems="center" bg="primary.50">
        <Icon size="md" color="primary.600" as={Feather} name="star" mx="1px" />
      </Box>
      <Box py="3" w="1/5" alignItems="center" bg="primary.50">
        <Icon size="md" color="primary.600" as={Feather} name="star" mx="1px" />
      </Box>
      <Box py="3" w="1/5" alignItems="center" bg="primary.50">
        <Icon size="md" color="primary.600" as={Feather} name="star" mx="1px" />
      </Box>
      <Box py="3" w="1/5" alignItems="center" bg="primary.50" borderRightRadius="20">
        <Icon size="md" color="primary.600" as={Feather} name="star" mx="1px" />
      </Box>
    </HStack>
  );
}

const RateOrder = (props) => {
  const { data } = props.route.params;
  return (
    <>
      <AppHeader title="Rate your order" shadow="none" {...props} />
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
