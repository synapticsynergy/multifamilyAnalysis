import React from 'react';

function PropertyInput(){
    return (
        <form>
            <div>
                <p>Address</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Number of Units</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Rentable SQFT</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Purchase Price</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Loan To Value</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Closing Costs %</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Monthly Debt Service</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Gross Income</p>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <p>Net Operating Income</p>
            </div>
      </form>
    )
}

export default PropertyInput;