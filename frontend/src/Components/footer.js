//Librearies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//CSS
import './footer.css'

//Images

function Footer() {
    return (
        <>
            <Container>
                <footer>
                    <Row>
                        <Col md={6}>
                            Edignite Educational and Charitable Trust
                        </Col>
                        <Col md={2}>
                            About Us
                        </Col>
                        <Col md={2}>
                            Contact
                        </Col>
                        <Col md={2}>
                            Activities
                        </Col>
                    </Row>
                </footer>
            </Container>
        </>
    )
}

export default Footer;