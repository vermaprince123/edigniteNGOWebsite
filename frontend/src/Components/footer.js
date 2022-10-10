//Librearies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//CSS
import './footer.css'

//Images

function Footer() {
    return (
        <>
            <Container fluid className="ft-footer">
                <footer>
                    <Row>
                        <Col md={6} className="ft-nameimg">
                            Edignite Educational and Charitable Trust
                        </Col>
                        <Col md={2} className="ft-col">
                            About Us
                            <ul>
                                <li>About Edignite</li>
                                <li>Places we go</li>
                                <li>School Tie Up</li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            Contact
                            <ul>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                                <li>Facebook</li>
                            </ul>
                        </Col>
                        <Col md={2} className="ft-col">
                            Activities
                            <ul>
                                <li>Teaching</li>
                                <li>Celebrations</li>
                                <li>Seminars and Workshops</li>
                            </ul>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Footer;