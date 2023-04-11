import Logo from '../assets/images/images.jpg';
//Title
const Title = () => {
  return (
    <div className="w-16">
      {/* <h3>Baba Ka Dhaba</h3> */}
      <img src={Logo} alt="logo-img" className="rounded-md" />
    </div>
  );
};

export default Title;
