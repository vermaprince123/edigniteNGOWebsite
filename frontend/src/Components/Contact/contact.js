import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Routes, Route, Link} from 'react-router-dom';
import ContForm from './contForm'
import HelpForm from './helpForm'
import VolForm from './volForm'

function Contact(){
    return(
        <>
        <h2 className="text-center text-danger">Thank you for your interest in enlightening the lives of many !!!</h2>
        <Container>
        <Row>
            <Col md={4}>
                <Link to="/contact/help" className="btn btn-danger"> Click Here to Help Us</Link>
            </Col>
            <Col md={4}>
            <Link to="/contact/volunteer" className="btn btn-danger"> Click Here to Volunteer With Us</Link>
            </Col>
            <Col md={4}>
            <Link to="/contact" className="btn btn-danger"> Click Here to Contact/ Collaborate</Link>
            </Col>
        </Row>
        </Container>

        <Routes>
        <Route path="/" element={<ContForm />}/>
            <Route path="help/" element={<HelpForm />}/>
            <Route path="volunteer/" element = {<VolForm />}/>
        </Routes>
        
        
        
        </>
    )
}

export default Contact;