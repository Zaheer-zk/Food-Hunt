import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-zinc-400 text-neutral-800 border-t-2 border-gray-200 py-4 px-8'>
      <div className='flex justify-center items-center space-x-2'>
        <h3 className='text-lg'>
          Made with <span className='text-red-500'>❤️</span> by
        </h3>
        <h2 className='font-bold'>
          <Link
            to='http://zaheer-zk.github.io/Advanced-porfolio/'
            className='hover:text-gray-600 transition duration-300'
          >
            Zaheer
          </Link>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
