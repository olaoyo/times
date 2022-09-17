import { useParams } from "react-router-dom";

import {
  ProductDetailsHeroStyles,
  ProductDetailsHeroText,
  ProductDetailsHeroParagraphGold,
  ProductDetailsHeroHeader,
  ProductDetailsHeroParagraphGrey,
  ProductDetailsHeroImage,
  ProductDetailsWatchImage,
} from "./ProductDetailsHero.styles";

import products from "../../../../products";

function ProductDetailsHero() {
  const { productId } = useParams();
  const product = products.find((product) => product._id === productId);
  return (
    <ProductDetailsHeroStyles>
      <ProductDetailsHeroText>
        <ProductDetailsHeroParagraphGold>
          Classic Watches
        </ProductDetailsHeroParagraphGold>
        <ProductDetailsHeroHeader>{product.name}</ProductDetailsHeroHeader>
        <ProductDetailsHeroParagraphGrey>
          {product.description}
        </ProductDetailsHeroParagraphGrey>
      </ProductDetailsHeroText>
      <ProductDetailsHeroImage>
        <ProductDetailsWatchImage src={product.imageDetails} />
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ProductDetailsHeroImage>
    </ProductDetailsHeroStyles>
  );
}

export default ProductDetailsHero;
