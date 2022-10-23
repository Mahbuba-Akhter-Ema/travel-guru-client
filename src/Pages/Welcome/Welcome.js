import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='font-weight-bold text-center mt-5 text-dark'>
            <h2>Thanks For Your Booking.</h2>
            <h3>Check Your Email For Latest Update</h3>
            <h4>Stay Connected</h4>
            <h4 className='text-danger'>To Check Your Profile <br />
            please check Profile Icon <Link to="/profile"><FaUser></FaUser></Link>
            </h4>
        </div>
    );
};

export default Welcome;