const dogs = [
  {
    id: 'dog1',
    imageUrl: 'https://images.unsplash.com/photo-1561984142-7fabd0b4c9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    name: 'Splashes',
    owner: 'Douglas',
    description: 'Photogenic. Regal. Sport.',
  },
  {
    id: 'dog2',
    imageUrl: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
    name: 'Marty',
    owner: 'Murray',
    description: 'Friendly. Calm. Kind.',
  },
  {
    id: 'dog3',
    imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
    name: 'Miracle',
    owner: 'Joe',
    description: 'It\'s a miracle this dog sits still',
  },
  {
    id: 'dog4',
    imageUrl: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'Ponderosa',
    owner: 'Molly',
    description: 'What day is it?',
  },
  {
    id: 'dog5',
    imageUrl: 'https://images.unsplash.com/photo-1546975490-a79abdd54533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    name: 'Lil C',
    owner: 'Lacey',
    description: 'Shine bright like a diamond',
  },
];

const getAllDogs = () => dogs;

export default { getAllDogs };
