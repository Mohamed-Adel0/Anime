import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link ,NavLink } from 'react-router-dom';
import logo from "../Pictures/logo.png"
import { BsSearch } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import NavMenu from './NavMenu';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
const NavBar = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div className='pgcolor'>
      <Navbar expand="lg" className="bg-body-tertiary" data-aos="fade-right">
      <Container>
        <Link to="/"><img src={logo} alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">HomePage</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="123">Anime Details</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Anime Watching</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Blog Details</Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="123">Sign Up</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Something</Link></NavDropdown.Item>
              
            </NavDropdown>
            <NavLink to="Ourblog">Our Blog</NavLink>
            <NavLink to="Login">Contacts</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="icons">
          <Link to=""><BsSearch /> </Link>
          <Link to="Login"><FaUserLarge/></Link>
        </div>
      </Container>
    </Navbar>
    <NavMenu/>
    </div>
  );
}

export default NavBar;
