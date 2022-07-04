import React from 'react';
import { Animated } from 'react-native';
import { View, Pressable } from 'native-base';

const AnimatedPressable = (props) => {
  const animation = new Animated.Value(0);
  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const bg = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"],
  });
  return (
    <Pressable
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      bg="white"
      borderRadius="10"
      overflow="hidden"
      {...props}
    >
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          backgroundColor: bg
        }}
      />
      <View {...props._contentContainerStyle}>
        {props.children}
      </View>
    </Pressable>
  );
}

export default AnimatedPressable;
