import Title from './Title';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

//Header
const Header = () => {
  return (
    <div className="flex justify-between bg-blue-300 shadow-lg py-3 px-3">
      <Title />
      <NavLink />
    </div>
  );
};

export default Header;
