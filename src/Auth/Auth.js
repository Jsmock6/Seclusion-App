import React from 'react';
import {Container, Row, Col} from 'reactstrap';
// import Sitebar from '../Home/Navbar'; 
import Signup from './Signup';
import Login from './Login';
import FrontPage from '../Home/FrontPage';
import '../css/App.css'






const Auth = (props) => {
    
    // const [userId, setUserId]= useState(undefined)
    // useEffect(() => {
    //     if (userId) {
    //         localStorage.setItem('id', userId);
    //     }
    // }, [userId]) 
    return(
        <Container className= 'auth-container'>
            
            <FrontPage />
            
            
            
            {/* <Sitebar /> */}
            <Row>
                <Col md="6">
                    <Signup updateToken= {props.updateToken} updateUserId= {props.updateUserId}/>
                </Col>
                
                <Col md="6" className= 'login-col'>
                    <Login updateToken= {props.updateToken} updateUserId= {props.updateUserId}/>
                </Col>  
                 
            </Row>
        </Container>
    )
}

export default Auth; 
