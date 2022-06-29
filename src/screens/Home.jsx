import React from 'react';
import { Dimensions, Animated, FlatList } from 'react-native';
import {
  View,
  HStack,
  VStack,
  Stack,
  Box,
  Heading,
  Text,
  AspectRatio,
  Image,
  ScrollView
} from 'native-base';
import AnimatedPressable from '../components/AnimatedPressable';
import AnimatedPressableCard from '../components/AnimatedPressableCard';
import RestaurantCard from '../components/RestaurantCard';
import Layout from '../components/Layout';
import HomeHeader from '../components/headers/HomeHeader';
import * as Data from '../data';

const { width: PAGE_WIDTH } = Dimensions.get('window');

const HomeItem = (props) => {
  return (
    <AnimatedPressableCard
      borderWidth="1"
      borderColor="gray.200"
      _contentContainerStyle={{
        py: props.stretch ? '4' : '2',
        p: '0',
        pl: '4'
      }}
      {...props}
    >
      <Heading fontSize={props.titleSize} mb="1">{props.title}</Heading>
      {props.column &&
      <Text
        fontSize="xs"
        color={props.subTitleMuted ? "gray.500" : "darkText"}
        lineHeight="sm"
      >
        {props.subtitle}
      </Text>
      ||
      <VStack w={props.stretch ? "3/4" : "1/2"}>
        <Text
          fontSize="xs"
          color={props.subTitleMuted ? "gray.500" : "darkText"}
          lineHeight="sm"
        >
          {props.subtitle}
        </Text>
      </VStack>
      }
      {props.cover &&
      <AspectRatio
        ratio={1}
        position={"absolute"}
        right="0"
        bottom={props.column ? props.coverBottom || "0" : "-8"}
        w={props.column ? props.coverSize || "full" : props.stretch ? "1/4" : "1/2"}
      >
        <Image
          source={{ uri: props.cover }}
          alt="cover" size="full" resizeMode="contain"
        />
      </AspectRatio> || <></>
      }
    </AnimatedPressableCard>
  );
}

const CuisineCard = (props) => {
  return (
    <AnimatedPressable
      onPress={() => {
        props.navigation.navigate('Cuisine', { title: props.title });
      }}
    >
      <Box
        {...props}
        bg="blueGray.200"
        borderRadius="10"
        overflow="hidden"
        w="80px"
        maxW="100"
      >
        <AspectRatio w="full" ratio={1}>
          <Image
            source={{ uri: props.cover }}
            alt="cover" size="full"
          />
        </AspectRatio>
      </Box>
      <Text fontSize="xs" alignSelf="center" pb="4" bold>{props.title}</Text>
    </AnimatedPressable>
  );
}

const DailyDealCard = (props) => {
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

const RateOrderCard = (props) => {
  return (
    <AnimatedPressableCard
      borderWidth="1"
      borderColor="gray.200"
      _contentContainerStyle={{
        p: '4'
      }}
      onPress={() => {
        props.navigation.navigate('RateOrder', { data: props.data });
      }}
      {...props}
    >
      <HStack justifyContent="space-between">
        <VStack>
          <VStack mb="8">
            <Heading fontSize="md">How was your order?</Heading>
            <Text fontSize="xs" color="gray.500">{props.data.title}</Text>
          </VStack>
          <Box
            p="1" px="2.5"
            bg="#D70F64"
            alignSelf="flex-start"
            borderRadius="md"
          >
            <Text color="white" bold>Rate order</Text>
          </Box>
        </VStack>
      </HStack>
    </AnimatedPressableCard>
  );
}

const RateOrderCarousel = (props) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, PAGE_WIDTH);
  return (
    <View {...props}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <RateOrderCard data={item} w={PAGE_WIDTH-32} mx="4" navigation={props.navigation} />
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {useNativeDriver: false}
        )}
      />
      <View flexDirection="row" justifyContent="center" mt="1">
        {props.data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp'
          })
          return (
            <Animated.View
              key={i}
              style={{ opacity, height: 8, width: 8, backgroundColor: '#595959', margin: 2, borderRadius: 5 }}
            />
          )
        })}
      </View>
    </View>
  );
}

const Home = (props) => {
  return (
    <>
      <HomeHeader {...props} />
      <Layout>

        {/* Home navigation */}
        <Box bg="blueGray.100" p="4">
          <VStack space="2">
            <HStack space="2">
              <HomeItem
                title={Data.homeNavItems[0].title}
                subtitle={Data.homeNavItems[0].subtitle}
                cover={Data.homeNavItems[0].cover}
                subTitleMuted
                coverBottom="-158"
                w="1/2"
                column
              />
              <VStack w="full" pr="4" space="2">
                <HomeItem
                  title={Data.homeNavItems[1].title}
                  subtitle={Data.homeNavItems[1].subtitle}
                  cover={Data.homeNavItems[1].cover}
                  titleSize="md"
                  subTitleMuted
                  coverSize="1/2"
                  coverBottom="-86"
                  w="1/2"
                  h="32"
                  column
                />
                <HomeItem
                  title={Data.homeNavItems[2].title}
                  subtitle={Data.homeNavItems[2].subtitle}
                  cover={Data.homeNavItems[2].cover}
                  titleSize="md"
                  subTitleMuted
                  w="1/2"
                />
              </VStack>
            </HStack>
            <HStack space="2">
              <HomeItem
                title={Data.homeNavItems[3].title}
                subtitle={Data.homeNavItems[3].subtitle}
                cover={Data.homeNavItems[3].cover}
                titleSize="md"
                subTitleMuted
                w="1/2"
              />
              <VStack w="full" pr="4" space="2">
                <HomeItem
                  title={Data.homeNavItems[4].title}
                  subtitle={Data.homeNavItems[4].subtitle}
                  cover={Data.homeNavItems[4].cover}
                  titleSize="md"
                  subTitleMuted
                  w="1/2"
                />
              </VStack>
            </HStack>
          </VStack>
        </Box>

        {/* Restaurants */}
        <Stack>
          <Stack p="4" pt="5">
            <Heading fontSize="lg">Your Restaurants</Heading>
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
                    subtitle={item.subtitle}
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

        {/* Cuisines */}
        <Stack>
          <Stack p="4" pt="5">
            <Heading fontSize="lg">Cuisines</Heading>
          </Stack>
          <ScrollView
            pb="2"
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{
              pl: '4'
            }}
          >
            <VStack space="2">
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
              </HStack>
              <HStack space="2">
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
            </VStack>
          </ScrollView>
        </Stack>

        <HomeItem
          m="4"
          cover="https://images.deliveryhero.io/image/foodpanda/ph/Homescreen/APAC_Rebrand_2021_Navigation/pro.png"
          title="pro perks"
          titleSize="md"
          subtitle="monthly exclusive deals and FREE..."
          stretch
          onPress={() => {
            props.navigation.navigate('Campaign', { title: 'juanpro Deals Vendors' });
          }}
        />

        {/* Daily deals */}
        <Stack>
          <Stack p="4" pt="2">
            <Heading fontSize="lg">Your daily deals</Heading>
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
              {Data.dailyDeals.map((item, index) => {
                return (
                  <DailyDealCard
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

        <HomeItem
          m="4" mb="6"
          title="Play and win prizes!"
          titleSize="md"
          subtitle="Get rewards now"
          stretch
        />

        {/* Rate orders */}
        <RateOrderCarousel mb="4" data={Data.restaurants} navigation={props.navigation} />

      </Layout>
    </>
  );
}

export default Home;
