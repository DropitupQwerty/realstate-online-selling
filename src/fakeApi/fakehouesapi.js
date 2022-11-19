import house1 from '../assets/img/house1.jpg';
import house2 from '../assets/img/house2.jpg';
import house3 from '../assets/img/house3.jpg';
import house4 from '../assets/img/house4.jpg';

const property = [
  {
    id: 1,
    location: 'San Ildefonso, Bulacan',
    price: 20000000,
    facilities: 'Bedroom',
    image: house1,
    hectare: 230,
    property: 'Resort with 18 rooms',
  },
  {
    id: 2,
    location: 'Baliuag, Bulacan',
    price: 375000,
    facilities: 'Bedroom',
    image: house2,
    hectare: 400,
    property: 'Barns and Water Tanks',
  },
  {
    id: 3,
    location: 'San Rafael, Bulacan',
    price: 5524000,
    facilities: 'Bedroom',
    image: house3,
    hectare: 126,
    property: '2 Storey house',
  },
  {
    id: 4,
    location: 'Marcela Village ,Blk 10 lot 32',
    price: 20000000,
    facilities: 'Bedroom',
    image: house4,
    hectare: 100,
    property: 'Complete House',
  },
];

export const getProperties = () => {
  return property;
};
