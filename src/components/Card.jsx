//Restaurant card
const Card = ({ data }) => {
  return (
    <div className="w-80 h-[350px] rounded-lg rounded-lg m-3 shadow-2xl">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          data?.data?.cloudinaryImageId
        }
        alt="food image"
        className="w-full rounded-t-lg"
      />
      <div className="p-3 text-lg">
        <h2 className="text-2xl">{data?.data?.name}</h2>
        <h3>{data?.data?.cuisines.join(', ')}</h3>
        {/* <h4>{data?.rating} ⭐</h4> */}
      </div>
    </div>
  );
};

export default Card;
