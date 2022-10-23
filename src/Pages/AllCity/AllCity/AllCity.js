import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CityDetails from '../../CityDetails/CityDetails/CityDetails';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllCity = () => {
    const [allCity, setAllCity] = useState([]);

    useEffect(() => {
        fetch('https://travel-guru-server-jade.vercel.app/all-cities')
            .then(res => res.json())
            .then(data => setAllCity(data))
    }, [])
        // console.log(allCity);
    return (
        <div className='mt-5'>
        <Row>
           <Col lg="5" className='px-0 font-weight-bold text-black text-lg-left mt-5 ms-3 ms-lg-0 text-center mb-5'>
                <div className='me-5 line-height:1.8'>
                <h1>Cox's bazar</h1>
                <h5>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</h5>
                <Button variant="warning"><Link to="/login">Booking</Link></Button>
                </div>
           </Col>
           <Col lg="7" className='text-center pe-5 pe-lg-0'>
                <div className='row ms-5 ms-lg-0 g-5 g-lg-2'>
                    {
                        allCity.map(city => <CityDetails city={city} key={city.id}>

                        </CityDetails> )
                    }
                </div>              
           </Col>
        </Row>
    </div>
    );
};

export default AllCity;