"use client"
import React, { useEffect } from 'react'
import './sideBar.css'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpenBar, selectIsOpenBar, selectCart } from '../../slices/userSlice'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const SideBar = () => {
  const openBar = useSelector(selectIsOpenBar)
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const closeBar = () => {
    dispatch(setIsOpenBar(false))
  }

  // useEffect(() => {
    
  // },[openBar])

  return (
    <>
    { openBar && <div className='sidebar-wrapper'>
        <div className='sidebar-header'>
          <ShoppingCartOutlinedIcon /> 
          <div className='cart-div' onClick={() => closeBar()}>
            <CloseOutlinedIcon/>
          </div>
        </div>
        <div className='sidebar-body'>
           {cart && cart.map((product: any) => (
            <>
              <div className='product-bar'>
                  <h4>{product.title}</h4>
                  <h6>{product.category}</h6>
                  <h6>{"$" + product.price.toString().replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,")}</h6>
              </div>
              <hr/>
            </>
           ))}
        </div>
    </div>
    }
   </>
  )
}

export default SideBar