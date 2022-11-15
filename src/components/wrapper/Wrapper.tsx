import React, { FC } from 'react'
import './Wrapper.css'

interface Props {
  children?: React.ReactNode
  className?: string
  height?: Number
}

const Wrapper: FC<Props> = props => {
  const { children, className, height } = props
  return (
    <div className={`wrapper ${className}`} style={{ height: height ? `${height}px` : 'auto' }}>
      {children}
    </div>
  )
}

Wrapper.defaultProps = {
  className: '',
}

export default Wrapper
