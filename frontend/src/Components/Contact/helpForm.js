import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './contForm.css';
import contFormImg from './Images/contFormImg.png'

function HelpForm() {
    return (
        <>
            <Container>
                <Row className="cnt-fm-cont mx-5 my-5 p-2">
                    <Col md={6} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name Here" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicContact">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control type="number" placeholder="Contact Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>How Do you want to help us?</Form.Label>
                                <Form.Select>
                                    <option>Donation - Except Money</option>
                                    <option>Internship/ Volunteering</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="warning" type="submit" className="text-light">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6} sm={0}>
                        <img className="cnt-fm-img" 
                        src = {contFormImg}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HelpForm;