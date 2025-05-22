import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Footer from '../components/Footer'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../src/index.css'

const Navvbar = () => {
  return (
    <>
      <Navbar className='mt-2' data-bs-theme="light">
        <Container className='cnt' >
          <Nav className=" flex justify-between nv">
            <button className='nvbar-btn border-orange-400 border-1 rounded-5 pl-3 pr-3' ><Nav.Link className='nvbar-link text-white pl-3 pr-3'  href="#home">Home</Nav.Link></button>
            <button className='nvbar-btn border-orange-400 border-1 rounded-5 pl-3 pr-3'  ><Nav.Link className='nvbar-link text-white pl-3 pr-3'  href="#features">Skills</Nav.Link></button>
            <button className='nvbar-btn border-orange-400 border-1 rounded-5 pl-3 pr-3' ><Nav.Link className='nvbar-link text-white pl-3 pr-3'  href="#pricing">Proejcts</Nav.Link></button>
            <button className='nvbar-btn border-orange-400 border-1 rounded-5 pl-3 pr-3' ><Nav.Link className='nvbar-link text-white pl-3 pr-3'  href="#pricing">Contacts</Nav.Link></button>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Navvbar