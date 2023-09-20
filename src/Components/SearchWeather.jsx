import React from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchWeather = ({fetchData,cityName,setCityName}) => {
  return (
    <div>
      <Card className="m-5 p-3">
        <Form onSubmit={(e) => e.preventDefault()}>
          <div className="d-flex flex-row">
            <Form.Control
              type="text"
              placeholder="Enter City Name"
              onChange={(e) => setCityName(e.target.value)}
              className="m-2"
            ></Form.Control>
            <Link to={'/weather'}>
              <Button
                type="submit"
                varient="primary"
                className="m-2 fw-bold"
                onClick={fetchData}
              >
                Find
              </Button>
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default SearchWeather