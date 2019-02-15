import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ActionCreators } from '../../actions';

import './PropertyInput.css';

class PropertyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.calculateAction();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Container>
                  <Row>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Address</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Number of Units</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Rentable SQFT</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Purchase Price</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Loan To Value</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Closing Costs %</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Monthly Debt Service</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div>
                        <Label>Gross Income</Label>
                      </div>
                      <div>
                        <Input type="text" />
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
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
              <Link to="PropertySummary">
                <Button>Analyze</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    calculations: state.calculation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInput);
