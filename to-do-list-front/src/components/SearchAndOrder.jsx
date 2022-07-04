import React, { useContext } from 'react';
import {
  Card,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardSubtitle,
} from 'reactstrap';
import '../App.css';
import ListContext from '../context/ListContext';

function SearchAndOrder() {
  const { sortByDate, sortAlphabetically } = useContext(ListContext);

  return (
    <div>
      <Card className="Card">
        <Row tag="fieldset">
          <Col>
            <FormGroup>
              <CardSubtitle tag="h6">
                Ordenar por:
              </CardSubtitle>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  onClick={() => sortByDate()}
                />
                {' '}
                Data de criação
              </Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label check>
                <Input
                  name="radio1"
                  type="radio"
                  onClick={() => sortAlphabetically()}
                />
                {' '}
                Ordem alfabética
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </Card>
      <Card className="Card">
        <Row tag="fieldset">
          <Col>
            <FormGroup>
              <CardSubtitle tag="h6">
                Buscar por:
              </CardSubtitle>
            </FormGroup>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SearchAndOrder;
