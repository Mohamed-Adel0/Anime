import 'bootstrap/dist/css/bootstrap.min.css';
import Css from "./NavMenu.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link  } from 'react-router-dom';
import { useState } from 'react';

// 3awz a3ml event eny awel ma ados 3alla el menu yabda2 yzaharly el klam 

const NavMenu = () => {

  const [displayed , setDisplayed] = useState(false)
  const changeClass = () =>{
    setDisplayed(!displayed)
  }
    return (
        <div className={Css.pgcolor}>
    <Navbar expand="lg" className="bg-body-tertiary" div data-aos="fade-left">
      <Container className={Css.parent}>
        <Navbar.Toggle title="Categories" aria-controls="basic-navbar-nav" className={Css.menu} onClick={()=> changeClass()} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={Css.container } style={{display : displayed ? "flex" : 'none'}}>
            < Link to="/">HomePage</ Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="123">Anime Details</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Anime Watching</Link> </NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Blog Details</Link> </NavDropdown.Item>
              <NavDropdown.Item > <Link to="123">Sign Up</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="123">Something</Link></NavDropdown.Item>
              
            </NavDropdown>
            < Link to="3">Our Blog</ Link>
            < Link to="">Contacts</ Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>

        </div>
    );
}

export default NavMenu;
