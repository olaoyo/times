import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  ProductDetailsDisplayStyles,
  ProductDetailsDisplayHeader,
  ProductDetailsDisplayParagraph,
  ProductDetailsDisplayImage,
  ProductDetailsDisplayCirclesGrid,
  ProductDetailsDisplayCircles,
} from "./ProductDetailsDisplay.styles";

import axios from "axios";

import DisplayImage from "../../../../images/productDetails/display/Display Watch.jpg";

function ProductDetailsDisplay() {
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
    <ProductDetailsDisplayStyles>
      <ProductDetailsDisplayHeader>
        The Oyster Perpetual {product.name} in 18 ct yellow gold with a bright
        black dial and an Oyster bracelet.
      </ProductDetailsDisplayHeader>
      <ProductDetailsDisplayParagraph>
        This distinctive watch is characterized by its second time zone display
        on an off-centre disc on the dial. Furthermore, its innovative system
        for setting the functions, using the rotatable Ring Command bezel, is
        unique to Rolex.
      </ProductDetailsDisplayParagraph>
      <ProductDetailsDisplayImage src={DisplayImage} />
      <ProductDetailsDisplayCirclesGrid>
        <ProductDetailsDisplayCircles />
        <ProductDetailsDisplayCircles />
        <ProductDetailsDisplayCircles />
        <ProductDetailsDisplayCircles />
      </ProductDetailsDisplayCirclesGrid>
    </ProductDetailsDisplayStyles>
  );
}

export default ProductDetailsDisplay;
