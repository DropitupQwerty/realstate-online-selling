import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getProperty } from '../fakeApi/fakehouesapi';
import '../components/styles/ViewPropertyStyles.css';
import Carousel from 'react-bootstrap/Carousel';

export default function ViewProperty() {
  const [property, setProperty] = useState();
  const { id } = useParams();
  const intId = parseInt(id);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { image, property: prop } = property || {};

  console.log('Path id', intId);
  console.log(typeof intId);

  const getProp = () => {
    const prop = getProperty(intId);
    setProperty(prop);
  };

  useEffect(() => {
    getProp();
  }, [id]);

  console.log(property);

  return (
    <div>
      <Navbar />
      {/* <img className="property-img" src={image} alt={prop}></img> */}

      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="property-img"
              src="https://images.pexels.com/photos/14426078/pexels-photo-14426078.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="property-img"
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="property-img"
              src="https://images.pexels.com/photos/14426182/pexels-photo-14426182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
