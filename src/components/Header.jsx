import Title from './Title';
import NavLink from './NavLink';

// Header component with a refined color palette
const Header = () => {
  return (
    <header className='flex flex-col md:flex-row justify-between items-center bg-zinc-400 text-Neutral-700 py-4 px-4 border-b border-slate-200'>
      <Title />
      <NavLink />
    </header>
  );
};

export default Header;
