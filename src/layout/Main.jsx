import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnave from '../pages/Shared/Leftnave/Leftnave';
import RightNave from '../pages/Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Shared/Header/NavigationBer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBer></NavigationBer>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Leftnave></Leftnave>
                    </Col>
                    <Col lg={6}>
                     <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNave></RightNave>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;