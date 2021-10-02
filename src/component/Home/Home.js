import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
    style={{
        height:'100vh'
    }}
      className="d-block w-100"
      src="https://i.pinimg.com/originals/f9/5f/75/f95f75f69a45fb63f5f30a167f4f6ae0.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{
        height:'100vh'
    }}
      className="d-block w-100"
      src="https://adibiryani.ca/images/menu-item-thumbnail-04.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{
        height:'100vh'
    }}
      className="d-block w-100"
      src="https://www.surfindia.com/recipes/images/recipes/goan-fish-curry.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Home;