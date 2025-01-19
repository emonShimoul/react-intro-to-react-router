import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2>Details of: {name}</h2>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
