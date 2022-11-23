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

  const { image, property: prop, description } = property || {};

  console.log('Path id', intId);
  console.log(typeof intId);

  const getProp = () => {
    const prop = getProperty(intId);
    setProperty(prop);
  };

  useEffect(() => {
    getProp();
  }, [id]);

  console.log(image);

  return (
    <div>
      <Navbar />
      {/* <img className="property-img" src={image} alt={prop}></img> */}

      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {image?.map((img) => {
            return (
              <Carousel.Item>
                <img className="property-img" src={img} alt={img} />
                <Carousel.Caption>
                  <h3>{prop}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
