import type { NextPage } from 'next';
import { Divider } from '@mui/material';
import Head from 'next/head';
import Counter from '../features/counter/Counter';
import styles from '../styles/Home.module.css';

import BasicCard from '@/Components/BasicCard';
import Editor from '@/Components/Editor';
import Footer from '@/Components/Footer';
import Layout from '@/Components/Layout';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interview Record</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <BasicCard />
          <Divider />
          <Editor />
          <Footer />
          {/* <Counter /> */}
        </>
      </Layout>
    </div>
  );
};

export default IndexPage;
