import React, { FC } from 'react'
import './Container.css'

interface Props {
  children?: React.ReactNode
  className?: string
  maxWidth?: Number
}

const Container: FC<Props> = props => {
  const { children, className, maxWidth } = props
  return (
    <div className={`container ${className}`} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  className: '',
  maxWidth: 1200,
}

export default Container
