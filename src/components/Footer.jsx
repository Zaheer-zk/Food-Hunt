import { Link } from 'react-router-dom';

//Footer
const Footer = () => {
  return (
    <div className="p-6 bg-amber-300 text-blue-600 text-lg  bottom-0 left-0 w-full flex justify-center">
      <h3>Made with ❤️ by </h3>
      <h2 className="hover:text-blue-900 font-bold px-1">
        {' '}
        {<Link to="http://zaheer-zk.github.io/Advanced-porfolio/">Zaheer</Link>}
      </h2>
    </div>
  );
};

export default Footer;
