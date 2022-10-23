import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CityDetails = ({city}) => {
    // console.log(city);


    return (     
           <div className='col-lg-4'>
             <Card className='me-auto'>
                <Card.Img variant="top" src={city.image} />
                <Card.Body>
                    <Card.Title><Link to={`/details/${city.id}`}>{city.name}</Link></Card.Title>
                </Card.Body>
            </Card>
           </div>   
    );
};

export default CityDetails;