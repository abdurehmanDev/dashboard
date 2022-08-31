import React from 'react';
import img1 from '../doctors-image/doc-1.png';
import Container from 'react-bootstrap/Container';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiStar } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import { DoctorData } from './DoctorsData';
import './DoctorsSec.css';

const positive = [1, 2, 3, 4, 5];

const DoctorsSec = () => {
  return (
    <div className='contains'>
      <header>
        <h4 className='row-header spacing'>Doctors vs Patients</h4>
      </header>
      {DoctorData.map((item, index) => {
        return (
          <Container key={index} className='container-doctor'>
            <Row className='doc-section'>
              <Col>
                <img src={img1} className='doc-image' alt=''></img>
              </Col>
              <Col xs={6} className='spacing-name'>
                {item.docName}
                <Col className='type-of-doc'>{item.specialist}</Col>
                <Col>
                  <span className='doc-rate-num'>{item.review}</span>
                  {positive.map((item, ind) => {
                    return (
                      <FiStar style={{
                        color: '#ffad31',
                        fill: '#ffad31'
                      }} key={ind} />
                    );
                  })}
                </Col>
              </Col>
              <Col>
                <HiUsers className='icon-style' />
                <span className='num-people'>{item.users}</span>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  )
}

export default DoctorsSec;