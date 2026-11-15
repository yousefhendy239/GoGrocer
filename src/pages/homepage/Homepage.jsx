import Introduction from "../../components/homepage/Introduction";
import Shopbycategoreis from "../../components/homepage/Shopbycategoreis";
import Favouritproducts from "../../components/homepage/Favouritproducts";
import Marketbox from "../../components/homepage/Marketbox";

const Homepage = ({ onAdd }) => {
  return (
    <div className="p-3.5 bg-background">
      <Introduction />
      <Shopbycategoreis />
      <Favouritproducts onAdd={onAdd} />
      <Marketbox />
    </div>
  );
};

export default Homepage;
