import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Our Users: {users.length}</h2>
      <p>Fantastic and Amazing Users!!</p>
    </div>
  );
};

export default Users;
