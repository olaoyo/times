import { useState, useEffect } from "react";

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

import axios from "axios";

function ProductDetailsHero() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);

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
