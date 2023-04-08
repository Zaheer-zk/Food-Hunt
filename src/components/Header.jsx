import Title from './Title';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

//Header
const Header = () => {
  return (
    <div className="header">
      <Title />
      <NavLink />
    </div>
  );
};

export default Header;
