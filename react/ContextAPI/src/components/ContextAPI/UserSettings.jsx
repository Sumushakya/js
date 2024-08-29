import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserSettings = () => {
  const { user, setUser } = useContext(UserContext);

  const handleIncrease = () => {
    setUser({ ...user, age: parseInt(user.age) + 1 });
  };
  const handleDecrease = () => {
    setUser({ ...user, age: parseInt(user.age) - 1 });
  };
  return (
    <div>
      <h1>User Settings</h1>
      <button onClick={handleIncrease}>Increase Age</button>
      <button onClick={handleDecrease}>Decrease Age</button>
    </div>
  );
};

export default UserSettings;
