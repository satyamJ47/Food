// import logo from "../../Images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://cdnb.artstation.com/p/assets/images/images/041/081/239/large/vivien-kecskes-ratatouille-04.jpg?1630690912\"
      alt="Logo"
      class="border w-28"
    />
  );
};

const Title = () => {
  return (
    <h1 class="border border-red-500 font-bold font-sans text-6xl ">
      Ratatouille
    </h1>
  );
};

const NavList = () => {
  return (
    <div>
      <ul class="flex w-64 border border-orange-400 justify-between">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

// reason why should we not create functional componenet inside a functional component
// const XYZ = () => {
//   const [toggle, setToggle] = useState(false);
//   console.log("xyz");
//   return (
//     <div>
//       {toggle ? (
//         <button
//           onClick={() => {
//             setToggle(false);
//           }}
//         >
//           RED
//         </button>
//       ) : (
//         <button
//           onClick={() => {
//             setToggle(true);
//           }}
//         >
//           BLUE
//         </button>
//       )}
//     </div>
//   );
// };

const Sign = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log("Sigin");

  return (
    <div class="w-20">
      {isSignedIn ? (
        <div>
          <button onClick={() => setIsSignedIn(false)}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsSignedIn(true)}>Sign In</button>
        </div>
      )}
      {/* <XYZ /> */}
    </div>
  );
};

const Header = () => {
  console.log("header");
  return (
    <div class="border border-black flex p-1 justify-between items-center">
      <Logo />
      <Title />
      <NavList />
      <Sign />
    </div>
  );
};

export default Header;
