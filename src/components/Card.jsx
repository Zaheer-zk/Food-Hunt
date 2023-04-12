//Restaurant card
const Card = ({ data }) => {
  return (
    <div className="w-80 h-[350px] rounded-lg m-3 bg-white dark:bg-slate-900  px-6 py-8 ring-1 ring-slate-900/5 shadow-xl overflow-clip">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          data?.data?.cloudinaryImageId
        }
        alt="food image"
        className="w-full rounded-t-lg"
      />
      <div className="p-3 text-lg text-white">
        <h2 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          {data?.data?.name}
        </h2>
        <h3 className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          {data?.data?.cuisines.join(', ')}
        </h3>
        {/* <h4>{data?.rating} ⭐</h4> */}
      </div>
    </div>
  );
};

export default Card;
