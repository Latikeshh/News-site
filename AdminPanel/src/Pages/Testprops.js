import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Testprops(props) {
    const [user,setUser] =useState([])
     useEffect(()=>{

    axios.get ('https://jsonplaceholder.typicode.com/todos/')
        .then(res =>{
            setUser(res.data)
            
        })
        .catch(err=>{
            console.log(err);
        })
    })

    return (
        <>
            <Container>
                <Row>
                    {user.map((text) => (
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{text.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    {props.des}
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
export default Testprops;