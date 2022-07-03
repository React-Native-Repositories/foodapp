import React from 'react';
import {
  HStack,
  VStack,
  Heading,
  Text,
  Input,
  IconButton,
  Icon,
  Pressable
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LocationActionsheet from '../LocationActionsheet';

const SearchHeader = (props) => {
  const locationSheet = React.useRef(null);
  const isHome = props.route.name === 'Home';
  return (
    <>
      <LocationActionsheet ref={locationSheet} {...props} />
      <VStack
        pt="2" pb="4"
        px={{ base: 4, md: 8 }}
        bg={isHome ? "primary.600" : "white"}
        shadow="4"
        space="2"
        {...props}
      >
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="4">
            <IconButton
              p="1"
              borderRadius="full"
              alignSelf="center"
              icon={
                <Icon
                  as={Ionicons}
                  size="lg"
                  name={isHome ? "menu" : "arrow-back-outline"}
                  color={isHome ? "white" : "primary.600"}
                />
              }
              onPress={() => {
                if (isHome) {
                  props.navigation.toggleDrawer();
                } else {
                  props.navigation.goBack();
                }
              }}
            />
            <VStack>
              <Pressable onPress={() => locationSheet.current.open()}>
                <Heading fontSize="md" color={isHome ? "white" : "darkText"}>420 Street</Heading>
                <Text fontSize="xs" color={isHome ? "white" : "darkText"}>{props.description}</Text>
              </Pressable>
            </VStack>
          </HStack>
          {props.rightNav &&
          <HStack space="2">
            <IconButton
              p="1"
              borderRadius="full"
              icon={<Icon as={Feather} size="md" name="heart" color={isHome ? "white" : "primary.600"} />}
              onPress={() => {
                // props.navigation.navigate('Favorites');
              }}
            />
            <IconButton
              p="1"
              borderRadius="full"
              icon={<Icon as={Feather} size="md" name="shopping-bag" color={isHome ? "white" : "primary.600"} />}
              onPress={() => {
                props.navigation.navigate('Cart');
              }}
            />
          </HStack>}
        </HStack>

        <HStack alignItems="center" space="3">
          <Input
            placeholder={isHome ? "Search for shops & restaurants" : props.searchText || "Find something you like"}
            flex="1" h="9"
            borderWidth="0"
            borderRadius="20"
            fontSize="sm"
            bg={isHome ? "white" : "gray.100"}
            _focus={{ bg: isHome ? "white" : "gray.100" }}
            InputLeftElement={
              <Icon ml="3" size="md" as={<Feather name="search" />} />
            }
          />
          {props.filter &&
          <IconButton
            p="1"
            borderRadius="full"
            icon={<Icon as={Feather} size="md" name="filter" color={isHome ? "white" : "primary.600"} />}
            onPress={() => {
              // props.navigation.navigate('Filter');
            }}
          />}
        </HStack>
      </VStack>
    </>
  );
}

export default SearchHeader;
