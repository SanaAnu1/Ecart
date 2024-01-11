import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, navigateToNextPage, navigateToPrevPage } from '../Redux/Slices/productSlice';
import {  Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  const {allProducts,loading,error,productPerPage,currentPage} = useSelector(state=>state.productReducer)

  //pagination
  const totalPages= Math.ceil(allProducts?.length/productPerPage)
  const lastProductIndex= currentPage*productPerPage
  const firstProductIndex=lastProductIndex-productPerPage
  const visibleProductsCard=allProducts?.slice(firstProductIndex,lastProductIndex)
const handlePrevPage=()=>{
  if(currentPage!=1){
    dispatch(navigateToPrevPage())
  }
}
const handleNextPage=()=>{
  if(currentPage!=totalPages){
    dispatch(navigateToNextPage())
  }
}

  const dispatch = useDispatch()
  console.log(allProducts,loading,error);
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
      <Header insideHome></Header>
  
      <div style={{paddingTop:'100px'}}>
        {
         loading?<div className='mt-5 text-center'><Spinner className='me-2' animation="grow" variant="primary" />Loading...</div>:
      <Row className='m-5'>
        {allProducts?.length>0?visibleProductsCard?.map((product,index)=>( 
        <Col key={index} className='mb-3' sm={12} md={6} lg={4} xl={4}>
           <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
                 <Card.Body>
                   <Card.Title>{product?.title.slice(0,20)}...</Card.Title>
                   <Link to={`/view/${product?.id}`} className='btn btn-link' variant="primary">View More</Link>
                 </Card.Body>
           </Card>
        </Col>)):
        <div className='fw-bolder text-danger text-center my-5'><h1>Product not found</h1></div>
        }
      </Row>
      }
      <div className="d-flex justify-content-center mt-5">
        <span style={{cursor:'pointer'}} onClick={handlePrevPage}> <i className='fa-solid fa-backward'></i> </span>
        <span className='fw-bolder mx-2'> {currentPage} of {totalPages} </span>
        <span style={{cursor:'pointer'}} onClick={handleNextPage}> <i className='fa-solid fa-forward'></i> </span>

      </div>
      </div>
    </>
  )
}

export default Home