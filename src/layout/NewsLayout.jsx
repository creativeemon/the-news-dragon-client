import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNave from '../pages/Shared/RightNave/RightNave';
import { Outlet } from 'react-router-dom';



const NewsLayout = () => {
    return (
        <div>
              <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
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

export default NewsLayout;