import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
             <Container className='main-content'>
                <Outlet></Outlet>
             </Container>
          <Footer></Footer>
        </div>
    );

};

export default Main;