"use client"
import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, selectFavorite, setIsOpenBar } from '../../slices/userSlice'

const NavBar = () => {
  const cart = useSelector(selectCart)
  const favorite = useSelector(selectFavorite)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(setIsOpenBar(true))
  }

  const openFavorite = () => {
    alert("sjhdsjjhs")
  }

  return (
    <div className='navbar-wrapper'>
       <div className='left-nav'>
          <h3 className='logo'>Bandage</h3>
          <div className='nav-list'>
              <div><a href=''>Home</a></div>
              <div className='shop'>
                <a href=''>Shop</a>
                <Image
                 src="/icons/caret-v.png"
                 width={5.71}
                 height={10}
                 alt='icon'
                />
              </div>
              <div><a href=''>About</a></div>
              <div><a href=''>Blog</a></div>
              <div><a href=''>Contact</a></div>
              <div><a href=''>Pages</a></div>
          </div>
       </div>
       <div className='right-nav'>
         <div className='register'>
            <Image
             src={'/icons/user-v.png'}
             width={12}
             height={12}
             alt=''
             className='user'
            />
            <div className='register-links'>
              <a href=''>Login&nbsp;/</a>&nbsp;
              <a href=''>Register</a>
            </div>            
         </div>
         <div className='search'>
            <div>
              <Image
                src={'/icons/search-v.png'}
                width={16}
                height={16}
                alt=''
              />
            </div>           
            <div className='sub'>
              <Image
                src={'/icons/cart-v.png'}
                width={16}
                height={16}
                alt=''
                onClick={() => openCart()}
              />
              <span>{cart.length > 0 ? cart.length : ""}</span>
            </div>
            <div className='sub'>
              <Image
                src={'/icons/love-v.png'}
                width={16}
                height={16}
                alt=''
                onClick={() => openFavorite()}
              /> 
              <span>{favorite.length > 0 ? favorite.length : ""}</span>
            </div>            
         </div>
       </div>
    </div>
  )
}

export default NavBar