import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      <h2>Details of: {name}</h2>
    </div>
  );
};

export default UserDetails;
