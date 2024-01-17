import React from 'react'
import './furniture.css'
import Image from 'next/image'

const Furniture = () => {
  return (
    <div className='furniture-wrapper'>
       <div className='grid grid-cols-5 gap-3'>
         <div className='col-span-2 bg-img'>
           <Image
            src={'/images/bg-1.jpg'}
            width={452}
            height={616}
            alt=''
            />
            <div className='bg-info'>
                <span>5 items</span>
                <h2>Furniture</h2>
                <a href=''>Read More</a>
            </div>
         </div>
         <div className='col-span-3'>
            <div className='bg-img'>
                <Image
                src={'/images/bg-2.jpg'}
                width={679}
                height={300}
                alt=''
                />
                <div className='bg-info info-sm'>
                  <span>5 items</span>
                  <h3>Furniture</h3>
                  <a href=''>Read More</a>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-[10px]'>
              <div className='bg-img'>
                <Image
                  src={'/images/bg-3.jpg'}
                  width={332}
                  height={300}
                  alt=''
                  />
                  <div className='bg-info info-sm'>
                    <span>5 items</span>
                    <h3>Furniture</h3>
                    <a href=''>Read More</a>
                  </div>
              </div>
              <div className='bg-img'>
                <Image
                  src={'/images/bg-4.jpg'}
                  width={332}
                  height={300}
                  alt=''
                  />
                  <div className='bg-info info-sm'>
                    <span>5 items</span>
                    <h3>Furniture</h3>
                    <a href=''>Read More</a>
                  </div>
              </div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Furniture