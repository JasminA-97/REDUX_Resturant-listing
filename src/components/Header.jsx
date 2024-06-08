import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/resturantlogo.png'
import { useDispatch } from 'react-redux'
import { searchResturant } from '../redux/resturantSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <> 
    <Navbar expand="lg" className="bg-dark w-100 position-fixed top-0" style={{zIndex:'10'}}>
      <Container>
        <Navbar.Brand><Link className='fw-bolder fs-1' style={{textDecoration:'none',color:'orange', fontFamily: "Sail"}} to={'/'}><img width={'50px'} height={'50px'} src={logo}></img>&nbsp;Resturant</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
             insideHome &&
              <Nav.Link>
                <div className='d-flex flex-wrap align-items-center bg-white rounded-4 p-1 border'>  <i className="fa-solid fa-magnifying-glass ps-2 pe-1"></i> <input onChange={e=>dispatch(searchResturant(e.target.value.toLocaleLowerCase()))} type="text" style={{width:'300px',border:'none'}} className='search rounded-4 fs-5 ps-2'/></div>
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header