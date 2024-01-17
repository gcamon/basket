import React from 'react'
import TopNav from './components/topNav'
import NavBar from './components/navbar'
import Furniture from './components/furniture'
import Product from './components/product'


const HomePage = () => {
  return (
    <div>
      <TopNav />
      <NavBar />
      <Furniture />     
      <Product header={'center'} loadMore={true}/>
    </div>
  )
}

export default HomePage


