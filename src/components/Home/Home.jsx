import { Outlet } from "react-router";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div className="w-full text-center">
      <Header></Header>
      <h2>This is Home components</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
