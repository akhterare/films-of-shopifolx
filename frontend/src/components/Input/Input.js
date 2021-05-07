import React from "react"
import {
    InputStyles
} from './Input.styles'

const Input = ( props ) => (
    <InputStyles>{props.children}</InputStyles>
)
  
export default Input;