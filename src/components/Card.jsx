const Card = ({ data }) => {
  return (
    <div className='w-80 h-[350px] m-3 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105'>
      <div className='relative overflow-hidden'>
        <img
          src={
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
            data?.info?.cloudinaryImageId
          }
          alt='food image'
          className='w-full object-cover'
          style={{ height: '200px' }}
        />
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4'>
          <h2 className='text-lg font-bold text-white'>{data?.info?.name}</h2>
          <h3 className='text-md text-gray-300'>
            {data?.info?.cuisines.join(', ')}
          </h3>
        </div>
      </div>
      <div className='p-4 text-gray-800 dark:text-white'>
        <p className='text-sm'>
          {data?.info?.description || 'Delicious food awaiting you!'}
        </p>
        {/* Uncomment below line to show ratings if available */}
        {/* <p className="text-sm font-semibold mt-2">{data?.rating} ⭐</p> */}
      </div>
    </div>
  );
};

export default Card;
