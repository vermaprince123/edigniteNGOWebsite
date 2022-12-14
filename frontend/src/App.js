import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Routes,
  Route,
  Link, Navigate
} from 'react-router-dom';
import logo from './Images/ediLogo.png'
import Homepage from './Components/Homepage/homepage.js';
import Footer from './Components/Footer/footer.js';
import Places from './Components/Places/places.js';
import Team from './Components/Team/team.js';
import Contact from './Components/Contact/contact.js';
import Events from './Components/Events/events.js'; 
import TechnicalVideos from './Components/TechnicalVideos/technicalVideos';
import './App.css';
import Activities from './Components/Activities/activities.js';
import { Instagram, Facebook, Linkedin, Youtube, Envelope } from 'react-bootstrap-icons';


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
      <Navbar bg="warning" variant="dark" expand="lg" className="app-nav">
        <Container fluid>
          <Link className="ed_removeAnchorTagLine navbar-brand" to='/'>
            <img
              alt="Edignite Logo"
              src={logo}
              width="17"
              height="30"
              className="d-inline-block align-top"
            />
            { } Edignite NGO
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/'>Home</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/team'>Team Edignite</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/activities'>Our Activities</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/places'>Places We Go</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/events'>Our Major Events</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/technicalVideos'>Our Technical Videos</Link>
              <Link className="ed_removeAnchorTagLine nav-lnk nav-link" to='/contact'>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* linear-gradient(60deg, #ad00ff,#e40e0e) */}
      <div className="app-sm bg-warning">
        <a title="Mail Us" href="mailto:edignitengo@gmail.com?subject=Message to Edignite Team" target="_blank" className="cnt-sm-lnk"><Envelope size={15} /></a><br />
        <a title="Go to our Instagram Page" href="https://www.instagram.com/ed_ignite/" target="_blank"><Instagram size={15} /></a><br />
        <a title="Go to our LinkedIn Page" href="https://www.linkedin.com/company/edignite-ngo/" target="_blank"><Linkedin size={15} /></a><br />
        <a title="Go to out Facebook Page" href="https://www.facebook.com/socialindiagroup.in" target="_blank"><Facebook size={15} /></a><br />
        <a title="Go to our YouTube channel" href="https://www.youtube.com/channel/UCJWu4OJBlFmFPF4sQpD6JIg" target="_blank"><Youtube size={15} /></a>
      </div>

      <Routes>
        <Route exact path="/" element={<Homepage />} errorElement={<Homepage />}/>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/places" element={<Places />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact/*" element={<Contact />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/technicalVideos" element={<TechnicalVideos />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
