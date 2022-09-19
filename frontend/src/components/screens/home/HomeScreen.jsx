import Hero from "./hero/Hero.component";
import Ref from "./ref/Ref.component";
import Stats from "./stats/Stats.component";
import FeaturesCardList from "./features/FeaturesCardList.component";
import Categories from "./categories/Categories.component";
import ProductCardList from "../../cards/productCardList/ProductCardList.component";
import ViewAll from "./view/View.component";
import Discover from "./discover/Discover.component";


function HomeScreen() {
  return (
    <>
      <Hero />
      <Ref />
      <FeaturesCardList />
      <Stats />
      <Categories />
      <ProductCardList />
      <ViewAll />
      <Discover />
    </>
  );
}

export default HomeScreen;
