import React from 'react'
import './breadcrum.css'
import Image from 'next/image'

const Breadcrum = () => {
  return (
    <div className='breadcrum-wrapper'>
        <a href=''>Home</a>
        <span>
            <Image 
                src={'/icons/greater-v.png'} 
                alt=''
                width={8}
                height={16}
            />
        </span>
        <a href='' className='active-nav'>Shop</a>
    </div>
  )
}

export default Breadcrum