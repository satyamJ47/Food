// import logo from "../../Images/logo.jpg";
import { useState } from "react";

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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const Sign = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // console.log("Sigin");
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
    </div>
  );
};

const Header = () => {
  // console.log("header");
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
