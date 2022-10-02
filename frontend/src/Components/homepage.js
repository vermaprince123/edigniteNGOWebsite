
//Libraries
import React from "react";
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import { Instagram } from 'react-bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css';

//Images
import donate from '../Images/donate.png';
import volunteer from '../Images/volunteer.png';
import collaborate from '../Images/collaborate.png';

function Homepage() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={donate}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Taught over 300 kids till date</h3>
                        <Button variant="danger">Click here to help us</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={volunteer}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Active over 15 centres in Surat, Haryana, Rajkot, Rajasthan</h3>
                        <Button variant="danger">Click here to volunteer with us.</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={collaborate}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Awareness Sessions, Workshops, Celebrations, round the year</h3>
                        <Button variant="danger">
                            Click here to collaborate with us.
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <Container>
                <Row>
                    <Col md={8} sm={12}>
                        <h2>About Edignite</h2>
                        <p>We are the Students of the NIT Surat and with so much love, dreams, hopes &ambitions we have opened our own Edignite NGO for the upliftment of education of the Underprivileged kids, for those who have not seen the school, who are not able to afford the education and are not getting the proper guidance for any preparation. In this way, we are striving to achieve our honorable Dr. A.P.J. Abdul Kalam Sir's mission of Educated India. Till now, we have Guided/Are guiding 500+ underprivileged and needy kids where some of them got selected for scholarships.<br/>
                        We are a registered with Govt. Of India, Surat Charity Commissioner at Sessions Court and at NGO Darpan, NITI Aayog.</p>
                    </Col>
                    <Col md={4} sm={6}>

                    </Col>
                </Row>
            </Container>
            
        </>
    );
}

export default Homepage;