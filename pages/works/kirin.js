import NextLink from 'next/link'
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="kirin">
    <Container>
      <Title>
        Kirin <Badge>2024-Present</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/kirin_icon.png" alt="icon" />
      </Center>
      <P>
        Chess engine written in the C programming language.
      </P>
            <List ml={4} my={4}>
        <ListItem>
          <Meta>Interface</Meta>
          <span>Universal Chess Interface(UCI)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C, Make</span>
        </ListItem>
        <ListItem>
          <Meta>Download & Source</Meta>
          <Link href="https://github.com/strvdr/kirin-ce">
            v0.2
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>12/4/2024</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://github.com/strvdr/kirin-ce/wiki">wiki</Link>
        </ListItem>
        <ListItem>
          <Meta>Play Me</Meta>
          <Link href="https://lichess.org/@/KirinChessBot">Lichess</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/kirin_01.png" alt="kirin" />
      <WorkImage src="/images/works/kirin_02.png" alt="kirin" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
