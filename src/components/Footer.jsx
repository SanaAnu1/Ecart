import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-info text-light mt-5 p-4 py-5' style={{width:"100%"}}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div style={{width:'400px'}} className='website'>
          <h4><i style={{height:'25px'}} className='fa-solid fa-truck-fast me-2'></i><b>Daily Cart</b></h4>
          <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
          <h6>Code licensed Luminar, docs CC BY 3.0.</h6>
          <p>Currently v1.0.0</p>
        </div>
        <div className='links d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
            <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
        </div>
        <div className='guides d-flex flex-column'>
            <h4>Guides</h4>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column flex-wrap'>
            <h4>Contact Us</h4>
            <div className='d-flex'>
                  <input type="text" className='form-control' placeholder='Enter your mail'/>
                  <button className='btn btn-warning ms-3'><i className='fa-solid fa-arrow-right fa-beat'></i></button>
            </div>
            <div className='icons mt-3 d-flex justify-content-between fs-5'>
                  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-linkedin-in'></i></Link>
                  <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-facebook'></i></Link>
                  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-twitter'></i></Link>
                  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-tiktok'></i></Link>
                  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-envelope'></i></Link>
                  <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-github'></i></Link>

            </div>
        </div>
      </div>
      <div className='pt-3'>Copyright @ 2024 Daily Cart. Built with React</div>
    </div>
  )
}

export default Footer