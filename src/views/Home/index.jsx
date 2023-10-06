/**
 *
 * @returns Home Page
 */
import "./index.scss";
import Navbar from "@/views/Home/components/Navbar/index";
import LeftTreeList from "@/views/Home/components/TreeList/index";
import SelectionMain from "@/views/Home/components/SelectionMain/index";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-container">
        <LeftTreeList />
        <SelectionMain />
      </div>
    </div>
  );
};

export default Home;
