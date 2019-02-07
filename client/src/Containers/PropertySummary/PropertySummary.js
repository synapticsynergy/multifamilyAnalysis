import React from 'react';
import './PropertySummary.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function PropertySummary() {
  return (
    <div>
      <div className="summary-section">
        <div className="summary-section-item" style={{ marginBottom: '15px' }}>
          <img width="90%" src="https://picsum.photos/1080/720" alt="" />
        </div>
      </div>
      <div className="summary-section">
        <div>
          <h1>PropertySummary</h1>
        </div>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <div className="summary-section-item">
                <p>GRM: 10</p>
                <p>Cost Per Unit: $100,000</p>
                <p>Cap Rate: 6%</p>
                <p>Cash on Cash Return: 4%</p>
                <p>Debt Service Coverage Ratio: 1.2</p>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div className="summary-section-item">
                <h4>1 Year Summary</h4>
                <p>Appreciation</p>
                <p>Depreciation</p>
                <p>Amortization</p>
                <p>Unleveraged IRR: 10%</p>
                <p>Leveraged IRR: 11%</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="summary-section">
        <div>
          <h1>Investment Health Check</h1>
        </div>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <p>Total Expenses %: 40</p>
              <p>Annual Repairs: $100,000</p>
              <p>Cap Rate: 6%</p>
            </Col>
            <Col xs="12" md="6">
              <p>Vacancy Loss: 4%</p>
              <p>Insurance: 1.2</p>
              <p>Kitchen/Bath Rehabs</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="summary-section">
        <h1>Typical Credit Requests at Closing</h1>
      </div>
    </div>
  );
}
