import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../css/FrontPage.css'

const FrontPage = (props) => {
  return (
    <div className= 'jumboMain'>
      <Jumbotron fluid>
        <Container fluid>
            <br/>
          <h1 className="display-4">!People</h1>
          
          <p className="lead">- A simple App to enter and share locations of your favorite secluded, unfrequented, and downright undisturbed places -</p>
          {/* <br/>
          <br/>
          <hr/> */}
        </Container>
      </Jumbotron>
    </div>
  );
};

export default FrontPage;