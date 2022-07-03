import React from 'react';
import { HStack, ScrollView } from 'native-base';

const Layout = (props) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout( () => {
      setLoaded(true);
    },1000);
  },[])

  return (
    <HStack flex={1}>
      {!loaded && props.skeleton}
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
