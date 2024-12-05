import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
//import HeartIcon from './icons/heart'
import Cog from './icons/cog'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(360deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Cog />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Noto Serif", sans-serif'
          fontWeight="bold"
          ml={3}
        >
         Strydr Silverberg 
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
