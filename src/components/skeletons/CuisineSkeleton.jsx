import React from 'react';
import { Skeleton, VStack, HStack } from 'native-base';

const CuisineSkeleton = (props) => {
  return (
    <VStack
      w="full"
      h="full"
      px="4" pt="32"
      bg="white"
      space="4"
      position="absolute"
      zIndex="1000"
    >
      <VStack mb="4" space="2">
        <Skeleton w="1/3" h="4" rounded="full" />
        <Skeleton.Text lines={1} w="1/2" />
      </VStack>
      <VStack h="2/5" space="2">
        <Skeleton h="3/5" rounded="md" />
        <Skeleton w="1/2" h="4" rounded="full" />
        <Skeleton.Text lines={2} w="4/5" />
      </VStack>
      <VStack h="2/5" space="2">
        <Skeleton h="3/5" rounded="md" />
        <Skeleton w="1/2" h="4" rounded="full" />
        <Skeleton.Text lines={2} w="4/5" />
      </VStack>
    </VStack>
  );
}

export default CuisineSkeleton;
