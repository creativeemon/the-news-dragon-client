import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter , FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNave = () => {
    return (
        <div>
            <h3 className=''>Login With</h3>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-5'>Friend us One</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook />Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />TWitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNave;