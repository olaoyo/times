import Hero from "./hero/Hero.component";
import Ref from "./ref/Ref.component";
import Stats from "./stats/Stats.component";
import FeaturesCardList from "./features/FeaturesCardList.component";
import ProductCardListHome from "../home/products/Products.component";
import Discover from "./discover/Discover.component";


function HomeScreen() {
  return (
    <>
      <Hero />
      <Ref />
      <FeaturesCardList />
      <Stats />
      <ProductCardListHome />
      <Discover />
    </>
  );
}

export default HomeScreen;
