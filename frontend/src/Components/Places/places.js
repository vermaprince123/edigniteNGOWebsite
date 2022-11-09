import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import nilam from './Images/nilam.jpg';
import placeList from './placeList';
import './places.css';



function Places() {
    const placeLst = useState(placeList);
    return (
        <>
            <Container className="text-center mt-3">
                <h4 className="pl-mn-hdg">We had started our journey with a single center in Surat, but with a dedicated team of volunteers and blessings of children, we now have around 15 centers and 250+ kids....Here are some of our centers !!!</h4>
                <hr />
                <Row>
                    {placeLst[0].map(
                        (place) => {
                            return(
                                <Col lg={4} md={6} sm={12} className="pl-sp" key = {place.id}>
                                <img className="pl-img" src={place.srcImg} alt= {place.pName}/>
                                <div className="pl-sp-nm text-center">
                                    {place.pName}
                                </div>
                            </Col> 
                            )
                        }
                    )}
                </Row>
            </Container>
        </>
    )
}

export default Places;