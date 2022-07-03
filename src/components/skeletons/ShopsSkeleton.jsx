import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';

const ShopsSkeleton = (props) => {
  return (
    <VStack
      w="full"
      h="full"
      pl="4" pt="20"
      bg="white"
      space="4"
      position="absolute"
      zIndex="1000"
    >
      <HStack mb="4" h="40" space="3">
        <Skeleton w="2/5" h="full" rounded="md" />
        <Skeleton w="2/5" h="full" rounded="md" />
        <Skeleton w="2/5" h="full" rounded="md" />
      </HStack>
      <Skeleton w="2/5" h="3" rounded="full" />
      <HStack h="24" space="2">
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
        <Skeleton w="1/4" h="full" rounded="md" />
      </HStack>
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
    </VStack>
  );
}

export default ShopsSkeleton;
