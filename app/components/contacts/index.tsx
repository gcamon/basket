import React from 'react'
import Image from 'next/image'

const Contact = ({ imgUrl, text }) => {
  return (
    <div>   
        <Image 
            src={imgUrl} 
            width={16}
            height={16}
            alt="icon"
        /> 
        <div>
            {text}
        </div>          
    </div>
  )
}

export default Contact