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

const { width: PAGE_WIDTH } = Dimensions.get('window');

const restaurants = [
  {
    title: "McDonald's - Manila",
    cover: "https://images.deliveryhero.io/image/fd-ph/LH/hyii-listing.jpg?width=400&height=292"
  },
  {
    title: "Jolibee - Manila",
    cover: "https://images.deliveryhero.io/image/fd-ph/LH/r1kb-listing.jpg?width=400&height=292"
  },
  {
    title: "KFC - Manila",
    cover: "https://images.deliveryhero.io/image/fd-ph/LH/v2ms-listing.jpg?width=400&height=292"
  }
];

const dailyDeals = [
  {
    title: "Low Delivery Fee",
    cover: "https://images.deliveryhero.io/image/fd-ph/campaign-assets/4b95b37e-f052-11ec-9b58-8aafc25a6d12/mobile_tile_EnJUpA.png?height=352&quality=95&width=288&"
  },
  {
    title: "McDonald's",
    cover: "https://images.deliveryhero.io/image/fd-ph/campaign-assets/628ada05-eff9-11ec-a091-d2d0972c390a/mobile_tile_EnuiMP.png?height=352&quality=95&width=288&"
  },
  {
    title: "88FOOD",
    cover: "https://images.deliveryhero.io/image/fd-ph/campaign-assets/fe845d67-e198-11ec-b49c-3a1fd50ff438/mobile_tile_Enaukt.png?height=352&quality=95&width=288&"
  }
];

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

        {/* Home items */}
        <Box bg="blueGray.100" p="4">
          <VStack space="2">
            <HStack space="2">
              <HomeItem
                cover="https://images.deliveryhero.io/image/foodpanda/ph/Homescreen/APAC_Rebrand_2021_Navigation/PH_restaurants_0322.png"
                coverBottom="-158"
                title="Food delivery"
                subtitle="Order food you love"
                subTitleMuted
                w="1/2"
                column
              />
              <VStack w="full" pr="4" space="2">
                <HomeItem
                  cover="https://images.deliveryhero.io/image/darkstores/categoryimages25mar2022/24.%20Fruits%20&%20Vegetables.png?height=104&dpi=1"
                  coverSize="1/2"
                  coverBottom="-86"
                  title="juanmart"
                  titleSize="md"
                  subtitle="Groceries in 20+ mins"
                  subTitleMuted
                  w="1/2"
                  h="32"
                  column
                />
                <HomeItem
                  cover="https://images.deliveryhero.io/image/foodpanda/ph/Homescreen/APAC_Rebrand_2021_Navigation/PH_shops_0322.png"
                  title="Shops"
                  titleSize="md"
                  subtitle="Groceries and more"
                  subTitleMuted
                  w="1/2"
                />
              </VStack>
            </HStack>
            <HStack space="2">
              <HomeItem
                cover="https://images.deliveryhero.io/image/foodpanda/vertical-switcher/ph/dine_in.png"
                title="Dine-in"
                titleSize="md"
                subtitle="Eating out? Enjoy 25% OFF"
                subTitleMuted
                w="1/2"
              />
              <VStack w="full" pr="4" space="2">
                <HomeItem
                  cover="https://images.deliveryhero.io/image/foodpanda/bd/homescreen/APAC_Rebrand%202021_Navigation%20tiles/BD_pickup.png"
                  title="Pick-up"
                  titleSize="md"
                  subtitle="Get unli savings"
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
              <RestaurantCard
                title="McDonald's - Manila"
                discount="P70 OFF, Min. P499"
                discountSub="Up to P100 OFF #BetterWithCoke"
                subtitle="PP Fast Food, American, Chicken, R..."
                deliveryFee="P 34 delivery fee"
                deliveryTime="20 min"
                cover="https://images.deliveryhero.io/image/fd-ph/LH/hyii-listing.jpg?width=400&height=292"
              />
              <RestaurantCard
                title="Jollibee - Manila"
                discount="50% OFF"
                subtitle="PPP Fast Food, Chicken, Rice Dish..."
                deliveryFee="P 34 delivery fee"
                deliveryTime="20 min"
                cover="https://images.deliveryhero.io/image/fd-ph/LH/r1kb-listing.jpg?width=400&height=292"
              />
              <RestaurantCard
                title="KFC - Manila"
                discount="P70 OFF, Min. P499"
                discountSub="Up to P100 OFF #BetterWithCoke"
                subtitle="PPP Fast Food, Chicken, Rice Dish..."
                deliveryFee="P 34 delivery fee"
                deliveryTime="20 min"
                cover="https://images.deliveryhero.io/image/fd-ph/LH/v2ms-listing.jpg?width=400&height=292"
              />
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
                <CuisineCard
                  title="Fast Food"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/65.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="American"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/66.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Beverages"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/68.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Japanese"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/51.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Congee"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1088.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Asian"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/54.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Bowl"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1096.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Cakes"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1107.png"
                  navigation={props.navigation}
                />
              </HStack>
              <HStack space="2">
                <CuisineCard
                  title="Burgers"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/64.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Coffee"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1101.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Pizza"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/52.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Chicken"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/79.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Drinks"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/72.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Australian"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/104.png"
                  navigation={props.navigation}
                />
                <CuisineCard
                  title="Bread"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1106.png"
                  navigation={props.navigation}
                />
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
              {dailyDeals.map((item, index) => {
                return <DailyDealCard key={index} title={item.title} cover={item.cover} navigation={props.navigation} />
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
        <RateOrderCarousel mb="4" data={restaurants} navigation={props.navigation} />

      </Layout>
    </>
  );
}

export default Home;
