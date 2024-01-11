import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchByProduct } from '../Redux/Slices/productSlice';


function Header({insideHome}) {
  const wishlist=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()

  return (
       <div>
            <Navbar style={{zIndex:1}} expand="lg" className="bg-info w-100 position-fixed top-0">
          <Container>
            <Navbar.Brand >
              <Link to={'/'} style={{textDecoration:'none', color:'white'}} className='fw-border'> <i class="fa-solid fa-truck-fast fa-lg me-2" style={{color:' #fafcff'}}></i><b>Daily Cart</b></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {insideHome&&<Nav.Link ><input onChange={e=>dispatch(searchByProduct(e.target.value.toLowerCase()))} type="text" placeholder='search products here!!' className='rounded border px-2 py-1' /></Nav.Link>}                <Nav.Link ><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> <i className='fa-solid fa-heart text-danger'></i> Wishlist <Badge className='bg-light text-dark'>{wishlist?.length}</Badge></Link></Nav.Link>
                <Nav.Link ><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}> <i className='fa-solid fa-cart-plus text-success'></i> Cart <Badge className='bg-light text-dark'>{cart?.length}</Badge></Link></Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       </div>
  )
}

export default Header