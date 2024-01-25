import { Input } from 'antd'
import React from 'react'

const InputComponents = ({size, placeholder,style, ...rests }) => {
  return (
      <Input
        size={size}
        placeholder={placeholder}
        style={style}
        {...rests}
      />
  )
}

export default InputComponents
