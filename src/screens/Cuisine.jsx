import React from 'react';
import { VStack } from 'native-base';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';
import RestaurantCard from '../components/RestaurantCard';

const Cuisine = (props) => {
  const { title } = props.route.params;
  return (
    <>
      <AppHeader title={title} {...props} />
      <Layout p="4">
        <VStack space="2">
          <RestaurantCard
            title="McDonald's - Manila"
            discount="P70 OFF, Min. P499"
            discountSub="Up to P100 OFF #BetterWithCoke"
            subtitle="PP Fast Food, American, Chicken, R..."
            deliveryFee="P 34 delivery fee"
            deliveryTime="20 min"
            cover="https://images.deliveryhero.io/image/fd-ph/LH/hyii-listing.jpg?width=400&height=292"
            maxW="full"
          />
          <RestaurantCard
            title="Jollibee - Manila"
            discount="50% OFF"
            subtitle="PPP Fast Food, Chicken, Rice Dish..."
            deliveryFee="P 34 delivery fee"
            deliveryTime="20 min"
            cover="https://images.deliveryhero.io/image/fd-ph/LH/r1kb-listing.jpg?width=400&height=292"
            maxW="full"
          />
          <RestaurantCard
            title="KFC - Manila"
            discount="P70 OFF, Min. P499"
            discountSub="Up to P100 OFF #BetterWithCoke"
            subtitle="PPP Fast Food, Chicken, Rice Dish..."
            deliveryFee="P 34 delivery fee"
            deliveryTime="20 min"
            cover="https://images.deliveryhero.io/image/fd-ph/LH/v2ms-listing.jpg?width=400&height=292"
            maxW="full"
          />
        </VStack>
      </Layout>
    </>
  );
}

export default Cuisine;
