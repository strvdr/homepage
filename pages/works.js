
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Container, Heading, SimpleGrid, Divider, Box, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKirin from '../public/images/works/kirin_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
       <Section delay={0.6}>
          <WorkGridItem id="kirin" thumbnail={thumbKirin} title="Kirin">
            Chess engine written in the C programming language. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
          <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="red"
          >
           Home 
          </Button>
        </Box>


    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
