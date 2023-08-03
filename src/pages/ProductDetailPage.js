import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductDetails from '../features/product-list/components/ProductDetails'
const ProductDetailPage = () => {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
    </div>
  )
}

export default ProductDetailPage
