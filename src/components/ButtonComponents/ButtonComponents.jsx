import { Button } from 'antd'
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";
const ButtonComponents = ({size, styleButton, textButton, ...rest}) => {
  return (
    <Button 
        size={size}
        icon={<SearchOutlined />}
        style={styleButton}
        {...rest}
      >
        {textButton}
      </Button>
  )
}

export default ButtonComponents
