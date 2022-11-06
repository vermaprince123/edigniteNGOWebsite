import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import nilam from './Images/nilam.jpg';
import './places.css';



function Places() {
    return (
        <>
            <Container className="text-center mt-3">
                <h4 className="pl-mn-hdg">We had started our journey with a single center in Surat, but with a dedicated team of volunteers and blessings of children, we now have around 15 centers and 250+ kids....Here are some of our centers !!!</h4>
                <hr />
                <Row>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Nilam Society" />
                        <div className="pl-sp-nm text-center">
                            Nilam Society
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Citylights" />
                        <div className="pl-sp-nm text-center">
                            Citylights
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Umra Gam" />
                        <div className="pl-sp-nm text-center">
                            Umra Gam
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Umra Gam BRTS" />
                        <div className="pl-sp-nm text-center">
                            Umra Gam BRTS
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Floral Garden" />
                        <div className="pl-sp-nm text-center">
                            Floral Garden
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Adajan Colony" />
                        <div className="pl-sp-nm text-center">
                            Adajan Colony
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Sarojini Naidu Garden" />
                        <div className="pl-sp-nm text-center">
                            Sarojini Naidu Garden
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="E Quarters" />
                        <div className="pl-sp-nm text-center">
                            E Quarters
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Kargil Chowk" />
                        <div className="pl-sp-nm text-center">
                            Kargil Chowk
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Gurgaon" />
                        <div className="pl-sp-nm text-center">
                            Gurgaon
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Palwal" />
                        <div className="pl-sp-nm text-center">
                            Palwal
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Gymkhana" />
                        <div className="pl-sp-nm text-center">
                            Gymkhana
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Astron Chowk" />
                        <div className="pl-sp-nm text-center">
                            Astron Chowk
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Rajasthan" />
                        <div className="pl-sp-nm text-center">
                            Rajasthan
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="pl-sp">
                        <img className="pl-img" src={nilam} alt="Gurgaon 2" />
                        <div className="pl-sp-nm text-center">
                            Gurgaon 2
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Places;