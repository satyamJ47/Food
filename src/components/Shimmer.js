const Shimmer = () => {
  //   return <h1>Shimmer UI Loading...</h1>;
  const array = new Array(20).fill(",");
  //   console.log(array);
  //   console.log(array.length);
  return array.map((ele, index) => {
    // console.log("map");
    return (
      <div
        className="border border-gray-200 bg-gray-100 rounded-lg shadow-md w-64 m-4 p-4"
        key={index}
      >
        <div className="w-full h-40 object-cover rounded-t-lg bg-gray-200"></div>
        <div className="p-2">
          <h1 className="text-lg font-semibold bg-gray-200">&nbsp;</h1>
          <h2 className="text-sm text-gray-600 bg-gray-200">&nbsp;</h2>
          <h2 className="text-sm text-gray-600 bg-gray-200">&nbsp;</h2>
          <h1 className="text-sm text-gray-600 bg-gray-200">&nbsp;</h1>
          {/* <h3 className="text-sm text-gray-600 bg-gray-200">&nbsp;</h3> */}
        </div>
      </div>
    );
  });
};
export default Shimmer;
