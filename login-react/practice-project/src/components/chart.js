import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './chart.css';
import '../App.css';

const Chart = () => {
  const data = [
    { date: "7 Jun", value: 120 },
    { date: "8 Jun", value: 130 },
    { date: "9 Jun", value: 100 },
    { date: "10 Jun", value: 340 },
    { date: "11 Jun", value: 240 },
    { date: "12 Jun", value: 60 },
    { date: "13 Jun", value: 400 },
    { date: "14 Jun", value: 190 }
  ]

  return (


    <Container className='contains'>
      <Row className='chart-header'>

        <header>
          <h4 className='row-header spacing'>Appointments growth</h4>
        </header>

        <Col>
          <select name="appointment" id="appoint" className='drop'>
            <option value="byDate">by days</option>
            <option value="byMonth">by months</option>
            <option value="byYear">by years</option>

          </select>
        </Col>
      </Row>
      <Row>
        <Col>
          <BarChart width={820} height={300} data={data}  padding={100}>
            <CartesianGrid strokeDasharray="2" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#4ad9c2" />

          </BarChart>
        </Col>

      </Row>

    </Container>

  )
}

export default Chart;