const user = [
  {
    id: 1,
    fullname: 'Jacob Allen Valderama',
    contact: '09475307716',
    address: 'Pinac-pinacan, San Rafael, Bulacan',
    email: 'vjacoballen2040@gmail.com',
  },
];

export const getUser = (id) => {
  return user.find((u) => u.id === id);
};
