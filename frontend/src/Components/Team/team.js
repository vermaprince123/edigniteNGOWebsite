import React, {useState} from "react";
import volPrince from './Images/volPrince.png';
import { Row, Col } from 'react-bootstrap';
import './team.css'
function Team() {

    const [hideMemberDetails,setHideMemberDetails] = useState(false);
    const [hideMemberImage,setHideMemberImage] = useState(true);


    const handleMemberImg = () => {
        setHideMemberDetails(()=>!hideMemberDetails);
        setHideMemberImage(()=>!hideMemberImage);
    };

    const handleMemberDetails = () =>{
        setHideMemberDetails(()=>!hideMemberDetails);
        setHideMemberImage(()=>!hideMemberImage);
    };
    return (
        <>
        <Row>
            <Col md={5} className="tm-vol-img">
                {/* {hideMemberImage && <img src={volPrince} alt="Prince Verma"
                     onMouseOver={handleMemberImg}
                     id="img-1"/>}
                {hideMemberDetails && <div className="tm-vol-det" id="det-1"  onMouseOut={handleMemberDetails}>
                    Prince Verma<br />
                    Open Source Contributer, Author of 3 Books, Software Engineer at OneAssist Consumer Solutions
                </div>} */}
                <div className="tm-vol-det" id="det-1"  onMouseOut={handleMemberDetails}>
                    <div className="tm-vol-nd">Prince Verma | Founder</div>
                    <div className="tm-vol-occ">Software Engineer, OneAssist Consumer Solutions</div>
                    <div className="tm-vol-ach">Open Source Contributer, Author of three books</div>
                </div>
            </Col>
            </Row>
        </>
    )
}

export default Team;