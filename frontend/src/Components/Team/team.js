import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Instagram, Facebook, Linkedin } from 'react-bootstrap-icons'
import './team.css';
import membersDetails from './memberDetails';
import memberDetails from "./memberDetails";


function Team() {
    const [membersDetailsCloneData, setmembersDetailsCloneData] = useState(membersDetails);
    return (
        <>
            <Container>
                <Row>
                    {membersDetailsCloneData.map((memberDetail) => {
                        return (
                            <Col md={4} key={memberDetail.id} className="tm-vol-mem">
                                <img src={memberDetail.srcImage} alt={memberDetail.alt}
                                    id="img-1" />
                                <div className="tm-vol-det text-center">
                                    <span className="tm-vol-nd"> {memberDetail.name}, {memberDetail.designation} </span><br />
                                    <span className="tm-vol-occ">{memberDetail.occupation}</span>
                                    <Row className="tm-vol-sm">
                                        <Col className="tm-vol-sm-lnk" sm={4}>
                                            <Instagram size={20} />
                                        </Col>
                                        <Col className="tm-vol-sm-lnk" sm={4}>
                                            <Facebook size={20} />
                                        </Col>
                                        <Col className="tm-vol-sm-lnk" sm={4}>
                                            <Linkedin size={20} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        )


                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Team;