import React from 'react';
import { Text } from 'native-base';
import Layout from '../components/Layout';
import HomeHeader from '../components/headers/HomeHeader';

const Home = (props) => {
  return (
    <>
      <HomeHeader {...props} />
      <Layout>
      </Layout>
    </>
  );
}

export default Home;
