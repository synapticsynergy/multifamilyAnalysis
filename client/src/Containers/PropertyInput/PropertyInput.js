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
              <Container>
                <Row>
                  <Col>
                    <div>
                      <Label>Address</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Number of Units</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Rentable SQFT</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <Label>Purchase Price</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Loan To Value</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Closing Costs %</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <Label>Monthly Debt Service</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Gross Income</Label>
                    </div>
                    <div>
                      <Input type="text" />
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Label>Net Operating Income</Label>
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