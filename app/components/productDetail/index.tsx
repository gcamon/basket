"use client"
import React , { useEffect, useState} from 'react'
import Image from 'next/image'
import './productDetail.css'
import { useSearchParams } from 'next/navigation'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useDispatch } from 'react-redux'
import { setCart, setFavorite, setIsAddedCart, setIsAddedFavorite } from '../../slices/userSlice'

const ProductDetail = () => {

  const [ product, setProduct] = useState<any>(null)
  const router = useSearchParams()
  const id = router.get('id')
  const dispatch = useDispatch();
  
  const getProduct = async () => {
    try {
      const response =  await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProduct(data);    
      console.log(data)
    }
    catch(err) {
      console.log("Error fetching product")
    }
    
  }     
  
  useEffect(() => {
    getProduct()
  },[id]);


  const addFavorite = (product: any) => {
    dispatch(setFavorite(product));
    dispatch(setIsAddedCart(true))
  }

  const addToCart = (product: any) => {
    dispatch(setCart(product));
    dispatch(setIsAddedFavorite(true));
  }

  return (
    <div className='productDetail-wrapper'>
        <div className='productDetail-container grid grid-cols-2 gap-3'>
            <div className='product-image-holder'>
                <div className='image-div'>
                    <img
                        src={product?.thumbnail}
                        className='product-image'
                        alt=''
                    />
                </div> 
                <div className='thumbs'>
                    { 
                      product?.images.map((item: any, i: any) => (
                        <div className='thumb-div' key={i}>
                            <img src={item} alt=""/>
                        </div>
                      ))
                    }
                    
                </div>               
            </div>
            <div className='details'>
                <h4>{product?.title}</h4>
                <div className='star-list'>                    
                    <Image src={'/icons/star-v.png'} width={18} height={18} alt="" />&nbsp;
                    <Image src={'/icons/star-v.png'} width={18} height={18} alt="" />&nbsp;
                    <Image src={'/icons/star-v.png'} width={18} height={18} alt="" />&nbsp;
                    <Image src={'/icons/star-v.png'} width={18} height={18} alt="" />&nbsp;
                    <Image src={'/icons/star-v.png'} width={18} height={18} alt="" />&nbsp;&nbsp;
                    <h6>10 Reviews</h6>
                </div>
                <h3 className='price'>{'$' + product?.price.toString().replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,")}</h3>
                <h6 className='avail'>Availability : <span>{product?.stock } In stock</span></h6>
                <hr/>
                <div className='circle-area'>
                    <div className='circle' style={{backgroundColor: "#23A6F0"}}></div>
                    <div className='circle' style={{backgroundColor: "#2DC071"}}></div>
                    <div className='circle' style={{backgroundColor: "#E77C40"}}></div>
                    <div className='circle' style={{backgroundColor: "#252B42"}}></div>
                </div>
                <div className='cart-area'>
                    <button>Select Options</button>
                    <div className='cart-div' onClick={() => addFavorite(product)}>  
                        <FavoriteBorderOutlinedIcon />                      
                    </div>
                    <div className='cart-div' onClick={() => addToCart(product)}>  
                        <ShoppingCartOutlinedIcon />                      
                    </div>
                    <div className='cart-div'>  
                        <VisibilityOutlinedIcon />                      
                    </div>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default ProductDetail