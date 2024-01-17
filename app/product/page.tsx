import React from 'react'
import TopNav from '../components/topNav'
import NavBar from '../components/navbar'
import Product from '../components/product'
import Breadcrum from '../components/breadcrum'
import ProductDetail from '../components/productDetail'

const ProductPage = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      <div style={{backgroundColor: "#FAFAFA", padding: "20px 5px"}}>
      <Breadcrum />
      <ProductDetail />
      </div>
      <Product header={"left"} loadMore={false}/>
    </div>
  )
}

export default ProductPage