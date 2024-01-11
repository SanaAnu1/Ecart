import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { decQuanity, emptyCart, incQuanity, removeCartItem } from '../Redux/Slices/cartSlice'
import Header from '../components/Header'
import { Table } from 'react-bootstrap'

function Cart() {
  const navigate=useNavigate()
  const cart= useSelector(state=>state.cartReducer)
  const [totalCartAmount,setTotalCartAmount]=useState(0)
  const handleCheckout=()=> {
    alert("order placed successfully... Thank you for shopping with us...")
    dispatch(emptyCart())
    navigate('/')
  }
  useEffect(()=>{ 
    if(cart?.length>0){
    setTotalCartAmount(cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
  }else{
    setTotalCartAmount(0)
  }},[cart])
const dispatch=useDispatch()

//quantity --
const handleDecrement=(product)=>{
  if(product.quantity==1){
   dispatch(removeCartItem(product.id))
  }
  else{
    dispatch(decQuanity(product))
  }
}
 
  return (
    <>
    <Header></Header>
      <div  style={{paddingTop:'100px'}}>
          {
            cart?.length>0?<div className='container'>
                <h1>Cart Summary</h1>
                <div className='row'>
                  <div className='col-lg-8'>
                    <Table className='table' responsive='sm'>
                      <thead>
                              <tr>
                                <td>#</td>
                                <td>Product</td>
                                <td>Image</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Delete</td>
                              </tr>
                      </thead>
                      <tbody>
                        <tr></tr>
                        {
                          cart?.map((product,index)=>(
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{product?.title}</td>
                              <td><img width={'60px'} height={"60px"} src={product?.thumbnail} alt="no image" /></td>
                              <td>
                                <div className='d-flex align-items-center' >
                                  <span className='fw-bolder' style={{cursor:'pointer'}} onClick={()=>handleDecrement(product)}>-</span>
                                  <input style={{width:"50px"}} type="text" className='form-control text-center' value={product?.quantity} readOnly />
                                  <span className='fw-bolder' style={{cursor:'pointer'}} onClick={()=>{dispatch(incQuanity(product))}}>+</span>
                                </div>
                              </td>
                              <td>$ {product?.totalPrice}</td>
                              <td><button className='btn btn-link' onClick={()=>dispatch(removeCartItem(product?.id))} ><i  className="fa-solid fa-trash fa-lg" style={{color:"#a70101"}}></i></button></td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                    <div className='float-end my-3 '>
                      <button className='btn btn-danger me-3' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
                      <Link to={'/'} className='btn btn-primary'>Shop More</Link>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='shadow border rounded p-4'>
                      <h5>Total products: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
                      <h4>Total Amount: <span className='fw-bolder text-danger'>$ {totalCartAmount}</span></h4>
                      <hr />
                      <div className='d-grid mt-4'><button className='btn btn-success' onClick={()=>handleCheckout()}>CheckOut</button></div>
                    </div>
                  </div>
                </div>
            </div>:
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
              <img height={'300px'} className='img-fluid' src="https://i.postimg.cc/mZHXM0vR/empty-cart-2130356-1800917.webp" alt="" />
              <h2>"your cart is empty"</h2>
            </div>
          }
      </div>
    </>
  )
}

export default Cart