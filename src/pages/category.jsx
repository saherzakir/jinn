import Header from "../components/header";
import TopBar from "../components/topbar";
import ChooseUs from "../components/chooseus";
import Footer from "../components/footer";
import WomensCollection from "../components/womenscollection";
import WomensProducts from "../components/womensproducts";

// Dummy Data
const womensProducts = [
  { title: "Heels Red", category: "Women", price: 2999, image: "/images/red-heels.png" },
  { title: "Pink Slides", category: "Women", price: 1499, image: "/images/pink-slides.png" },
  { title: "Brown Sandals", category: "Women", price: 1999, image: "/images/sandals.png" },
  { title: "Pink Flats", category: "Women", price: 1599, image: "/images/pink-flats.png" },
];



const Category = () => {
  return (
    <div className="bg-white">
        <TopBar/>
        <Header />
        <WomensCollection showHeading={false}/>
      <WomensProducts isCategoryPage={true} />
        <ChooseUs />
        <Footer />
    </div>
  );
};

export default Category;
