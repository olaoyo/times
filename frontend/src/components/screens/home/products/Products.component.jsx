import {
  ProductCardListStyles,
  ProductHeader,
  ProductParagraph,
  ProductCategoriesGrid,
  ProductCategoriesButton,
  ProductCardGrid,
  ProductButtonGrid,
  ProductButton,
} from "./Products.styles";
import ProductCard from "../../../cards/ProductCard.component";
import products from "../../../../products";

function ProductCardListHome() {
  return (
    <ProductCardListStyles>
      <ProductHeader>FEATURED CATEGORIES OF TIMES</ProductHeader>
      <ProductParagraph>
        What Looked Like A Small Patch Of Purple Grass, Above Five Feet Square,
        Was Moving Across The Sand In Thei.
      </ProductParagraph>
      <ProductCategoriesGrid>
        <ProductCategoriesButton>ALL TIMES</ProductCategoriesButton>
        <ProductCategoriesButton>MEN TIMES</ProductCategoriesButton>
        <ProductCategoriesButton>WOMEN TIMES</ProductCategoriesButton>
        <ProductCategoriesButton>SPORTS TIMES</ProductCategoriesButton>
        <ProductCategoriesButton>TREND TIMES</ProductCategoriesButton>
      </ProductCategoriesGrid>
      <ProductCardGrid>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ProductCardGrid>
      <ProductButtonGrid>
        <ProductButton>VIEW ALL</ProductButton>
        <span className="material-symbols-outlined">trending_flat</span>
      </ProductButtonGrid>
    </ProductCardListStyles>
  );
}

export default ProductCardListHome;
