"use client"
import React, { useEffect, useState} from 'react'
import './product.css'
import ProductItem from '../productItem'

const Product = ({ header, loadMore }: {header: String, loadMore: Boolean}) => {

  const [ products, setProducts] = useState([]);
  const [ arrLen, setArrLen ] = useState(0);
  const [ isAllLoaded, setIsAllLoaded ] = useState(false);
  const [ isFetching, setIsFetching ] = useState(false)

  const getData = async (limit: Number) => {
    try {
      setIsFetching(true)
      const response =  await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const data = await response.json();
      data && setIsFetching(false);
      setProducts(data.products);
      setArrLen(products.length);
      console.log(data.products);
    }
    catch(err) {
      console.log("Error fetch products")
    }
    
  }      

  useEffect(() => {  
    if(header === 'center'){
      getData(10)
    } else {
      getData(8)
    }
    
  },[]);

  const addMore = () => {
    console.log(products.length, arrLen)
    if(products.length > arrLen) {
      getData(products.length + 10);
    } else {
      setIsAllLoaded(true)
    }
  }


  return (
    <div className='product-wrapper'>
        <div className='product-container'>
          { header == 'center' 
          ? <header className='product-header'>
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between</p>
          </header>
          :
          <header className='product-header2'>        
            <h3>BESTSELLER PRODUCTS</h3>
          </header>
          }
          <div className='product-items'>
            <div className={header === 'center' ? 'product-item grid grid-cols-5 gap-3' : 'product-item grid grid-cols-4 gap-3'}>
                {
                  products.map(({thumbnail, title, price, category, id}) => (
                    <ProductItem imgURL={thumbnail} title={title} price={price} category={category} id={id}/>
                  ))
                }
            </div>
            <div className='load-more'>
              
              { loadMore 
              && !isAllLoaded             
              && <button onClick={() => addMore()} >{isFetching ? 'Fetching products...' : 'LOAD MORE PRODUCTS'}</button>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product