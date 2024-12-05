import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Strydr's homepage" />
        <meta name="author" content="Strydr Silverberg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Strydr Silverberg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@s_strydr" />
        <meta name="twitter:creator" content="@s_strydr" />
        <meta property="og:site_name" content="Strydr Silverberg" />
        <meta name="og:title" content="Strydr Silverberg" />
        <meta property="og:type" content="website" />
        <title>Strydr Silverberg - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
