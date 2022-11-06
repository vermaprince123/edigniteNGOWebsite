import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { Instagram, Facebook, Linkedin } from 'react-bootstrap-icons'
import './team.css';
import membersDetails from './memberDetails';
import memberDetails from "./memberDetails";


function Team() {
    const [membersDetailsCloneData, setmembersDetailsCloneData] = useState(membersDetails);
    const [memberId, setmemberId] = useState(null);


    const handleMemberImg = (id) => {
        setmemberId(id);
        const selectedMember = membersDetails.filter((member) => member.id == id);
        setmembersDetailsCloneData(selectedMember);
    };

    const handleMemberDetails = (id) => {
        setmemberId("");
        setmembersDetailsCloneData(memberDetails);
    };
    return (
        <>
            <Row>
                <Col md={5} className="tm-vol-img">

                    {membersDetailsCloneData.map((memberDetail) => {

                        if (memberDetail.id == memberId) {
                            const otherMember = membersDetails.filter((member) => member.id != memberId);
                            return (
                                <div key={memberDetail.id}>
                                    <div className="tm-vol-det" id="det-1" onMouseOut={() => handleMemberDetails(memberDetail.id)}>
                                        <div className="tm-vol-nd"> {memberDetail.name | memberDetail.designation} </div>
                                        <div className="tm-vol-occ">{memberDetail.occupation}</div>
                                        <div className="tm-vol-ach">{memberDetail.achivements} </div>
                                    </div>
                                    <img src={otherMember[0].srcImage} alt={otherMember[0].alt}
                                        onMouseOver={() => handleMemberImg(otherMember[0].id)}
                                        id="img-1" />
                                </div>
                            )
                        } else {
                            return (
                                <div key={memberDetail.id}>
                                    <img src={memberDetail.srcImage} alt={memberDetail.alt}
                                        onMouseOver={() => handleMemberImg(memberDetail.id)}
                                        id="img-1" />
                                </div>
                            )
                        }


                    })
                    }
                </Col>

                <Col md={5} className="tm-vol-img">
                    <div className="tm-vol-det">
                        <div className="tm-vol-nd">Prince Verma | Founder</div>
                        <div className="tm-vol-occ">Software Engineer</div>
                        <div className="tm-vol-ach">Author of three books, Open Source Contributer, Udemy Course Instructor</div>
                        <div className="tm-vol-sm">
                            <a className="tm-vol-sm-ic" href="#"><Instagram size={25} /></a>
                            <a className="tm-vol-sm-ic" href="#"><Facebook size={25} /></a>
                            <a className="tm-vol-sm-ic" href="#"><Linkedin   size={25} /></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Team;