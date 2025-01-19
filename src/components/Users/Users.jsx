import { useLoaderData } from "react-router";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Fantastic and Amazing Users!!</p>
      <div className="user">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
