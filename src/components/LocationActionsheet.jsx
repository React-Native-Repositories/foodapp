import React, { forwardRef, useImperativeHandle }  from 'react';
import {
  Stack,
  VStack,
  HStack,
  Actionsheet,
  Text,
  Box,
  Button,
  Icon,
  useDisclose
} from 'native-base';
import PressableRow from './PressableRow';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LocationActionsheet = forwardRef((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  useImperativeHandle(ref, () => ({
    open() {
      onOpen();
    },
  }));

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
    >
      <Actionsheet.Content
        alignItems="flex-start"
        roundedTop="2xl"
        bg="white"
        p="0"
      >
        <VStack w="full" px="4">
          <Text fontSize="md" bold>Can you confirm if this is your location?</Text>
          <VStack w="full" mb="4">
            <HStack p="4" space="2" alignItems="center">
              <Icon as={FontAwesome} name="location-arrow" size="md" color="primary.600" />
              <Text color="primary.600" bold>Use my current location</Text>
            </HStack>
            <HStack bg="primary.50" rounded="md" space="4" alignItems="center" px="4" py="2">
              <Box size="6" borderRadius="full" borderWidth="7" borderColor="primary.600" />
              <VStack>
                <Text fontSize="md" lineHeight="xs" bold>420 Street</Text>
                <Text color="gray.500">Manila</Text>
              </VStack>
            </HStack>
            <HStack rounded="md" space="4" alignItems="center" px="4" py="2">
              <Box size="6" borderRadius="full" borderWidth="1" borderColor="gray.300" />
              <VStack>
                <Text fontSize="md" lineHeight="xs" bold>69 Street</Text>
                <Text color="gray.500">Manila</Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
        <PressableRow>
          <HStack space="2" alignItems="center">
            <Icon as={Feather} name="plus" size="md" color="primary.600" ml="4" />
            <Text color="primary.600" bold>Select a different location</Text>
          </HStack>
        </PressableRow>
        <Stack w="full" p="4">
          <Button w="full"><Text color="white" bold>Confirm location</Text></Button>
        </Stack>
      </Actionsheet.Content>
    </Actionsheet>
  );
});

export default LocationActionsheet;
