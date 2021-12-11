import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, description, designation, qualifications, speciality, contact } = doctor;
    // console.log(name)
    return (
        <Card style={{ width: '22rem' }} className='col col-sm-12 col-md-6 col-lg-6 mx-4 my-4 '>
            <Card.Img variant="top" src={img} className='' />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-warning'>{qualifications}</Card.Text>
                </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><span className='fw-bold'>Designation: </span> {designation}</ListGroupItem>
                <ListGroupItem><span className='fw-bold'>Speciality: </span>  {speciality}</ListGroupItem>
            </ListGroup>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Body className='d-flex justify-content-center'>

                <Card.Link as={Link} className='text-decoration-none border border-3 border-danger p-3 rounded-pill bg-light' to={`/${id}`}>Doctor Detail</Card.Link>


            </Card.Body>
        </Card>
    );
};

export default Doctor;