import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Instagram, Facebook, Linkedin, Youtube } from 'react-bootstrap-icons'
import './contact.css';


function Contact(){
    return(
        <>
        <h2 className="text-center text-danger">Thank you for your interest in enlightening the lives of many !!<br />
        Below are the contact details of our organization...
        </h2>
        <Container>
            <div className="text-center">
                <div className="cnt-dt my-5 p-3">
                    <h4>Office Address</h4>
                    B-66 Ashish Row House, Variyav Road, Surat <br/>
                    <b>Contact Number</b>: -+91 7096277820   <br/>     
                    <b>Email</b>:- edignitengo@gmail.com <br/>

                    <Instagram size={15} /> - ed_ignite <br/>
                    <Facebook size={15} /> - Edignite NGO <br/>
                    <Linkedin size={15} /> - Edignite NGO  <br/>   
                    <Youtube size={15} /> - Edignite NGO <br/>   

                </div>
            </div>
        </Container>
        
        </>
    )
}

export default Contact;