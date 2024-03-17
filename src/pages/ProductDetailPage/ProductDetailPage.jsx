import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailPage = () => {
  return (
    <div style={{width: '100%',background: '#efefef', height: '100%'}}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto'}} >
        <h5>Trang chu</h5>
        <ProductDetailsComponent />
      </div>
    </div>
  )
}

export default ProductDetailPage
