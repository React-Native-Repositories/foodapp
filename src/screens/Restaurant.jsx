import React from 'react';
import {
  Box,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  AspectRatio,
  Image,
  Icon
} from 'native-base';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';
import PopularOrderCard from '../components/PopularOrderCard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Data from '../data';

const DishCategorySection = (props) => {
  return (
    <Box bg="white" mb="4">
      <VStack mb="4" px="4" pt="4">
        <HStack space="2" alignItems="center">
          {props.icon}
          <Heading fontSize="xl">{props?.data?.title || props.title}</Heading>
        </HStack>
        {props?.data?.description && <Text>{props.data.description}</Text>}
        {props.description && <Text>{props.description}</Text>}
      </VStack>
      {props.children}
    </Box>
  );
}

const Dish = (props) => {
  return (
    <Box
      py="2"
      mx="4"
      borderBottomWidth={props.separator ? "1" : "0"}
      borderBottomColor="gray.200"
    >
      <HStack space="4" pr="4">
        <VStack w="3/4" overflow="hidden">
          <Text bold isTruncated>{props.data.title}</Text>
          <HStack space="2">
            <Text>{props.data.price}</Text>
            {props.data.popular &&
            <HStack alignItems="center" borderRadius="full" bg="orange.100" px="1.5">
              <Icon as={FontAwesome5} name="fire" color="orange.400" />
              <Text fontSize="xs" bold>Popular</Text>
            </HStack>
            }
          </HStack>
        </VStack>
        <AspectRatio w="1/4" ratio={1}>
          <Image
            source={{ uri: props.data.cover }}
            alt="cover" size="full"
          />
        </AspectRatio>
      </HStack>
    </Box>
  );
}

const Restaurant = (props) => {
  const { index } = props.route.params;
  const data = Data.restaurants[index];
  return (
    <>
      <AppHeader title="Delivery" bg="white" {...props} />
      {data.dishes && 
      <Layout>

        {/* Popular */}
        <DishCategorySection
          title="Popular"
          description="Most ordered right now."
          icon={
            <Icon as={FontAwesome5} name="fire" color="orange.400" size="sm" />
          }
        >
          <Stack space="4" pb="6" px="2" flexDirection="row" flexWrap="wrap">
            {data?.dishes?.map((category, i) => {
              return category.data.map((dish, j) => {
                if (dish.popular) {
                  return <Box key={'popular'+dish.title+j} w="1/2" p="2"><PopularOrderCard data={dish} /></Box>
                }
              })
            })}
          </Stack>
        </DishCategorySection>

        {/* Dishes by category */}
        {data?.dishes?.map((category, i) => {
          return (
            <DishCategorySection key={category.title + i} data={category}>
              {category.data.map((dish, j) => {
                let isLast = j === category.data.length - 1;
                return (
                  <Dish key={dish.title + j} data={dish} separator={!isLast} />
                );
              })}
            </DishCategorySection>
          );
        })}
        
      </Layout>
      }
    </>
  );
}

export default Restaurant;
