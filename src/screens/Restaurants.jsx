import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Box,
  Heading,
  Text,
  ScrollView,
  Pressable,
  AspectRatio,
  Image
} from 'native-base';
import Layout from '../components/Layout';
import SearchHeader from '../components/headers/SearchHeader';
import RestaurantCard from '../components/RestaurantCard';
import DealCard from '../components/DealCard';
import CuisineCard from '../components/CuisineCard';
import * as Data from '../data';

const Restaurants = (props) => {
  return (
    <>
      <SearchHeader description="Food delivery" rightNav filter {...props} />
      <Layout>

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

        {/* Your Favorites */}
        <Stack>
          <Stack p="4" pb="2">
            <Heading fontSize="lg">Your Favorites</Heading>
          </Stack>
          <ScrollView
            pb="2"
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{
              pl: '4'
            }}
          >
            <HStack space="2">
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
                  />
                );
              })}
            </HStack>
          </ScrollView>
        </Stack>

        {/* Cuisine */}
        <Stack pb="2">
          <Stack p="4" pt="0" pb="2">
            <Heading fontSize="lg">Cuisine</Heading>
          </Stack>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{
              px: '4',
              py: '1'
            }}
          >
            <HStack space="2">
              {Data.cuisines.row1.map((item, index) => {
                return (
                  <CuisineCard
                    key={'cuisineA'+index}
                    title={item.title}
                    cover={item.cover}
                    navigation={props.navigation}
                  />
                );
              })}
              {Data.cuisines.row2.map((item, index) => {
                return (
                  <CuisineCard
                    key={'cuisineB'+index}
                    title={item.title}
                    cover={item.cover}
                    navigation={props.navigation}
                  />
                );
              })}
            </HStack>
          </ScrollView>
        </Stack>

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

export default Restaurants;
