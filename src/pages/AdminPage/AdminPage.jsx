import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../uils';
import { UserOutlined, AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
// import AdminUser from '../../components/AdminUser/AdminUser';
// import AdminProduct from '../../components/AdminProduct/AdminProduct';
// import OrderAdmin from '../../components/OrderAdmin/OrderAdmin';
// import * as OrderService from '../../service/OrderService'
// import * as ProductService from '../../service/ProductService'
// import * as UserService from '../../service/UserService'



const AdminPage = () => {
  const rootSubmenuKeys = ['user' , 'products'];
  const [openKeys, setOpenKeys] = useState(['user'])
  const [keySelected, setKeySelected] = useState('')


  const items = [
    getItem('Người dùng', 'users', <UserOutlined />),
    getItem('Sản phẩm', 'products', <AppstoreOutlined />),
    getItem('Đơn hàng', 'orders', <ShoppingCartOutlined />),
    
  ];
const onOpenChange = (keys) => {
  const latesOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  if (rootSubmenuKeys.indexOf(latesOpenKey) === -1) {
    setOpenKeys(keys)
  } else {
    setOpenKeys(latesOpenKey ? [latesOpenKey] : []);
  }
}
  const handleOnclick = ({ items, key, keyPath, domEvent}) =>{
    console.log("click",items, key, keyPath, domEvent)
    setKeySelected(key)
  }

  
  

  const renderPage = (keys) => {
    switch (keys) {
      case 'users':
        return (
          <AdminUser />
        )
      case 'products':
        return (
          <AdminProduct />
        )
      default:
        return <></>
    }
  }

  
  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: 'flex',overflowX: 'hidden' }}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
            boxShadow: '1px 1px 2px #ccc',          }}
          items={items}
          onClick={handleOnclick}
        />
        <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  )
}

export default AdminPage