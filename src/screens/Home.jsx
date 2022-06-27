import React from 'react';
import { Dimensions, FlatList, Animated } from 'react-native';
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
  ScrollView,
  Button
} from 'native-base';
import Layout from '../components/Layout';
import HomeHeader from '../components/headers/HomeHeader';

const { width: PAGE_WIDTH } = Dimensions.get('window');

const rateOrderItems = [
  "McDonald's - Manila",
  "Jolibee - Manila",
  "McDonald's - Manila",
  "Jolibee - Manila",
  "KFC - Manila",
];

const HomePickerCard = (props) => {
  return (
    <Box
      {...props}
      p="4"
      bg="white"
      borderWidth="1"
      borderColor="gray.200"
      borderRadius="10"
    >
      <VStack>
        <Heading fontSize={props.titleSize}>{props.title}</Heading>
        <Text fontSize="xs" color="gray.500">{props.subtitle}</Text>
      </VStack>
    </Box>
  );
}

const RestaurantCard = (props) => {
  return (
    <Stack>
      <Box
        {...props}
        bg="white"
        borderWidth="1"
        borderColor="gray.200"
        borderRadius="10"
        overflow="hidden"
        maxW="235"
      >
        <AspectRatio w="full" ratio={16/9}>
          <Image
            source={{ uri: props.cover }}
            alt="cover" size="full"
          />
        </AspectRatio>
        {props.discount &&
        <Box
          bg="#D70F64"
          position="absolute"
          top="1.5"
          px="1.5"
          py="0.5"
          borderRightRadius="5"
        >
          <Text fontSize="xs" color="white" bold>{props.discount}</Text>
        </Box>}
        {props.discountSub &&
        <Box
          bg="#D70F64"
          position="absolute"
          top="9"
          px="1.5"
          py="0.5"
          borderRightRadius="5"
        >
          <Text fontSize="xs" color="white" bold>{props.discountSub}</Text>
        </Box>}
        <Box
          bg="white"
          position="absolute"
          left="1.5"
          bottom="1.5"
          px="1.5"
          py="0.5"
          borderRadius="10"
          shadow="1"
        >
          <Text fontSize="xs" bold>{props.deliveryTime}</Text>
        </Box>
      </Box>
      <Text fontSize="sm" bold>{props.title}</Text>
      <Text fontSize="sm" color="gray.500">{props.subtitle}</Text>
      <Text fontSize="xs" bold>{props.deliveryFee}</Text>
    </Stack>
  );
}

const CuisineCard = (props) => {
  return (
    <VStack>
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
      <Text fontSize="xs" alignSelf="center" bold>{props.title}</Text>
    </VStack>
  );
}

const HomeCard = (props) => {
  return (
    <Box
      {...props}
      p="4"
      bg="white"
      borderWidth="1"
      borderColor="gray.200"
      borderRadius="10"
    >
      <HStack justifyContent="space-between">
        <VStack>
          <Heading fontSize="md">{props.title}</Heading>
          <Text fontSize="xs">{props.subtitle}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

const DailyDealsCard = (props) => {
  return (
    <Box
      {...props}
      bg="blueGray.200"
      borderRadius="10"
      overflow="hidden"
      maxW="235"
    >
      <AspectRatio w="full" ratio={16/9}>
        <Image
          source={{ uri: props.cover }}
          alt="cover" size="full" resizeMode="stretch"
        />
      </AspectRatio>
    </Box>
  );
}

const RateOrderCard = (props) => {
  return (
    <Box
      {...props}
      p="4"
      bg="white"
      borderWidth="1"
      borderColor="gray.200"
      borderRadius="10"
    >
      <HStack justifyContent="space-between">
        <VStack>
          <VStack mb="8">
            <Heading fontSize="md">How was your order?</Heading>
            <Text fontSize="xs">{props.shop}</Text>
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
    </Box>
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
            return <RateOrderCard shop={item} w={PAGE_WIDTH-32} mx="4" />
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
        <Box bg="blueGray.100" p="4">
          <VStack space="2">
            <HStack space="2">
              <HomePickerCard title="Food delivery" subtitle="Order food you love" w="1/2" />
              <VStack w="full" pr="4" space="2">
                <HomePickerCard title="juanmart" titleSize="md" subtitle="Groceries in 20+ mins" w="1/2" h="32" />
                <HomePickerCard title="Shops" titleSize="md" subtitle="Groceries and more" w="1/2" />
              </VStack>
            </HStack>
            <HStack space="2">
              <HomePickerCard title="Dine-in" titleSize="md" subtitle="Eating out? Enjoy 25% OFF" w="1/2" />
              <VStack w="full" pr="4" space="2">
                <HomePickerCard title="Pick-up" titleSize="md" subtitle="Get unli savings" w="1/2" />
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
            pb="4"
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
            pb="4"
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{
              pl: '4'
            }}
          >
            <VStack space="6">
              <HStack space="2">
                <CuisineCard
                  title="Snacks"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/101.png"
                />
                <CuisineCard
                  title="Filipino"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/164.png"
                />
                <CuisineCard
                  title="Beverages"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/68.png"
                />
                <CuisineCard
                  title="Chinese"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/53.png"
                />
                <CuisineCard
                  title="Congee"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1088.png"
                />
                <CuisineCard
                  title="Asian"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/54.png"
                />
                <CuisineCard
                  title="Bowl"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1096.png"
                />
                <CuisineCard
                  title="Cakes"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1107.png"
                />
              </HStack>
              <HStack space="2">
                <CuisineCard
                  title="Burgers"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/64.png"
                />
                <CuisineCard
                  title="Coffee"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1101.png"
                />
                <CuisineCard
                  title="Chicken"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/79.png"
                />
                <CuisineCard
                  title="American"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/66.png"
                />
                <CuisineCard
                  title="Drinks"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/72.png"
                />
                <CuisineCard
                  title="Australian"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/104.png"
                />
                <CuisineCard
                  title="Bread"
                  cover="https://images.deliveryhero.io/image/foodpanda/cuisine-images/PH/1106.png"
                />
              </HStack>
            </VStack>
          </ScrollView>
        </Stack>

        <HomeCard
          m="4"
          title="pro perks"
          subtitle="monthly exclusive deals and FREE..."
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
              <DailyDealsCard cover="https://images.deliveryhero.io/image/fd-ph/campaign-assets/4b95b37e-f052-11ec-9b58-8aafc25a6d12/desktop_tile_EnOHjf.png?height=240&quality=95&width=560&" />
              <DailyDealsCard cover="https://images.deliveryhero.io/image/fd-ph/campaign-assets/628ada05-eff9-11ec-a091-d2d0972c390a/desktop_tile_EnCiSG.png?height=240&quality=95&width=560&" />
              <DailyDealsCard cover="https://images.deliveryhero.io/image/fd-ph/campaign-assets/fe845d67-e198-11ec-b49c-3a1fd50ff438/desktop_tile_Enxdey.png?height=240&quality=95&width=560&" />
            </HStack>
          </ScrollView>
        </Stack>

        <HomeCard
          m="4" mb="6"
          title="Play and win prizes!"
          subtitle="Get rewards now"
        />

        {/* Rate orders */}
        <RateOrderCarousel mb="4" data={rateOrderItems} />

      </Layout>
    </>
  );
}

export default Home;
