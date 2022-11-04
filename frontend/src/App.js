import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './Images/ediLogo.png'
import Homepage from './Components/Homepage/homepage.js';
import Footer from './Components/Footer/footer.js';
import Places from './Components/Places/places.js';
import Team from './Components/Team/team.js';
import Contact from './Components/Contact/contact.js';
import  './App.css';


/**
 * @creater "prince verma"
 * @category webpage of Edignite NGO
 * @param {no parms}
 * @returns Entire webpage component
 * @example
 */
function App() {
  return (
    <>
      <Navbar bg="warning" variant="dark" expand="lg">
        <Container>
        <Link className="ed_removeAnchorTagLine navbar-brand" to='/'>
            <img
              alt="Edignite Logo"
              src={logo}
              width="17"
              height="30"
              className="d-inline-block align-top"
            />
            Edignite NGO
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="ed_removeAnchorTagLine nav-link" to='/home'>Home</Link>
            <Link className="ed_removeAnchorTagLine nav-link" to='/team'>Team Edignite</Link>
            <Link className="ed_removeAnchorTagLine nav-link" to='/link'>Our Activities</Link>
            <Link className="ed_removeAnchorTagLine nav-link" to='/places'>Places We Go</Link>
            <Link className="ed_removeAnchorTagLine nav-link" to='/contact'>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

  <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route  exact path="/places" element={<Places />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/home" element={<div>Home</div>}/>
       <Route exact path="/link" element={<div>Link</div>}/>

  </Routes>

      <Footer />
    </>
  );
}

export default App;
