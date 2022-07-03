import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';

const RestaurantSkeleton = (props) => {
  return (
    <VStack
      w="full"
      h="full"
      bg="white"
      space="4"
      position="absolute"
      zIndex="1000"
    >
      <Skeleton mb="10" h="1/6" rounded="md" />
      <Skeleton h="1px" />
      <VStack px="4">
        <HStack space="2" pr="4" mb="16">
          <Skeleton w="1/3" h="3" rounded="full" />
          <Skeleton w="1/3" h="3" rounded="full" />
          <Skeleton w="1/3" h="3" rounded="full" />
        </HStack>
        <VStack space="6" h="3/4">
          <VStack space="4">
            <Skeleton w="1/3" h="4" rounded="full" />
            <Skeleton w="2/5" h="2.5" rounded="full" />
          </VStack>
          <HStack h="1/5">
            <VStack w="3/4">
              <Skeleton.Text lines={3} w="1/2" />
            </VStack>
            <Skeleton w="1/4" h="full" rounded="md" />
          </HStack>
          <HStack h="1/5">
            <VStack w="3/4">
              <Skeleton.Text lines={3} w="1/2" />
            </VStack>
            <Skeleton w="1/4" h="full" rounded="md" />
          </HStack>
          <HStack h="1/5">
            <VStack w="3/4">
              <Skeleton.Text lines={3} w="1/2" />
            </VStack>
            <Skeleton w="1/4" h="full" rounded="md" />
          </HStack>
          <HStack h="1/5">
            <VStack w="3/4">
              <Skeleton.Text lines={3} w="1/2" />
            </VStack>
            <Skeleton w="1/4" h="full" rounded="md" />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default RestaurantSkeleton;
