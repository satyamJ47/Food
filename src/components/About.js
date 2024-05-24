import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>Ratatouille is here for finding best food for you!!!</p>
      <Link to={"profile"}>
        <h1>Profile</h1>
        <Outlet />
      </Link>
      {/* <Profile name={"Satyam"} surname={"Jagadale"} />
      <ProfileClass name={"Meena"} surname={"Jagadale"} /> */}
    </div>
  );
};
export default About;
