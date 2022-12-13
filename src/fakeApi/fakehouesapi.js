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
    description:
      'Development nestled in the heart of Metro Tagaytay, It offers its residents an oasis for recreation and relaxation without leaving the comfort of their homes. Condo-hotels rising in the midst of wide open spaces and natural greeneries make up a great combination of luxury and comfort. Greens are hard to find in the Metro, but at Citi Globals community within a community, you will have plenty of that. Greens everywhere, wide, open spaces, and just the experience of being in touch with nature.',
  },
  {
    id: 3,
    location: 'San Rafael, Bulacan',
    price: 5524000,
    facilities: [{ bedroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    image: [house3],
    hectare: 126,
    property: '2 Storey house',
    locationURL:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61672.895203365384!2d120.84931486151052!3d14.961812739935322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339700001fd7ca4b%3A0x48933424030540dd!2sBaliuag%2C%20Bulacan!5e0!3m2!1sen!2sph!4v1669569710947!5m2!1sen!2sph',
    description:
      'At Empress, your quality of living is our utmost priority. Each Unit is well-lit and well-designed with your ease and comfort in mind. Empress boasts of a Smart Living program in each home. With sohpisticated systems put in place, security and safety are integrated seamlessly into our residents day-to-day lives. Our Smart Living program keeps days fret-free, letting you put yourself first and just be.',
  },
  {
    id: 4,
    location: 'Pasig, Metro Manila',
    price: 20000000,
    image: [house4],
    hectare: 100,
    property: '2 Bedroom Condo in Empress at Capitol Commons, Pasig',
    locationURL:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61781.701619910586!2d121.04606574232501!3d14.578759180091035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7dc88f7b24f%3A0x4a592b2b4b34fd89!2sPasig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1670922508701!5m2!1sen!2sph',
    facilities: [{ bedroom: 1 }, { bathroom: 1 }, { kitchen: 1 }, { cctv: 1 }],
    description:
      'At Empress, your quality of living is our utmost priority. Each Unit is well-lit and well-designed with your ease and comfort in mind. Empress boasts of a Smart Living program in each home. With sohpisticated systems put in place, security and safety are integrated seamlessly into our residents day-to-day lives. Our Smart Living program keeps days fret-free, letting you put yourself first and just be.',
  },
];

export const getProperties = () => {
  return property;
};

export const getProperty = (id) => {
  return property.find((p) => p.id === id);
};
