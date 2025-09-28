import Header from "../components/Header";
import TopBar from "../components/Topbar";
import ChooseUs from "../components/chooseus";
import Footer from "../components/footer";
import Mensection from "../components/mensection";
import HacFoods from "../components/hacFoodsHero";


const Category = () => {
  return (
    <div className="bg-white">
        <TopBar/>
        <Header />
        <HacFoods showHeading={false}/>
       
        <ChooseUs />
        <Footer />
    </div>
  );
};

export default Category;
