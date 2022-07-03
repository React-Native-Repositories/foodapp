import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';

const DineInSkeleton = (props) => {
  return (
    <VStack
      w="full"
      h="full"
      pl="4" pt="4"
      bg="white"
      space="4"
      position="absolute"
      zIndex="1000"
    >
      <Skeleton w="2/5" h="3" rounded="full" />
      <HStack h="48" space="2">
        <VStack w="4/5" h="full" space="2">
          <Skeleton h="3/5" rounded="md" />
          <Skeleton.Text lines={3} />
        </VStack>
        <VStack w="4/5" h="full" space="2">
          <Skeleton h="3/5" rounded="md" />
          <Skeleton.Text lines={3} />
        </VStack>
      </HStack>
      <Skeleton w="1/3" h="3" rounded="full" />
      <HStack h="24" space="2">
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
      </HStack>
      <Skeleton h="40" rounded="md" />
      <Skeleton h="40" rounded="md" />
    </VStack>
  );
}

export default DineInSkeleton;
