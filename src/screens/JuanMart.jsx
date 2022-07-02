import React from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';

const JuanMart = (props) => {
  return (
    <>
      <AppHeader title="juanmart" bg="white" {...props} />
      <Layout bg="white" p="4">
      </Layout>
    </>
  );
}

export default JuanMart;
