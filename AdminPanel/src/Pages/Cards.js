import React ,{useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function Cards() {
            const [user, setUser] = useState([])
            useEffect(()=> {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    setUser(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
            })
  return (
                <>
                    <Container>
                        <Row>
                            {user.map((cards) => (
                            <Col md={3}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{cards.title }</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                              some quick example text to build on the card
                                            </Card.Text>
                                            <Card.Link href="#">Card Link</Card.Link>
                                            <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            ))}
                        </Row>
                    </Container>
                        </>
                    );
                }
                export default Cards;