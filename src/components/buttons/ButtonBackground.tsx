import React, { ReactNode } from 'react'

interface IChildren {
  children: ReactNode;
}

const ButtonBackground: React.FC<IChildren> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default ButtonBackground