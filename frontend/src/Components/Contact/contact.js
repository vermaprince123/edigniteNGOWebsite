import React from 'react';
import { Container } from 'react-bootstrap';
import { Instagram, Facebook, Linkedin, Youtube, Envelope } from 'react-bootstrap-icons'
import './contact.css';


function Contact() {
    return (
        <>
            <h3 className="text-center text-danger px-2 mt-2 cnt-int">Thank you for your interest in enlightening the lives of many !!<br />
                Below are the contact details of our organization. Below are the contact details from where you can reach us...
            </h3>
            <Container>
                <div className="text-center">
                    <div className="cnt-dt my-5 p-3">
                        <address><h4>Edignite Educational And Charitable Trust</h4>
                            B-66 Ashish Row House, Variyav Road, Surat <br />
                            <b>Contact Number</b>:- +91 7096277820   <br />
                            <b>Email</b>:- edignitengo@gmail.com <br /></address>
                        <a title="Mail Us" href="mailto:edignitengo@gmail.com?subject=Message to Edignite Team" target="_blank" className="cnt-sm-lnk"><Envelope size={15} /> - Edignite NGO</a> <br />
                        <a title="Go to our Instagram Page" href="https://www.instagram.com/ed_ignite/" target="_blank" className="cnt-sm-lnk"><Instagram size={15} /> - ed_ignite</a> <br />
                        <a title="Go to our LinkedIn Page" href="https://www.linkedin.com/company/edignite-ngo/" target="_blank" className="cnt-sm-lnk"><Linkedin size={15} /> - Edignite NGO</a> <br />
                        <a title="Go to out Facebook Page" href="https://www.facebook.com/socialindiagroup.in" target="_blank" className="cnt-sm-lnk"><Facebook size={15} /> - Edignite NGO</a>  <br />
                        <a title="Go to our YouTube channel" href="https://www.youtube.com/channel/UCJWu4OJBlFmFPF4sQpD6JIg" target="_blank" className="cnt-sm-lnk"><Youtube size={15} /> - Edignite NGO</a> <br />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact;