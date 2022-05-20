import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SAuthPage, SButton, SCenteredIcon, SCenteredText, SContainer, SFormContainer, SInput, SRow } from '../components/styled'
import { icons } from '../utils/constants'

const Home: NextPage = () => {
  return (
    <SAuthPage>
      <SContainer>
        <SFormContainer>
          {/* <SRow> */}
          <SCenteredIcon><icons.user /></SCenteredIcon>
          {/* </SRow> */}
          {/* <SCenteredText>Login</SCenteredText> */}
          <SInput placeholder='username' />
          <SInput placeholder='password' type={"password"} />
          <Link href={'/cart'} passHref>
            <SButton>Login</SButton>
          </Link>
        </SFormContainer>
      </SContainer>
    </SAuthPage>
  )
}

export default Home
