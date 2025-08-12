import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const View = () => {

  const [userData, setUserData] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    showUsers()
  }, [])

  const showUsers = () => {
    axios.get('http://localhost:8000/findnews')
      .then(res => {
        setUserData(res.data.data)
      }).catch(err => {
        console.log(err);
      })
  }

  const deletedata = (id) => {
    axios.delete(`http://localhost:8000/deleteuser/${id}`)
      .then(res => {
        console.log('User Deleted:', res.data);
        alert('User Delete');
        showUsers()
      })
      .catch(error => {
        console.error('Error Deleting User:', error);
      });
  }

  return (
    <Container>
      <Row style={{ paddingTop: 100 }} className="d-flex justify-content-center align-items-center">
        <Col md={10} lg={12} xs={12}>
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>content</th>
                <th>author</th>
                <th>category</th>
                <th>Tags</th>
                <th>publishedAt</th>
                <th>empty</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((a, id) => {
                return (
                  <tr>
                    <td>{id + 1}</td>
                    <td>{a.title}</td>
                    <td>{a.slug}</td>
                    <td>{a.content}</td>
                    <td>{a.author}</td>
                    <td>{a.category}</td>
                    <td>{a.tags}</td>
                    <td>{a.publishedAt}</td>
                    <td><img src={`http://localhost:8000/${a.image}`} alt="image" width={100} /></td>
                    <td className='d-flex justify-content-evenly'>
                      <button className='btn btn-warning'
                        onClick={() => {
                          navigate(`/update/${a._id}`)
                        }}>Update</button>
                      <button className='btn btn-danger' onClick={() => deletedata(a._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default View
