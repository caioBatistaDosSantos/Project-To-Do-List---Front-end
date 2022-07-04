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
  const { getAllList } = useContext(ListContext);
  // console.log('data: ', data);
  // sortData.sort((a, b) => a.task_list + b.task_list);
  // console.log('sortData: ', sortData);

  return (
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
                onClick={() => getAllList()}
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
              />
              {' '}
              Ordem alfabética
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Card>
  );
}

export default SearchAndOrder;
