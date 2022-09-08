import { ProductCardListStyles } from "./ProductCardList.styles";
import ProductCard from "./ProductCard.component";
import products from "../../products";

function ProductCardList() {
  return (
    <ProductCardListStyles>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductCardListStyles>
  );
}

export default ProductCardList;
