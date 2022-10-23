import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Details = () => {
    const allCityDetails = useLoaderData();
    // console.log(allCityDetails);

    return (
        <div>
            <Row>
                <Col lg="5" className='px-0 font-weight-bold text-black text-lg-left mt-5'>
                    <div className='me-5 line-height:1.8'>
                        <h1>{allCityDetails.title}</h1>
                        <h5>{allCityDetails.details}</h5>
                    </div>
                </Col>
                <Col lg="7">
                    <div className='mt-5'>
                        <Form>
                            <fieldset>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="">Origin</Form.Label>
                                    <Form.Control id="" placeholder="Your City Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="">Destination</Form.Label>
                                    <Form.Select>
                                        <option>Cox's Bazar</option>
                                        <option>Sreemangal</option>
                                        <option>Sundarbans</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    
                                </Form.Group>
                                <Button variant="warning" type="submit"><Link to="/login">Start Booking</Link></Button>
                            </fieldset>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Details;