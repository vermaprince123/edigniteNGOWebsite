import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import demo from './Images/demo.JPG';
import ActivityList from './activitylist';
import './activities.css'


function Activities() {
    const actList = useState(ActivityList);
    return (
        <>
            <h4 className="text-center text-danger my-4">Apart from academic teaching there are a lot of Activities and Events that we conduct for developing chindren and developing them in all areas of life...</h4>
            <hr />
            <Container className="text-center my-1">

                {actList[0].map(
                    (act) => {
                        return (
                            <div className="act-sa my-3" key={act.id}>
                                <h5>{act.actName}</h5>
                                <div className="act-sa-det mb-3">{act.description}</div>
                                <Row>

                                    {act.subAct.map(
                                        (sAct) =>{
                                            return(
                                                <Col md={3} sm={4} xs={6} className="my-3" key = {sAct.id}>
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