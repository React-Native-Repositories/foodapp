import React from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';

const JuanMart = (props) => {
  return (
    <>
      <AppHeader title="juanmart" {...props} />
      <Layout p="4">
      </Layout>
    </>
  );
}

export default JuanMart;
