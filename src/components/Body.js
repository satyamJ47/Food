import { restaurantList, IMG_CDN_URL } from "./constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurants) {
  if (searchText === "") return allRestaurants;
  const filteredData = allRestaurants.filter(
    (rest) =>
      rest.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      rest.info.avgRating.toString(10).includes(searchText) ||
      // rest.info.cuisines.includes(searchText)||
      rest.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // if we doesnt provid any dependency array useEffect will keep getting called on each render

  async function getData() {
    // akshay
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    response = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    json = await response.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    return json;
    // console.log("useEffect");
  }

  console.log("render()");

  // conditional rendering

  return (
    <div class="border border-green-600 p-1 ">
      <div>
        <input
          type="text"
          placeholder="Search"
          class="border border-black rounded-xl w-96 p-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // console.log(searchText);
            console.log(e.target.value);
            const filteredData = filterData(e.target.value, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        />
        {/* <button
          class="bg-emerald-500 rounded-xl w-24 m-2 p-1"
          // this will not workk -> searchText parameter is new var and it contains null value
          // onClick={(searchText) => {
          //   console.log(searchText);
          //   const filteredData = filterData(searchText);
          //   setRestaurants(filteredData);
          //   console.log("FilteredData -> restaurants" + filteredData);
          // }}
          onClick={() => {
            console.log("search Clicked");
            console.log(searchText);
            const filteredData = filterData(searchText);
            setRestaurants(filteredData);
          }}
        >
          Search
        </button> */}
      </div>

      <div class="flex flex-wrap justify-between p-1">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          <h1>No Matching Data</h1>
        ) : null}
        {filteredRestaurants.map((rest) => {
          return (
            <Link key={rest?.info?.id} to={"restaurant/" + rest?.info?.id}>
              <RestaurantCard {...rest.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
//   return (
//     <div class="border border-black w-64 m-1">
//       <img src={IMG_CDN_URL + cloudinaryImageId} />
//       <h1>{name}</h1>
//       <h2>{cuisines.join(", ")}</h2>
//       <h3>{avgRating} stars</h3>
//     </div>
//   );
// };

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="border border-gray-400 rounded-lg shadow-md w-64 m-4 p-4">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-2">
        <h1 className="text-lg font-semibold">{name}</h1>
        <h2 className="text-sm text-gray-600">{cuisines.join(", ")}</h2>
        <h3 className="text-sm text-gray-600">{avgRating} stars</h3>
      </div>
    </div>
  );
};

export default Body;
