import React from 'react';
import { AspectRatio, Image } from 'native-base';
import AnimatedPressableCard from './AnimatedPressableCard';

const DealCard = (props) => {
  return (
    <AnimatedPressableCard
      maxW="150"
      onPress={() => {
        props.navigation.navigate('Campaign', { title: props.title });
      }}
      {...props}
    >
      <AspectRatio w="full" ratio={500/611}>
        <Image
          source={{ uri: props.cover }}
          alt="cover" size="full"
        />
      </AspectRatio>
    </AnimatedPressableCard>
  );
}

export default DealCard;
