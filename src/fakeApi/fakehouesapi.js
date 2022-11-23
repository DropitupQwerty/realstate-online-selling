import house1 from '../assets/img/house1.jpg';
import house2 from '../assets/img/house2.jpg';
import house3 from '../assets/img/house3.jpg';
import house4 from '../assets/img/house4.jpg';

const property = [
  {
    id: 1,
    location: 'San Ildefonso, Bulacan',
    price: 20000000,
    facilities: [{ bedroom: 1 }, { bathroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    image: [
      house1,
      'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/14426078/pexels-photo-14426078.jpeg',
      'https://images.pexels.com/photos/14426182/pexels-photo-14426182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    hectare: 230,
    property: 'Resort with 18 rooms',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
  },
  {
    id: 2,
    location: 'Baliuag, Bulacan',
    price: 375000,
    facilities: [{ bathroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    image: [house2],
    hectare: 400,
    property: 'Barns and Water Tanks',
    description: 'lorem alot',
  },
  {
    id: 3,
    location: 'San Rafael, Bulacan',
    price: 5524000,
    facilities: [{ bedroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    image: [house3],
    hectare: 126,
    property: '2 Storey house',
    description: 'lorem alot',
  },
  {
    id: 4,
    location: 'Marcela Village ,Blk 10 lot 32',
    price: 20000000,
    image: [house4],
    hectare: 100,
    property: 'Complete House',
    facilities: [{ bedroom: 1 }, { bathroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    description: 'lorem alot',
  },
];

export const getProperties = () => {
  return property;
};

export const getProperty = (id) => {
  return property.find((p) => p.id === id);
};
