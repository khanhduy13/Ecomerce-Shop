import React from 'react'
import { WrapperHeader } from './style'
import { Button, Form } from 'antd'
import TableComponent from '../TableComponent/TableComponent'

const AdminUser = () => {
  return (
    <div>
      <WrapperHeader>Quản lý người dùng</WrapperHeader>
      <Form.Item>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
            <div>
            <TableComponent />
            </div>
    </div>
  )
}

export default AdminUser
