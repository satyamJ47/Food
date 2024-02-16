import { restaurantList, IMG_CDN_URL } from "./constants";
/*const restaurantList = [
  {
    restaurant: "KFC",
    cuisine: "Indian",
    ratings: "4.5",
  },
  {
    restaurant: "Dominoz",
    cuisine: "Italian",
    ratings: "4.7",
  },
  {
    restaurant: "McDownald",
    cuisine: "American",
    ratings: "4.6",
  },
  {
    restaurant: "Subway",
    cuisine: "Canadian",
    ratings: "4.5",
  },
];*/

const Body = () => {
  return (
    <div class="flex flex-wrap justify-between p-1">
      {/* <RestaurantCard rest={restaurantList[0]} />
      <RestaurantCard rest={restaurantList[1]} />
      <RestaurantCard rest={restaurantList[2]} />
      <RestaurantCard rest={restaurantList[3]} /> */}
      {restaurantList.map((rest) => {
        // console.log({ ...rest.info });
        return <RestaurantCard key={rest.info.id} r={rest.info} />;
        // return <RestaurantCard {...rest.info} />;
      })}
    </div>
  );
};

const RestaurantCard = ({ r }) => {
  // const { cloudinaryImageId, name, cuisines, avgRating } = rest.info;
  // console.log(r.name);
  // console.log(avgRating);
  return (
    <div class="border border-black w-64 m-1">
      <img src={IMG_CDN_URL + r.cloudinaryImageId} />
      <h1>{r.name}</h1>
      <h2>{r.cuisines.join(", ")}</h2>
      <h3>{r.avgRating} stars</h3>
    </div>
  );
};

export default Body;
