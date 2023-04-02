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

export default NavLink;
