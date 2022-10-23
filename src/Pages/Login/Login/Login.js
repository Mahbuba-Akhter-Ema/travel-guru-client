import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const {signIn, user} = useContext(AuthContext);
    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
       
    };
    useEffect(() => {
        if(user){
            navigate(`/welcome`)
        }
    }, [navigate, user]);
    
 
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
     
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="warning" type="submit">
                Login
            </Button>
            <Button className='ms-2' variant="warning" type="submit">
               <FaGoogle></FaGoogle> Login with Google
            </Button>

            <Form.Text className="text-danger">
                    <h3>Don't Have Account? <Link to="/register">Register Now</Link></h3>
            </Form.Text>

            <Form.Text className="text-danger">
                    {error}
            </Form.Text>
        </Form>
    );
};

export default Login;