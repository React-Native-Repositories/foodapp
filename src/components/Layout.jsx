import React from 'react';
import { useRoute } from '@react-navigation/native';
import { HStack, ScrollView } from 'native-base';

const Layout = (props) => {
  const route = useRoute();
  return (
    <HStack flex={1}>
      <ScrollView _contentContainerStyle={{ p: props.p }} _light={{ bg: "white" }}>
        {props.children}
      </ScrollView>
    </HStack>
  );
}

export default Layout;
