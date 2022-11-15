import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import demo from './Images/demo.JPG';
import ActivityList from './activitylist';
import './activities.css'


function Activities() {
    const actList = useState(ActivityList);
    return (
        <>
            <h4 className="text-center text-danger my-4 act-int">Apart from academic teaching there are a lot of Activities and Events that we conduct for developing children and developing them in all areas of life. Here are some of them...</h4>
            <hr />
            <Container className="text-center my-1">

                {actList[0].map(
                    (act) => {
                        return (
                            <div className="act-sa my-3" key={act.id}>
                                <h3>{act.actName}</h3>
                                <div className="act-sa-det mb-3">{act.description}</div>
                                <Row>

                                    {act.subAct.map(
                                        (sAct) =>{
                                            return(
                                                <Col lg={3} md={4} sm={6} xs={12} className="my-3" key = {sAct.id}>
                                        <img src={sAct.srcImg} className="act-sa-img" alt={sAct.name} />
                                        <span className="act-sa-desc">{sAct.name}</span>
                                    </Col>
                                            )
                                        }
                                    )}
                                </Row>
                            </div>
                        )
                    }
                )}
            </Container>
        </>
    );
}

export default Activities;