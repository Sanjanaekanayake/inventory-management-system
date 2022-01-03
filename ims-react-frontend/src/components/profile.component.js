import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser() ,

    };
  }  

  render() {
    const  currentUser = this.state.currentUser;
   
    const styles = {
      card: {
        backgroundColor: '#B7E0F2',
        padding: '1rem',
        width: '18rem',
      },
      cardImage: {
        objectFit: 'cover',
        width: '10rem',          
        
      }
    }

    return (
      <div className="container">
        
        <Card bg="light" style={styles.card}>
        <Container>
 
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={9}>
          {currentUser.username === 'admin' ? (
              <Image  style={styles.cardImage} variant="top" src="admin.jpg"  /> 
          ):<Image  style={styles.cardImage} variant="top" src="user.jpg"  /> }
          </Col>
        </Row>
        <br/>
       
        
          <Card.Header bg="light"><strong>{currentUser.username} Profile</strong></Card.Header>
            <Card.Body>
              <Card.Text>
                <strong>Id:</strong>{" "}
                {currentUser.id}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong>{" "}
                {currentUser.email}
              </Card.Text>
              <Card.Text>
                <strong>Authorities:</strong>
                <ul>
                {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
              </Card.Text>
            </Card.Body>
          </Container>
      </Card>
     
      </div>
      
    );
  }
}