import React from 'react'
import Image from 'next/image'
import './social.css'

const Socials = ({ imgUrl }: {imgUrl: any}) => {
  return (
    <Image 
        src={imgUrl} 
        className='icon-div'
        width={16}
        height={16}
        alt="icon"
    /> 
  )
}

export default Socials