import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import demo from './Images/demo.JPG';
import './activities.css'

function Activities(){
    return(
        <>
        <h4 className="text-center text-danger my-4">Apart from academic teaching there are a lot of Activities and Events that we conduct for developing chindren and developing them in all areas of life...</h4>
        <hr />
        <Container className="text-center my-1">
            <div className="act-sa my-3">
                <h5>Distributions</h5>
                <div className="act-sa-det mb-3">We try to meet overall needs of the children by conducting several distribution drives like Stationery, Food, Cloth, Footwear, Bottle, Sweater, etc.</div>
                <Row>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Cloth Distribution" />
                        <span className="act-sa-desc">Cloth Distribution</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Food Distribution" />
                        <span className="act-sa-desc">Food Distribution</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Bottle Distribution" />
                        <span className="act-sa-desc">Bottle Distribution</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Cycle Distribution" />
                        <span className="act-sa-desc">Cycle Distribution</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Sweater Distribution" />
                        <span className="act-sa-desc">Sweater Distribution</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Stationery Distribution" />
                        <span className="act-sa-desc">Stationery Distribution</span>
                    </Col>
                </Row>
            </div>
            <div className="act-sa my-3">
                <h5>Celebrations</h5>
                <div className="act-sa-det mb-3">We celebrate several festivals with the kids, and teach them their significance. Along with festivals several people including volunteers celebrate their birthdays with these little kids</div>
                <Row>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Birthday Celebration" />
                        <span className="act-sa-desc">Birthday Celebration</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Diwali Celebration" />
                        <span className="act-sa-desc">Diwali Celebration</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Student Day Celebration" />
                        <span className="act-sa-desc">Student Day Celebration</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Janmastami Celebration" />
                        <span className="act-sa-desc">Janmastami Celebration</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Ganesh Chaturthi" />
                        <span className="act-sa-desc">Ganesh Chaturthi</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Rakshabandhan Celebration" />
                        <span className="act-sa-desc">Rakshabandhan Celebration</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Independence Day" />
                        <span className="act-sa-desc">Independence Day</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Republic Day" />
                        <span className="act-sa-desc">Republic Day</span>
                    </Col>
                </Row>
            </div>
            <div className="act-sa my-3">
                <h5>Visits and Competitions</h5>
                <div className="act-sa-det mb-3">For overall development of kids, we conduct several visits to Book Fair, Shopping Center, Science Center, etc. We also make them participate in various co-curricular Competitions such as dance, singing, drawing, etc.</div>
                <Row>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Book Fair Visit" />
                        <span className="act-sa-desc">Book Fair Visit</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Science Center Visit" />
                        <span className="act-sa-desc">Science Center Visit</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Dance Competition" />
                        <span className="act-sa-desc">Dance Competition</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Drawing Competition" />
                        <span className="act-sa-desc">Drawing Competition</span>
                    </Col>
                    <Col md={3} sm={4} xs={6} classname="my-3">
                        <img src={demo} className="act-sa-img" alt="Singing Competition" />
                        <span className="act-sa-desc">Singing Competition</span>
                    </Col>
                </Row>
            </div>
        </Container>
        </>
    );
}

export default Activities;