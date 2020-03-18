import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GemCreate from './GemsCreate';
import GemTable from './GemsTable';
import GemEdit from './GemsEdit'; 
import APIURL from '../helpers/environment'
import '../css/App.css';
// import Sitebar from '../Home/Navbar';



const GemIndex = (props) => {
    const [gems, setGems] = useState([]);  
    const [updateActive, setUpdateActive] = useState(false);
    const [gemToUpdate, setGemToUpdate] = useState({});
    
    
    const fetchGems = () => {
        fetch(`${APIURL}/api/gem`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
            .then(logData => {
                setGems(logData)
                // console.log('gems', logData)
               
            })
    }

    const editUpdateGem = (gem) => {
        setGemToUpdate(gem);
        console.log(gem);
    }

    const updateOn = () => {
        setUpdateActive(true); 
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchGems();
    }, []);

    return (
        <Container>
        {/* {props.sessionToken ? <Sitebar clearToken= {props.clearToken}/> : null} */}
            <Row>
                <Col md='3'>
                    <GemCreate fetchGems= {fetchGems} token= {props.token}/>
                </Col>
                <Col md='9'>
                    <GemTable gems= {gems} editUpdateGem={editUpdateGem} updateOn={updateOn} fetchGems= {fetchGems} token= {props.token} userId={props.userId}/>
                </Col>
                {updateActive ? <GemEdit gemToUpdate= {gemToUpdate} updateOff= {updateOff} token={props.token} fetchGems= {fetchGems}/> : <> </>}
            </Row>
        </Container>
    )
}

export default GemIndex;

