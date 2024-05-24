import { useState } from "react";

const Profile = ({ name, surname }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Functional componenet</h1>
      <h1>Surname : {surname}</h1>
      <h1>Name : {name}</h1>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Incrmenter
      </button>
    </div>
  );
};
export default Profile;
