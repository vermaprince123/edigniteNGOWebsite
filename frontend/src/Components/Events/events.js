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
            <Container>
                <Carousel className="ev-csl" touch={true} indicators={false} prevIcon={<ArrowLeftCircleFill className="ev-csl-arrow" size={25} />} nextIcon={<ArrowRightCircleFill className="ev-csl-arrow" size={25} />}>
                    {events[0].map(
                        e => {
                            return (
                                
                                    <Carousel.Item className="ev-csl-itm" key = {e.id}>
                                        <h1 className="ev-csl-itm-ttl mt-1">{e.title}</h1>
                                        <Row>
                                            <Col md={4} className="ev-csl-itm-vid my-2">
                                                <iframe width="243" height="432"
                                                    src={e.link}>
                                                </iframe>
                                            </Col>
                                            <Col md={8} className="ev-csl-itm-desc pe-5">
                                                {e.description}
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                            )
                        }
                    )}
                    {/* <Carousel.Item className="ev-csl-itm">
                        <h1 className="ev-csl-itm-ttl mt-1">Children's Day Celebration</h1>
                        <Row>
                            <Col md={4} className="ev-csl-itm-vid my-2">
                                <iframe width="243" height="432"
                                    src="https://youtube.com/embed/V0FPBEDmjwg?feature=share">
                                </iframe>
                            </Col>
                            <Col md={8} className="ev-csl-itm-desc pe-5">
                                Even though every day is children's day when it comes to Edignite family but, on the occasion of children's day, our leaders organised a special event for our students.🙌🏻🙌🏻<br />

                                It was really an heartwarming event filled with full of learning, fun and laughter. 😍😍
                                The event was attended by J. Vaghasia Sir, Falguni Modi Ma'am, Nital Doshi Ma'am, Adv. Vishal Pandya Sir, B. Patel Ma'am and their motivating words did inspired us a lot.<br />

                                Our talented students performed various acts comprising prayers, dances ,poetries, mimicry, role plays on stage with full confidence and enthusiasm.🔥🔥 Watching them preparing all such acts within short span of time really made us all proud.😇😇
                            </Col>
                        </Row>
                    </Carousel.Item> */}
                </Carousel>
            </Container>
        </>
    )
}

export default Events;