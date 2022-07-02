import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Box,
  Heading,
  Text,
  ScrollView,
  Icon,
  AspectRatio,
  Image
} from 'native-base';
import Layout from '../components/Layout';
import SearchHeader from '../components/headers/SearchHeader';
import RestaurantCard from '../components/RestaurantCard';
import DealCard from '../components/DealCard';
import CuisineCard from '../components/CuisineCard';
import AnimatedPressableCard from '../components/AnimatedPressableCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Data from '../data';

const ExploreCard = (props) => {
  return (
    <AnimatedPressableCard
      borderWidth="1"
      borderColor="gray.200"
      {...props}
    >
      <AspectRatio w="full" ratio={3}>
        <Image
          source={{ uri: "https://micro-assets.foodora.com/img/img-map-background.jpg" }}
          alt="cover" size="full"
        />
      </AspectRatio>
      <HStack
        ml="2" mt="6"
        w="full"
        justifyContent="space-between"
        position="absolute"
      >
        <VStack space="3">
          <Heading fontSize="15">Explore restaurants around you</Heading>
          <Box
            ml="4"
            pl="3" pr="2" py="1.5"
            bg="white"
            alignSelf="flex-start"
            borderRadius="3xl"
          >
            <HStack space="2">
              <Text bold>Show map</Text>
              <Icon
                as={Ionicons}
                size="lg"
                name="arrow-forward-outline"
                color="primary.600"
              />
            </HStack>
          </Box>
        </VStack>
        <HStack mr="4" mt="-1">
          <Icon as={Ionicons} size="2xl" name="location" color="primary.300" mt="8" />
          <Icon as={Ionicons} size="2xl" name="location" color="primary.300" />
          <Icon as={Ionicons} size="2xl" name="location" color="primary.300" mt="4" />
        </HStack>
      </HStack>
    </AnimatedPressableCard>
  );
}

const Pickup = (props) => {
  return (
    <>
      <SearchHeader description="Pick-Up" rightNav filter {...props} />
      <Layout bg="white">

        {/* Daily deals */}
        <Stack pt="4">
          <ScrollView
            pb="2"
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{
              pl: '4'
            }}
          >
            <HStack space="2">
              {Data.dailyDeals.map((item, index) => {
                return (
                  <DealCard
                    key={'deal'+index}
                    title={item.title}
                    cover={item.cover}
                    navigation={props.navigation}
                  />
                );
              })}
            </HStack>
          </ScrollView>
        </Stack>

        <ExploreCard m="4" mb="2" />

        {/* All Restaurants */}
        <VStack p="4" space="2">
          <Stack pb="2">
            <Heading fontSize="lg">All Restaurants</Heading>
          </Stack>
          {Data.restaurants.map((item, index) => {
            return (
              <RestaurantCard
                key={'restaurant'+index}
                title={item.title}
                description={item.description}
                promo1={item.promo1}
                promo2={item.promo2}
                deliveryFee={item.deliveryFee}
                deliveryTime={item.deliveryTime}
                cover={item.cover}
                maxW="full"
              />
            );
          })}
        </VStack>
        
      </Layout>
    </>
  );
}

export default Pickup;
