import React from "react";
import volPrince from './Images/volPrince.png';
import { Row, Col } from 'react-bootstrap';
import './team.css'
function Team() {
    function showDetails(show){
        var det = document.getElementById("det-1");
        var vimg = document.getElementById("img-1");
        if(show){
            det.style.setProperty('display', 'inline');
            vimg.style.setProperty('display', 'none');
        }
        else{
            det.style.setProperty('display', 'none');
            vimg.style.setProperty('display', 'inline'); 
        }
    }
    return (
        <>
        <Row>
            <Col md={5} className="tm-vol-img">
                <img src={volPrince} alt="Prince Verma" 
                onMouseDown={() => showDetails(true)}
                onMouseUp={() => showDetails(false)}
                id="img-1"/>
                <div className="tm-vol-name">
                    Prince Verma | Founder
                </div>
                <div className="tm-vol-det" id="det-1">
                    Prince Verma<br />
                    Open Source Contributer, Author of 3 Books, Software Engineer at OneAssist Consumer Solutions
                </div>
            </Col>
            </Row>
        </>
    )
}

export default Team;