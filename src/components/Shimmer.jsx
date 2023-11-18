const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center m-3'>
      {Array(6)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className='w-80 h-64 rounded-lg bg-gray-200 m-3 shadow-lg overflow-hidden relative animate-pulse'
          >
            <div className='shimmer__wave'></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
