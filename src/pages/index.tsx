import type { NextPage } from 'next'
import Head from 'next/head'

import BasicCard from '@/Components/BasicCard'
import Layout from '@/Components/Layout'
import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Footer from '@/Components/Footer'
import { Divider } from '@mui/material'
import Editor from '@/Components/Editor'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interview Record</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
        <BasicCard/>
        <Divider />
        <Editor />
        <Footer />
        {/* <Counter /> */}
        </>
      </Layout>
    </div>
  )
}

export default IndexPage
