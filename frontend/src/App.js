import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
import './App.css';
import Activities from './Components/Activities/activities';
import { Instagram, Facebook, Linkedin } from 'react-bootstrap-icons';


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
              <Link className="ed_removeAnchorTagLine nav-link" to='/activities'>Our Activities</Link>
              <Link className="ed_removeAnchorTagLine nav-link" to='/places'>Places We Go</Link>
              <Link className="ed_removeAnchorTagLine nav-link" to='/contact'>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="app-sm bg-warning">
        <a href="https://www.instagram.com/ed_ignite/"><Instagram size={15}/></a><br />
        <a href="https://www.facebook.com/socialindiagroup.in"><Facebook size={15}/></a><br />
        <a href="https://www.linkedin.com/company/edignite-ngo/"><Linkedin size={15}/></a>
      </div>

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/places" element={<Places />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact/*" element={<Contact />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/activities" element={<Activities />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;