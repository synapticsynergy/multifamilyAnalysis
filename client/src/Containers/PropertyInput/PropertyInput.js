import React from 'react';
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import './PropertyInput.css';

function PropertyInput() {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Row>
                <Col>
                  <div>
                    <p>Address</p>
                  </div>
                  <div>
                    <Input type="text" />
                  </div>
                </Col>
                <Col>
                  <div>
                    <p>Number of Units</p>
                  </div>
                  <div>
                    <Input type="text" />
                  </div>
                </Col>
                <Col>
                  <div>
                    <p>Rentable SQFT</p>
                  </div>
                  <div>
                    <Input type="text" />
                  </div>
                </Col>
              </Row>

              <Container>
                <Row>
                  <Col>
                    <div>
                      <p>Address</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Number of Units</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Rentable SQFT</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <p>Purchase Price</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Loan To Value</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Closing Costs %</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <p>Monthly Debt Service</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Gross Income</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <p>Net Operating Income</p>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </FormGroup>
            <Button>Analyze</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default PropertyInput;