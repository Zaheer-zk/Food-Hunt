const Shimmer = () => {
  return (
    <>
      <div className="w-80 h-[350px] rounded-lg rounded-lg m-3 shadow-2xl">
        {Array(10)
          .fill('')
          .map((e, index) => {
            return <div key={index} className=" shimmer__card card"></div>;
          })}
      </div>
    </>
  );
};

export default Shimmer;
