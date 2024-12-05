import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
           <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Strydr Silverberg 
          </Heading>
          <p>Systems nerd(Hacker/Developer/Mathematician)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        </Box>
      </Box>
      <Divider my={6} />
       <Paragraph>
       Strydr is a developer and student at Colorado School of Mines in Golden, CO, 
       passionate about solving real-world problems with code. Outside of programming, 
       he enjoys fly fishing, climbing, skiing, and time with his puppy.
        </Paragraph>

        <Paragraph>
       He’s currently developing the Kirin Chess Engine and sharing videos on chess programming, 
       Linux, and VIM. Strydr's interests include low-level programming in C and assembly, 
       reassembling binaries, building machines, managing servers, and exploring Linux gaming.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="red"
          >
            My portfolio
          </Button>
        </Box>

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
