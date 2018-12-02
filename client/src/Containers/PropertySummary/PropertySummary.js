import React from 'react';
import './PropertySummary.css';

export default function PropertySummary() {
  return (
    <div>
      <div className="summary-section">
        <div>
          <h1>PropertySummary</h1>
        </div>
        <div>
          <img src="https://picsum.photos/300/200" alt="" />
        </div>
        <div>
          <p>GRM: 10</p>
          <p>Cost Per Unit: $100,000</p>
          <p>Cap Rate: 6%</p>
          <p>Cash on Cash Return: 4%</p>
          <p>Debt Service Coverage Ratio: 1.2</p>
        </div>
        <div>
          <h4>1 Year Summary</h4>
          <p>Appreciation</p>
          <p>Depreciation</p>
          <p>Amortization</p>
          <p>Unleveraged IRR: 10%</p>
          <p>Leveraged IRR: 11%</p>
        </div>
      </div>
      <div className="summary-section">
        <div>
          <h1>Investment Health Check</h1>
        </div>
        <div>
          <p>Total Expenses %: 40</p>
          <p>Annual Repairs: $100,000</p>
          <p>Cap Rate: 6%</p>
          <p>Vacancy Loss: 4%</p>
          <p>Insurance: 1.2</p>
          <p>Kitchen/Bath Rehabs</p>
        </div>
      </div>
      <div className="summary-section">
        <h1>Typical Credit Requests at Closing</h1>
      </div>
    </div>
  );
}
