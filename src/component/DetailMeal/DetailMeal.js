import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailMeal = () => {
    const {mealId} = useParams()
    const [detailsMeal,setDetailsMeal] = useState([])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setDetailsMeal(data.meals))
    },[])
    return (
        <div>
            {
                detailsMeal.map(detail => <Card>
                    <Card.Img className="w-25 mx-auto" variant="top" src={detail.strMealThumb} />
                    <Card.Body>
                      <Card.Title>{detail.strMeal}</Card.Title>
                      <Card.Text>
                        {detail.strInstructions}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
            }
            {
                console.log(detailsMeal)
            }
        </div>
    );
};

export default DetailMeal;