import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { IAbstractButton } from '../../const/types'

interface IPropsAbstractButton extends IAbstractButton {
    children: ReactNode;
}

const AbstractButton: React.FC<IPropsAbstractButton> = (props) => {
  return (
    <AbstractButtonStyle padding={props.padding} fontWeight={props.fontWeight} backgroundColor={props.backgroundColor}>AbstractButton</AbstractButtonStyle>
  )
}

export default AbstractButton

const AbstractButtonStyle = styled.button<IAbstractButton>`
    padding: 5px 10px;
    font-weight: 700;
    background-color: ${(props) => props.backgroundColor};
`

