// import ProductDetailsHero from "../../cards/productCardDetails/ProductCardDetails.component";
import ProductDetailsHero from "../productDetails/hero/ProductDetailsHero.component";
import ProductDetailsDisplay from "./display/ProductDetailsDisplay.component";
import ProductDetailsAssemble from "./assemble/ProductDetailsAssemble.component";
import ProductDetailsFeatures from "./features/ProductDetailsFeatures.component";
import ProductDetailsPurchase from "./purchase/ProductDetailsPurchase.component";
import ProductDetailsAlsoLike from "./alsoLike/ProductDetailsAlsoLike.component";
import ProductCardList from "../../cards/productCardList/ProductCardList.component";

function ProductDetailsScreen() {
  return (
    <>
      <ProductDetailsHero />
      <ProductDetailsDisplay />
      <ProductDetailsAssemble />
      <ProductDetailsFeatures />
      <ProductDetailsPurchase />
      <ProductDetailsAlsoLike />
      <ProductCardList />
    </>
  );
}

export default ProductDetailsScreen;
