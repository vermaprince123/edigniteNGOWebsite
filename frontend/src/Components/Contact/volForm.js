import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './contForm.css';

function VolForm() {
    return (
        <>
            <Container>
                <Row className="cnt-fm-cont mx-5 my-5 p-2">
                        <Form>
                            <Row>
                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="name" placeholder="Your Name Here" />
                            </Form.Group>
                            </Col>

                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Email Address" />
                            </Form.Group>
                            </Col>

                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicContact">
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control type="number" placeholder="Contact Number" />
                            </Form.Group>
                            </Col>

                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicProf">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control type="text" placeholder="Your Profession Here" />
                            </Form.Group>
                            </Col>

                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicWork">
                                <Form.Label>Place of Work</Form.Label>
                                <Form.Control type="text" placeholder="School/ University name if student" />
                            </Form.Group>
                            </Col>

                            <Col md={4}>
                            <Form.Group className="mb-3" controlId="formBasicProf">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Year/std. if student" />
                            </Form.Group>
                            </Col>

                            <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicProf">
                                <Form.Label>Your Current Address</Form.Label>
                                <Form.Control type="text" placeholder="City, State" />
                            </Form.Group>
                            </Col>

                            <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicProf">
                                <Form.Label>Your Permanant Address</Form.Label>
                                <Form.Control type="text" placeholder="City, State" />
                            </Form.Group>
                            </Col>

                            <Col md={6}>
                            <Form.Label>How do you want to Help Us?</Form.Label>
                            
                            </Col>

                            <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicWhyJoinUs">
                                <Form.Label>Why do You want to Join Us?</Form.Label>
                                <Form.Control 
                                as="textarea" rows={3} placeholder="Please type in your answer here."/>
                            </Form.Group>
                            </Col>

                            <Button variant="warning" type="submit" className="text-light">
                                Submit
                            </Button>
                            </Row>
                        </Form>
                </Row>
            </Container>
        </>
    );
}

export default VolForm;