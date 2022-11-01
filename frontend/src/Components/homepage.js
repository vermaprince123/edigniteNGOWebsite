import React from "react";
import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { PencilSquare, Building, PersonHearts, Box2Heart, CardChecklist, FileEarmarkEasel} from 'react-bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './homepage.css'
import donate from '../Images/donate.png';
import volunteer from '../Images/volunteer.png';
import collaborate from '../Images/collaborate.png';
import about from '../Images/hpabout.png';
import sgphoto from '../Images/sgphoto.jpg';

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
                        <Button variant="danger" className="font-weight-bold">
                            Click here to collaborate with us.
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="my-4 hp-abt">
                <Row>
                    <Col md={8} sm={12}>
                        <h2 className="hp-abt-title">About Edignite</h2>
                        <p className="hp-abt-desc px-2">We are the Students of the NIT Surat and with so much love, dreams, hopes &ambitions we have opened our own Edignite NGO for the upliftment of education of the Underprivileged kids, for those who have not seen the school, who are not able to afford the education and are not getting the proper guidance for any preparation. In this way, we are striving to achieve our honorable Dr. A.P.J. Abdul Kalam Sir's mission of Educated India. Till now, we have Guided/Are guiding 500+ underprivileged and needy kids where some of them got selected for scholarships.<br />
                            We are a registered with Govt. Of India, Surat Charity Commissioner at Sessions Court and at NGO Darpan, NITI Aayog.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <img
                            className="d-inline-block w-75"
                            src={about}
                            alt="Our Volunteers and Kids" />
                    </Col>
                </Row>
            </Container>
            <Container className="hp-ach" fluid>
                <Container className="my-3 py-2">
                    <h2 className="text-center hp-ach-title">Some of the things we are really proud of</h2>
                    <Row className="mx-auto">
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 hp-ach-cd text-center">
                                <Card.Body>
                                    <Card.Title className="text-center"><PencilSquare size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Guided/ Guiding over 450 kids around 15 centres in Surat, Rajkot, Haryana, Rajasthan.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 text-center">
                                <Card.Body>
                                    <Card.Title className="text-center"><Building size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Registered with Surat Charity Commissioner, Govt. of India at Sessions Court Surat as well as at NGO Darpan, NITI Aayog.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 hp-ach-cd text-center">
                                <Card.Body>
                                    <Card.Title className="text-center"><PersonHearts size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Health, Awareness, Hygiene sessions are/ being conducted round the year (even during lockdown).
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 hp-ach-cd">
                                <Card.Body>
                                    <Card.Title className="text-center"><Box2Heart size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Distribution of Stationary, Food, Clothes, Sweater, Footwear, Cycle, etc. as well as successful execution of Contribution Bag Programme.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 hp-ach-cd">
                                <Card.Body>
                                    <Card.Title className="text-center"><CardChecklist size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Preparing over 100 kids of Government Schools for Competitive exams with some of them getting selected for Scholarships.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <Card style={{ width: '18rem', backgroundColor: 'rgb(144, 58, 253)', color: 'white' }} className="border-0 hp-ach-cd">
                                <Card.Body>
                                    <Card.Title className="text-center"><FileEarmarkEasel size={96} /></Card.Title>
                                    <br />
                                    <Card.Text className="text-center">
                                        Guided and Trained many Youngters through different workshops, Training Programmes, as well as Internships.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="my-5 pt-2">
                <h2 className="hp-rew-title text-center">From our Well Wishers....</h2>
                <Carousel interval={7000} style={{height: '15rem'}} className="my-2">
                    <Carousel.Item className="px-5">
                        <Container className="hp-rew-cl">
                        <Row>
                            <Col md={3} className="hp-rew-cl-img">
                                <img src={sgphoto} className="rounded-circle" align="center" alt="MKR Sir"/>
                                <p className="text-center">Prof. Shilpi Gupta, <br />ECE Dept, SVNIT</p>
                            </Col>
                            <Col md={9}>
                                <p className="text-left fs-3 hp-rew-cl-txt">
                                    Edignite is doing a very good work. This group's work is very good. Guided and Trained many Youngters through different workshops, Training Programmes, as well as Internships
                                </p>
                            </Col>
                        </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="px-5">
                        <Container className="hp-rew-cl">
                        <Row>
                            <Col md={3} className="hp-rew-cl-img">
                                <img src={sgphoto} className="rounded-circle" align="center" alt="Shilpi Ma'am"/>
                                <p className="text-center">Prof. Shilpi Gupta, <br />ECE Dept, SVNIT</p>
                            </Col>
                            <Col md={9}>
                                <p className="text-left fs-3 hp-rew-cl-txt">
                                    Edignite is doing a very good work. This group's work is very good. Guided and Trained many Youngters through different workshops, Training Programmes, as well as Internships
                                </p>
                            </Col>
                        </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="px-5">
                        <Container className="hp-rew-cl">
                        <Row>
                            <Col md={3} className="hp-rew-cl-img">
                                <img src={sgphoto} className="rounded-circle" align="center" alt="Ajay Makwana Sir"/>
                                <p className="text-center">Prof. Shilpi Gupta, <br />ECE Dept, SVNIT</p>
                            </Col>
                            <Col md={9}>
                                <p className="text-left fs-3 hp-rew-cl-txt">
                                    Edignite is doing a very good work. This group's work is very good. Guided and Trained many Youngters through different workshops, Training Programmes, as well as Internships
                                </p>
                            </Col>
                        </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}

export default Homepage;