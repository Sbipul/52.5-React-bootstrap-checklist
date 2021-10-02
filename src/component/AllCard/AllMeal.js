import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import SingleMeal from '../SingleMeal/SingleMeal';

const AllMeal = () => {
    const [searchText,setSearchText] = useState('')
    const [meals,setMeals] = useState([])


    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])

    const searchMeal = e => {
        const searchMeal = e.target.value
        setSearchText(searchMeal)
    }

    return (
        <Container>
            <InputGroup className="mt-3 w-50 mx-auto">
                <FormControl
                onChange={searchMeal}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Row xs={1} md={4} className="g-4 mt-5">
                {
                    meals.map(meal => <SingleMeal meal={meal}></SingleMeal>)
                }
            </Row>
        </Container>
    );
};

export default AllMeal;