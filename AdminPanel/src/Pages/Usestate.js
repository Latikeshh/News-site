import React, { useEffect, useState } from "react";
import { Card,Container,Row,Col } from "react-bootstrap";
import Sumago from './Sumago.jpg'

function Usestate(){
    const [text, setText] = useState('red');
    // const [demo, setDemo] = useState('red');
    const [card, setCard] = useState({
          title:'Sumago Infotech',
          para:'Infotechs cloud-based software solutions for construction management, inspection, and bidding help owner-agencies maximize efficiency, accuracy, and collaboration on civil infrastructure projects',
      });
      const [page,setPage]=useState(
      '1.Kalyani 2.Manasi 3.Devangi 4.Priti'
      );
     const [count,setCount] = useState(2)
     useEffect(() => {
        setTimeout(() => {
             setCount((count) => count * 2 )
         },100)
     })
    const [demo,setDemo]=useState('My Group Members')
    const [first,setFirst]=useState( {title:'Sumago Infotech'})
    return (
        <>
             <h1>Count is - {count}</h1>
            <h1>{text}</h1>
            <h2>{demo}</h2>
            <button type="button" onClick={() => setDemo('Onclick Value')}>Click Here</button>
             <h1>{card.title}</h1>
            <h4>{card.para}</h4>

            <h3>{page}</h3>
            <button type="button" onClick={() => setPage('1.Dia 2.Monishka 3.Tanishka 4.Mayuri')}>Click Here</button>
              <Container>
                <Row>
                    <Col md={4}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Sumago} />
                            <Card.Body>
                                <Card.Title><h1>{first.title}</h1></Card.Title>
                                <Card.Text>
                                    we are going to design freelancing website
                                    Our Group Leader :
                                    <h2>{demo}</h2>
                                </Card.Text>
                                <button type="button" onClick={() => setDemo('1.Dia 2.Monishka 3.Tanishka 4.Mayuri')}>click here</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br>
             <Container>
                <Row>
                    <Col md={4}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="left" src={Sumago} />
                            <Card.Body>
                                <Card.Title><h1>{first.title}</h1></Card.Title>
                                <Card.Text>
                                    we are going to design freelancing website
                                    Our Group Leader :
                                    <h2>{demo}</h2>
                                </Card.Text>
                                <button type="button" onClick={() => setDemo('1.Dia 2.Monishka 3.Tanishka 4.Mayuri')}>click here</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            

        </>
    )

}
export default Usestate;
