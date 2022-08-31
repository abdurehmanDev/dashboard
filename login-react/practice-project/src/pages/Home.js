import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from '../components/chart';
import Table from '../components/table';
//import Hero from '../components/hero';
import Review from '../components/review';
import DoctorsSec from '../components/DoctorsSec';
import './home.css';


function Home({ handleLogout, isLogin }) {
  const [state, setState] = useState(false);

  const conToggle = () => {
    setState(!state);
  }
  console.log(isLogin);
  return (
    <div className='home'>
      <Navbar pass={conToggle} />

      {isLogin ? <Container >
        <Row className='cont-row2'>
          <Col md lg="8">
            <Chart />
          </Col>
          <Col md lg="4">
            <Review />
          </Col>
        </Row>
        <Row className='cont-row'>
          <Col md lg="8">
            <Table />
          </Col>
          <Col md lg="4">
            <Chart />
          </Col>
        </Row>
      </Container> : false}

      <Container className={state ? 'page-normal' : 'page-left'}>

        <section className="hero">
          <nav className="hero__nav">
            <h1>Performance Overview</h1>
            <button className="hero__button" onClick={handleLogout}>Log out</button>
          </nav>
        </section>
        <Row className='cont-row'  xs={2} md={4} lg={4}>
          <Col md lg="8" className='col-item1'>
            <Chart />
          </Col>
          <Col md lg="4" className='col-item2'>
            <Review />
          </Col>
        </Row>
        <Row className='cont-row' xs={1} md={2}>
          <Col md lg="8" className='col-item1'>
            <Table />
          </Col>
          <Col md lg="4" className='col-item2'>
            <DoctorsSec />
          </Col>
        </Row>
      </Container>
     
    </div>

  );
}

export default Home;


