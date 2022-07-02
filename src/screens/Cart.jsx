import React from 'react';
import { VStack, View, Heading, Text, Button } from 'native-base';
import AppHeader from '../components/headers/AppHeader';

const Cart = (props) => {
  return (
    <>
      <AppHeader bg="white" close {...props} />
      <View flex={1} justifyContent="center" alignItems="center" _light={{ bg: 'white' }}>
        <VStack space="2" alignItems="center">
          <Heading>Hungry?</Heading>
          <Text color="gray.500">You haven't added anything to your cart!</Text>
          <Button
            mt="1"
            p="1" px="2.5"
            borderRadius="md"
          >
            <Text color="white" bold>Browse</Text>
          </Button>
        </VStack>
      </View>
    </>
  );
}

export default Cart;
