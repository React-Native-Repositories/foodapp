import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  Text,
  Input,
  IconButton,
  Icon
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const HomeHeader = (props) => {
  return (
    <VStack
      pt="2" pb="4"
      px={{ base: 4, md: 8 }}
      bg="#D70F64"
      shadow="4"
      space="2"
    >
      <HStack>
        <HStack flex="1" alignItems="center" justifyContent="space-between">
          <HStack space="4">
            <IconButton
              p="1"
              borderRadius="full"
              icon={
                <Icon
                  as={Ionicons}
                  size="lg"
                  name="menu"
                  color="white"
                />
              }
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            />
            <VStack>
              <Heading fontSize="md" color="white">123 Street</Heading>
              <Text fontSize="xs" color="white">Manila</Text>
            </VStack>
          </HStack>
          <HStack space="4">
            <Icon as={Feather} size="md" name="heart" color="white" />
            <IconButton
              p="0"
              icon={<Icon as={Feather} size="md" name="shopping-bag" color="white" />}
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
          </HStack>
        </HStack>
      </HStack>

      <HStack>
        <Input
          placeholder="Search for shops & restaurants"
          w="full" h="9"
          borderWidth="0"
          borderRadius="20"
          fontSize="sm"
          bg="white"
          _focus={{ bg: 'white' }}
          InputLeftElement={
            <Icon ml="3" size="md" as={<Feather name="search" />} />
          }
        />
      </HStack>
    </VStack>
  );
}

export default HomeHeader;
