import React from 'react';
import { VStack } from 'native-base';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';
import RestaurantCard from '../components/RestaurantCard';
import * as Data from '../data';

const Campaign = (props) => {
  const { title } = props.route.params;
  return (
    <>
      <AppHeader title={title} {...props} />
      <Layout p="4">
        <VStack space="2">
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
                maxW="full"
              />
            );
          })}
        </VStack>
      </Layout>
    </>
  );
}

export default Campaign;
