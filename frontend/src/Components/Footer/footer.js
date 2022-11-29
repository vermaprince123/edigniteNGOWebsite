import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './footer.css'
import logo from '../../Images/ediLogo.png'

function Footer() {
    return (
        <>
            <Container fluid className="ft-footer">
                <footer>
                    <Row>
                        <Col md={6} className="ft-nameimg">
                            Edignite Educational and Charitable Trust <br/>
                            <img src={logo} className="ft-img"/>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>About Us</b>
                            <ul>
                                <li><Link to="/">About Edignite</Link></li>
                                <li><Link to="/places">Places we go</Link></li>
                                <li><Link to="activities">Our Activities</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>Contact Us</b>
                            <ul>
                                <li><Link to="/contact">Contact Details</Link></li>
                                <li><a href="mailto:edignitengo@gmail.com?subject=Message to Edignite Team"  target="_blank"className="cnt-sm-lnk">Mail Us</a></li>
                                <li><a href="https://www.instagram.com/ed_ignite/" target="_blank">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/company/edignite-ngo/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.facebook.com/socialindiagroup.in" target="_blank">Facebook</a></li>
                                <li><a href="https://www.youtube.com/channel/UCJWu4OJBlFmFPF4sQpD6JIg" target="_blank">YouTube</a></li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>Join/ Help Us</b>
                            <ul>
                                <li><a href="https://bit.ly/Edignite_Joining_Form" target="_blank">Volunteer at Edignite</a></li>
                                <li><a href="https://bit.ly/Edignite_Internship" target="_blank">Get Interned at Edignite</a></li>
                                <li><a href="https://surveyheart.com/form/631afede7f5e8e151e450799" target="_blank">Help the organization</a></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Footer;