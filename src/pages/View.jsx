import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../components/Header';

function View() {
  const {id}= useParams()
  console.log(id);

  
const dispatch = useDispatch()

  const [product,setProduct]=useState({})
  const wishlist=useSelector(state=>state.wishlistReducer)
  useEffect(()=>{
    const allProducts=JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  // console.log(wishlist);
  
  const handleWishlist= (product)=>{
    const existingproduct= wishlist.find(item=>item.id==product.id)
    if(existingproduct){
      alert("Product already in your wishlist")
    }
    else{
        dispatch(addToWishlist(product))
    }
  }
  return (
    <>
    <Header></Header>
      <div  style={{paddingTop:'100px'}}>
        <Row className='w-100 p-3 align-items-center'>
            <Col lg={6} md={6} sm={12} className='' >
              <img height={'400px'}  width={'100%'} src={product?.thumbnail} alt="" />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1>{product?.title}</h1>
              <h4>$ {product?.price}</h4>
              <p>{product?.description}</p>
              <p><b>Rating: {product?.rating}</b></p>
              <div><button onClick={()=>handleWishlist(product)}  className='btn btn-outline-dark me-3 mt-3'> <i className='fa-solid fa-heart text-danger'></i> Add to Wishlist </button>
              <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-dark mt-3'><i className='fa-solid fa-cart-plus text-success'></i> Add to Cart </button></div>
  
            </Col>
        </Row>
      </div>
    </>
  )
}

export default View