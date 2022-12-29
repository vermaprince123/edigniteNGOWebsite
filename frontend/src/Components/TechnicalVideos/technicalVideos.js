import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import videoList from './videoList';
import './technicalVideos.css';

function TechnicalVideos() {
    const videos = useState(videoList);
    return (
        <>
            <h4 className="text-center text-danger mt-3 tm-int">
                We also have our YouTube channel where we upload several videos related to the topics in Computer Sceince and IT field. Have a look at some of them...
            </h4>
            <hr />
            <Container className='text-center'>
            <marquee width="80%" direction="left" className="text-center tv-text">
                <a title="Go to Edignite Ngo YouTube channel" href="https://www.youtube.com/@EdigniteNgo" target="_blank">
                Click here to Subscribe to Edigite NGO YouTube channel for more such videos.
                </a>
            </marquee>
            </Container>
            <Container className="text-center mt-3">
                <Row>
                    {videos[0].map(
                        (video) => {
                            return (
                                <Col lg={4} md={6} sm={12} className="pl-sp my-2" key={video.id}>
                                    <iframe src={video.src} width="275" height="157.5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <div className="pl-sp-nm text-center">
                                        {video.title}
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

export default TechnicalVideos;