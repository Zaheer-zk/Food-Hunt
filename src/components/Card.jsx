//Restaurant card
const Card = ({ data }) => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          data?.data?.cloudinaryImageId
        }
        alt="food image"
        className="card__img"
      />
      <div className="card__details">
        <h2>{data?.data?.name}</h2>
        <h3>{data?.data?.cuisines.join(', ')}</h3>
        {/* <h4>{data?.rating} ⭐</h4> */}
      </div>
    </div>
  );
};

export default Card;
