import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Instagram, Facebook, Linkedin } from 'react-bootstrap-icons'
import './team.css';
import { membersDetails, volList } from './memberDetails';


function Team() {
    const [membersDetailsCloneData, setmembersDetailsCloneData] = useState(membersDetails);
    const volData = useState(volList);
    return (
        <>
        <h5 className="text-center text-danger mt-3 tm-int">
            The organization, 'Edignite Educational And Charitable Trust' was Founded by Prince Verma Sir in the year 2019. Since then it has been getting many enthusiastic volunteers who are always ready to enlighten a child's life....<br/>
            Here's the Team of enthusiastic volunteers at Edignite.
        </h5>
        <hr />
            <Container>
                <Row className="text-center">
                    <h3 className="tm-vol-ttl">Core Members</h3>
                    <hr />
                    {membersDetailsCloneData.map((memberDetail) => {
                        return (
                            <Col md={3} key={memberDetail.id} className="tm-vol-mem mt-2 mb-3">
                                <img src={memberDetail.srcImage} alt={memberDetail.alt}
                                    id="img-1" />
                                <div className="tm-vol-det text-center mt-3">
                                    <span className="tm-vol-nd"> {memberDetail.name}, {memberDetail.designation} </span><br />
                                    <span className="tm-vol-occ">{memberDetail.occupation}</span>
                                    <Row className="tm-vol-sm">
                                    <Col className="tm-vol-sm-lnk text-center" xs={4}>
                                            <a className="tm-sm-lnk" href={memberDetail.lnkdinId} target="_blank" title={"Go to " + memberDetail.name + "'s LinkedIn Profile"}><Linkedin size={20} /></a>
                                        </Col>
                                        <Col className="tm-vol-sm-lnk text-center" xs={4}><a className="tm-sm-lnk" href={memberDetail.instaId} target="_blank" title={"Go to " + memberDetail.name + "'s Instagram Profile"}><Instagram size={20} /></a></Col>
                                        <Col className="tm-vol-sm-lnk text-center" xs={4}>
                                            <a className="tm-sm-lnk" href={memberDetail.fbId} target="_blank" title={"Go to " + memberDetail.name + "'s Facebook Profile"}><Facebook size={20} /></a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        )


                    })
                    }
                    <hr className="mt-5"/>
                    <h3 className="tm-vol-ttl">Enthusiastic Volunteers !!!</h3>
                    <hr />
                    {volData[0].map((vol)=>{
                        return(
                            <Col md={3} sm={12} xs={12} key={vol.id}>
                                {vol.name}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Team;