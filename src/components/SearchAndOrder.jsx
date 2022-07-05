import React, { useContext } from 'react';
import {
  Card,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardSubtitle,
  Button,
} from 'reactstrap';
import '../App.css';
import ListContext from '../context/ListContext';

function SearchAndOrder() {
  const {
    sortByDate,
    sortAlphabetically,
    SEARCH_STATUS,
    hendleChange,
    searchSelectStatus,
    btnSearch,
  } = useContext(ListContext);

  return (
    <div>
      <Card className="Card">
        <Row tag="fieldset">
          <Col>
            <FormGroup>
              <CardSubtitle tag="h5" className="margin-top">
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
            <CardSubtitle tag="h5" className="margin-top">
              Buscar por:
            </CardSubtitle>
          </Col>
          <Col>
            <Input
              type="select"
              data-testid="column-status-search"
              id="column-status-search"
              className="margin-top"
              name="column-status-search"
              value={searchSelectStatus}
              onChange={(e) => hendleChange(e)}
            >
              {SEARCH_STATUS.map((e) => (
                <option
                  key={e}
                  id={e}
                >
                  {e}
                </option>
              ))}
            </Input>
          </Col>
          <Col>
            <Button
              color="secondary"
              outline
              block
              type="button"
              id="btn-search"
              name="btn-search"
              className="margin-top"
              onClick={() => btnSearch()}
            >
              Buscar
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default SearchAndOrder;
