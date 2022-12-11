import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import './footer.css'
import logo from '../../Images/ediLogo.png'
import { ThreeDots } from 'react-bootstrap-icons'

function Footer() {
    return (
        <>
            <Container fluid className="ft-footer">
                <footer>
                    <Row>
                        <Col md={6} className="ft-nameimg">
                            {/* <div className="ft-img-text">
                            <br/>
                            <div className="footer-image">
                            <img src={logo} className="ft-img"/>
                            </div>
                            <div className="footer-text">
                            Edignite Educational and Charitable Trust 
                            </div>
                            </div> */}
                            <Row className="mt-2">
                                <Col md={3} className="text-center">
                                    <div className="footer-image">
                                        <img src={logo} className="ft-img" />
                                    </div>
                                </Col>
                                <Col md={9}>
                                    <div className="footer-text ft-img-text me-5">
                                        Edignite Educational and Charitable Trust
                                        <br />
                                        B-66, Aashish Row House, Variyav Road, Surat - 395005
                                        <br />
                                        <br />
                                        The NGO Darpan, NITI Aayog registered Trust
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>About Us</b>
                            <ul>
                                <li><Link title="Find about Edignite NGO" to="/">About Edignite</Link></li>
                                <li><Link title="Find out the places where we teach" to="/places">Places we go</Link></li>
                                <li><Link title="Look at the fun filled activities we have" to="activities">Our Activities</Link></li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>Contact Us</b>
                            <ul>
                                <li><Link title="Get contact detials of Edignite" to="/contact">Contact Details</Link></li>
                                <li><a title="Mail Us" href="mailto:edignitengo@gmail.com?subject=Message to Edignite Team" target="_blank" className="cnt-sm-lnk">Mail Us</a></li>
                                <li><a title="Go to our Instagram Page" href="https://www.instagram.com/ed_ignite/" target="_blank">Instagram</a></li>
                                <li><a title="Go to our LinkedIn Page" href="https://www.linkedin.com/company/edignite-ngo/" target="_blank">LinkedIn</a></li>
                                <li><a title="Go to out Facebook Page" href="https://www.facebook.com/socialindiagroup.in" target="_blank">Facebook</a></li>
                                <li><a title="Go to our YouTube channel" href="https://www.youtube.com/channel/UCJWu4OJBlFmFPF4sQpD6JIg" target="_blank">YouTube</a></li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            <b>Join/ Help Us</b>
                            <ul>
                                <li><a title="Fill out the Volunteer Joining Form" href="https://bit.ly/Edignite_Joining_Form" target="_blank">Volunteer at Edignite</a></li>
                                <li><a title="Fill out the form for an Internship at Edignite" href="https://bit.ly/Edignite_Internship" target="_blank">Get Interned at Edignite</a></li>
                                <li><a title="Fill out the form to Help Us in any manner" href="https://surveyheart.com/form/631afede7f5e8e151e450799" target="_blank">Help the organization</a></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Footer;