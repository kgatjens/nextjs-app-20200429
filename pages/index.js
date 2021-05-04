import Head from 'next/head'
import {Box, Flex, Heading, Text} from '@chakra-ui/core';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>20210429</title>
        <meta name="description" content="Basic setup by kbrenes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main}>
        <Flex>
          <Heading>
            <Text opacity="0.7" fontSize="lg" mt="6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend hendrerit leo eget ullamcorper. Integer id mauris id odio faucibus varius. Vestibulum dapibus lacus massa, ut mattis erat iaculis a. Donec facilisis sapien a vulputate consectetur. Vivamus consequat hendrerit dignissim. Pellentesque cursus blandit felis a facilisis. Nunc in viverra libero, nec ultrices risus. Aliquam erat volutpat. Donec in turpis interdum, luctus erat vel, ullamcorper quam. Integer cursus eros molestie est ornare, quis tincidunt ante imperdiet. Quisque at arcu aliquet, aliquam diam quis, elementum tortor.
            </Text>
          </Heading>
        </Flex>
      </Box>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
