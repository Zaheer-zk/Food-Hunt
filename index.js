import React from 'react';
import ReactDOM from 'react-dom/client';
import shortid from 'shortid';

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

//Title
const Title = () => {
  return (
    <div className="logo">
      <h3>Baba Ka Dhaba</h3>
    </div>
  );
};

//Nav-Link
const NavLink = () => {
  return (
    <>
      <ul className="nav">
        <li className="nav__link" href="#">
          Home
        </li>
        <li className="nav__link" href="#">
          About us
        </li>
        <li className="nav__link" href="#">
          Contact us
        </li>
        <li className="nav__link" href="#">
          Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </li>
      </ul>
    </>
  );
};

//Header
const Header = () => {
  return (
    <div className="header">
      <Title />
      <NavLink />
    </div>
  );
};

//Restaurant card
const RestaurantCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data?.image} alt="food image" className="card__img" />
      <div className="card__details">
        <h2>{data?.name}</h2>
        <h3>{data?.cuisines.join(', ')}</h3>
        <h4>{data?.rating}</h4>
      </div>
    </div>
  );
};

//Body
const Body = () => {
  return (
    <div className="card--container">
      {foodData.map((data) => (
        <RestaurantCard key={shortid.generate()} data={data} />
      ))}
    </div>
  );
};

//Footer
const Footer = () => {
  return (
    <div className="footer">
      <h4>Footer</h4>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
