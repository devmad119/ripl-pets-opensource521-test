import React, { FC } from 'react'
import { Header } from 'components/layouts'

interface Props {
  children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
