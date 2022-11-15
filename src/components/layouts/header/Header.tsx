import { FC } from 'react'
import { Wrapper } from 'components/wrapper'
import { Container } from 'components/container'
import './Header.css'

const Header: FC = () => {
  return (
    <header>
      <Wrapper height={50} className="header-wrapper">
        <Container className="header-container">
          <img src="/ripl.svg" alt="no logo" width={48} height={15} />
        </Container>
      </Wrapper>
    </header>
  )
}

export default Header
