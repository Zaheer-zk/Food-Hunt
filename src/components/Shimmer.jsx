const Shimmer = () => {
  return (
    <>
      <div className="card--container">
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
