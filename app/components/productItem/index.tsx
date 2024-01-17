import React from 'react'
import './productItem.css'
import Image from 'next/image'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility'


const ProductItem = ({imgURL, title, category, price, id}: {imgURL: any, title: String, category: String, price: Number, id: any}) => {
  return (
    <div className='prod'>
        <div className='image-holder'>
          <img 
            src={imgURL}
            alt='item'
            className='product-img'
          />
          <Link href={`/product?id=${id}`} className='overlay'>            
              <div className='view-details'><VisibilityIcon htmlColor='#fff'/></div>           
          </Link>
        </div>
        <div className='product-details'>
          <h5>{title}</h5>
          <a href=''>{category}</a>
          <h5><span>$16.48</span> &nbsp;<span className='price'>{`$${price}`}</span></h5>
        </div>
    </div>
  )
}

export default ProductItem