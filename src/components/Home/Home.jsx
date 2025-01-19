import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="w-full text-center">
      <Header></Header>
      <h2>Home</h2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
