import React from "react";
import { container,Row,col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Demo () {
   return (
    <>
    <container>
        <Row>
            <col md={4}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="natur1/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </col>
        </Row>
    </container>
    
    </>

   );
}
export default Demo;