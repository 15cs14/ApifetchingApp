import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>

<Navbar className=" bg-dark">
        <Container>
          <Navbar.Brand className='text-light' href="#home"style={{textDecoration:'none,color:white'}}>
        <i className="fa-solid fa-cart-shopping fa-fade pe-3 text-light"></i>
           <b> SHOP N SHOP</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header