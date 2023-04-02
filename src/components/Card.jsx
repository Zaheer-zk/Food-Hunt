//Restaurant card
const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data?.image} alt="food image" className="card__img" />
      <div className="card__details">
        <h2>{data?.name}</h2>
        <h3>{data?.cuisines.join(', ')}</h3>
        <h4>{data?.rating}</h4>
      </div>
    </div>
  );
};

export default Card;
