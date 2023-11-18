import { Link } from 'react-router-dom';
import logo from '../assets/images/food-hunt-logo.png';

const Title = () => {
  return (
    <>
      <Link
        to='/'
        className='flex items-center space-x-3 justify-center flex-row'
      >
        <img
          src={logo}
          alt='logo-img'
          className='rounded-md'
          width='80px'
          height='80px'
        />
      </Link>
    </>
  );
};

export default Title;
