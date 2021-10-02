import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleMeal = (props) => {
    // console.log(props.meal)
    const {strMealThumb,strMeal,strArea,idMeal} = props.meal;
    const history = useHistory()

    const viewDetailMeal = () =>{
        history.push(`/details/${idMeal}`)
    }
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strArea}
          </Card.Text>
          <Button onClick={viewDetailMeal} variant="warning text-light">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleMeal;