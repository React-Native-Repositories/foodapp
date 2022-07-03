import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';

const HomeSkeleton = (props) => {
  return (
    <VStack
      w="full"
      h="full"
      p="4"
      bg="white"
      space="4"
      position="absolute"
      zIndex="1000"
    >
      <VStack space="2" py="7">
        <Skeleton w="1/3" h="4" rounded="full" />
        <Skeleton.Text lines={2} w="1/2" />
      </VStack>
      <Skeleton h="12" rounded="md" />
      <Skeleton h="1/4" rounded="md" />
      <HStack space="4" h="1/3" pr="4">
        <Skeleton w="1/2" h="full" rounded="md" />
        <VStack w="1/2" space="4" pb="4">
          <Skeleton h="1/2" rounded="md" />
          <Skeleton h="1/2" rounded="md" />
        </VStack>
      </HStack>
      <Skeleton h="full" rounded="md" />
    </VStack>
  );
}

export default HomeSkeleton;
