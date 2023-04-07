import Logo from '../assets/images/images.jpg';
//Title
const Title = () => {
  return (
    <div className="logo">
      {/* <h3>Baba Ka Dhaba</h3> */}
      <img src={Logo} alt="logo-img" />
    </div>
  );
};

export default Title;
