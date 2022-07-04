import React from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/headers/AppHeader';

const JuanMart = (props) => {
  return (
    <Layout
      bg="white"
      header={<AppHeader title="juanmart" bg="white" {...props} />}
    >
    </Layout>
  );
}

export default JuanMart;
