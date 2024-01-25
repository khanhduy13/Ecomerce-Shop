import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const cardComponent = () => {
  return (
    <Card
    style={{ width: 240 }}
    cover={<img alt="example" src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80        " />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default cardComponent
