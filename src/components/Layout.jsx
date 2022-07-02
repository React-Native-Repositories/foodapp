import React from 'react';
import { HStack, ScrollView } from 'native-base';

const Layout = (props) => {
  return (
    <HStack flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ p: props.p }}
        {...props}
      >
        {props.children}
      </ScrollView>
    </HStack>
  );
}

export default Layout;
