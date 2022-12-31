import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircleFill, ArrowLeftCircleFill } from 'react-bootstrap-icons';
import eventList from './eventList.js';
import './events.css'

function Events() {
    const events = useState(eventList);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <h4 className="text-center text-danger mt-3 tm-int">
                There are many such events that have created long lasting memories with the kids...Have a look at some of them !!!
            </h4>
            <hr />
            <Container className="ev-csl-cntnr">
                <Carousel className="ev-csl" touch={true} indicators={false} interval={null} prevIcon={<ArrowLeftCircleFill className="ev-csl-arrow ev-csl-arr-prev" size={25} />} nextIcon={<ArrowRightCircleFill className="ev-csl-arrow ev-csl-arr-next" size={25} />}>
                    {events[0].map(
                        e => {
                            let desc = e.description.split('\n');
                            return (
                                
                                    <Carousel.Item className="ev-csl-itm" key = {e.id}>
                                        <h1 className="ev-csl-itm-ttl mt-1">{e.title}</h1>
                                        <Row>
                                            <Col md={4} sm={12} className="ev-csl-itm-vid my-2">
                                                <iframe width="243" height="432" className="ev-csl-vid" src={e.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </Col>
                                            <Col md={8} sm={12} className="ev-csl-itm-desc pe-5">
                                               {desc.map((para, i) => <p key ={i}>{para}</p>)}
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                            )
                        }
                    )}
                </Carousel>
            </Container>
        </>
    )
}

export default Events;