"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsAddedCart, selectIsAddedFavorite, setIsAddedCart, setIsAddedFavorite } from '../../slices/userSlice'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import './alertPallet.css'

const AlertPallet = () => {
  const isCart = useSelector(selectIsAddedCart)
  const isFavorite = useSelector(selectIsAddedFavorite)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
        isCart && dispatch(setIsAddedCart(false))
        isFavorite && dispatch(setIsAddedFavorite(false))

        clearTimeout(timer);
    }, 3000);
    
  },[isCart, isFavorite])

  return (
    <>
    {
        isCart && <div className='pallet-wrapper'>
            <h3>Product added to <FavoriteBorderOutlinedIcon/> </h3>
        </div>
    }

    {
        isFavorite && <div className='pallet-wrapper'>
            <h3>Product added to  <ShoppingCartOutlinedIcon/></h3>
        </div>
    }

    </>
    
  )
}

export default AlertPallet