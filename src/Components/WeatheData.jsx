import React from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const WeatheData = ({data}) => {
  return (
    <Card className="m-2 text-center w-50">
      {data && (
        <div className="d-flex flex-column">
          <h1>
            {data.name},{data.sys.country}
          </h1>
          <h1>{}</h1>
          <p className="fw-bold ">Current Temperature: {data.main.temp}</p>
          <div className="d-flex flex-row">
            <article className="m-2">Max Temp:{data.main.temp_max}</article>
            <article className="m-2 text-right">
              Max Temp: {data.main.temp_min}
            </article>
          </div>
          <Link to={'/'}>
            <Button>Back</Button>
          </Link>
        </div>
      )}
    </Card>
  );
}

export default WeatheData