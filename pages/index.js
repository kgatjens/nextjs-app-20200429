import Head from 'next/head'
//import {Box, Flex, Heading, Text} from '@chakra-ui/core';

import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import HeroPost from '../components/hero-post'
import { getAllPostsForHome } from '../lib/api'

import styles from '../styles/Home.module.css'

export default function Index({ allPosts: { edges } }) {
  const heroPost = edges[0]?.node
  console.log(heroPost);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with WP - GraphQL</title>
          <meta property="og:title" content={heroPost.title} key="title" />
         {/* <meta property="og:description" content={description} key="ogdesc" />
         <meta name="description" content={description}></meta> */}

        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
