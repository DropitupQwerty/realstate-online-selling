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
    locationURL:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123291.07805967338!2d120.91584607209475!3d15.056621408043235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339703019286e87b%3A0x103e9bd52fbe9c29!2sSan%20Ildefonso%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1669468488651!5m2!1sen!2sph',
    description:
      'Condo living can be different from the usual with Kizuna Heights&39; Ikigai Lifestyle. Students who are just at the corners of the University Belt can pursue their professional goals while having a delicate balance between their passion and personal lives. Near the central business districts such as Quezon City, and Makati City, this is where professionals can also build their future and live in a location within reach.',
  },
  {
    id: 2,
    location: 'Baliuag, Bulacan',
    price: 375000,
    facilities: [{ bathroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    image: [house2],
    hectare: 400,
    property: 'Barns and Water Tanks',
    locationURL:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123327.07189897058!2d120.907960521187!3d14.994315148537193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397005fc6e4e2c5%3A0x4b387b2ddd4537de!2sSan%20Rafael%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1669470772713!5m2!1sen!2sph',
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
