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
  Image,
  Icon
} from 'native-base';
import SearchHeader from '../components/headers/SearchHeader';
import Layout from '../components/Layout';
import ShopsSkeleton from '../components/skeletons/ShopsSkeleton';
import DealCard from '../components/DealCard';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Data from '../data';

const ShopCard = (props) => {
  return (
    <Pressable>
      <HStack space="4" {...props}>
        <Box borderRadius="10" w="1/4" overflow="hidden">
          <AspectRatio w="full" ratio={1}>
            <Image
              source={{ uri: props.cover }}
              alt="cover" size="full"
            />
          </AspectRatio>
        </Box>
        <VStack flex="1">
          <HStack justifyContent="space-between">
            <Box w="3/4">
              <Heading fontSize="sm" isTruncated>{props.title}</Heading>
            </Box>
            <Box borderRadius="full" bg="white" shadow="2" p="1">
              <Icon as={Feather} size="xs" name="heart" />
            </Box>
          </HStack>
          <Text fontSize="xs">{props.cost}</Text>
          <HStack alignItems="center" space="1">
            <Icon as={MaterialCommunityIcons} name="bike" size="xs" color="primary.600" />
            <Text fontSize="xs" color="gray.400">{props.deliveryFee}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
}

const Shops = (props) => {
  return (
    <>
      <SearchHeader description="Shops" searchText="Looking for something?" rightNav filter {...props} />
      <Layout bg="white" skeleton={<ShopsSkeleton />}>
        
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

        {/* All Restaurants */}
        <VStack p="4" space="4">
          <Heading fontSize="lg">Shop by store</Heading>
          {Data.shops.map((item, index) => {
            return (
              <ShopCard
                key={'shop'+index}
                title={item.title}
                cover={item.cover}
                cost={item.cost}
                deliveryFee={item.deliveryFee}
                deliveryPromo={item.deliveryTime}
              />
            );
          })}
        </VStack>

      </Layout>
    </>
  );
}

export default Shops;
