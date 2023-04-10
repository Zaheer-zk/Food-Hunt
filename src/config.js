//Mock data
const foodData = [
  {
    name: 'Pizza Masters',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Pizza', 'Italian'],
    rating: 4.8,
  },
  {
    name: 'Sushi Palace',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Sushi', 'Japanese'],
    rating: 4.6,
  },
  {
    name: 'Taco Town',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Tacos', 'Mexican'],
    rating: 4.3,
  },
  {
    name: 'Curry House',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Curry', 'Indian'],
    rating: 4.2,
  },
  {
    name: 'Burger Joint',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Burgers', 'American'],
    rating: 4.0,
  },
  {
    name: 'Noodle Bar',
    image:
      'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1680375362~exp=1680375962~hmac=e23fcc4cc9a0df82755f4553141a92ca2fec806a448982ff2b6cfdcdc2eddd29',
    cuisines: ['Noodles', 'Chinese'],
    rating: 4.1,
  },
];

export const IMG_CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';

export const FETCH_MENU_URL =
  'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=';

export default foodData;
