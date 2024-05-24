import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL, MENU_API } from "./constants";
import Shimmer from "./Shimmer";

const RestaurantMenuCard = ({ isVeg, name, price, description, imageId }) => {
  return (
    <div className=" flex  p-2 m-2 bg-slate-200 w-4/6 rounded-xl">
      <div className="bg-red-400 w-full">
        {isVeg === "VEG" ? (
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
            alt="vegetarian-food-symbol"
          />
        ) : (
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/24/non-vegetarian-food-symbol.png"
            alt="non-vegetarian-food-symbol"
          />
        )}
        <h1 className="font-bold">{name}</h1>
        <h1 className="">₹ {price / 100}</h1>
        <h1 className="text-slate-600">{description}</h1>
      </div>
      <div className="h-40 w-2/6 flex justify-end p-1">
        <img className=" w-40 rounded-md" src={IMG_CDN_URL + imageId} />
      </div>
    </div>
  );
};

const RestaurantMenuCategory = (props) => {
  // const { title } = props;
  return (
    <div className="bg-slate-300 m-4 flex-col items-center">
      {/* {console.log(
        props.card?.itemCards[0]?.card?.info?.variantsV2?.pricingModels
      )} */}
      <h1 className="text-xl bg-blue-500 text-center">{props.card?.title}</h1>
      <div className="bg-orange-300 flex flex-wrap justify-center">
        {props.card?.itemCards?.map((itemCard) => {
          return (
            <RestaurantMenuCard
              isVeg={itemCard?.card?.info?.itemAttribute?.vegClassifier}
              name={itemCard?.card?.info?.name}
              price={
                itemCard?.card?.info?.price ||
                itemCard?.card?.info?.variantsV2?.pricingModels?.[0]?.price
              }
              description={itemCard?.card?.info?.description}
              imageId={itemCard?.card?.info?.imageId}
            />
          );
        })}
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  const [menu, setMenu] = useState([]);

  console.log("RENDER");
  async function getRestaurantMenu() {
    response = await fetch(MENU_API + resId);
    json = await response.json();
    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  }

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="border-red-700 bg-slate-500">
      <h1>Restaurant ID : {resId}</h1>
      {menu.map((items) => {
        console.log(items?.card?.card?.title);
        console.log(items?.card?.card?.itemCards?.[0]);
        return <RestaurantMenuCategory card={items?.card?.card} />;
        // nested map
        // const Items = items?.card?.card?.itemCards?.map((item) => {
        //   // console.log(" -> " + item?.card?.info?.name);
        //   return <RestaurantMenuCard title={item?.card?.info?.name} />;
        //   // return item?.card?.info?.name;
        // });
        // return Items;
      })}
    </div>
  );
};
export default RestaurantMenu;
