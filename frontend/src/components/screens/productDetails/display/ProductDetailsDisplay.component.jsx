import { useParams } from "react-router-dom";

import {
  ProductDetailsDisplayStyles,
  ProductDetailsDisplayHeader,
  ProductDetailsDisplayParagraph,
  ProductDetailsDisplayImage,
  ProductDetailsDisplayCirclesGrid,
  ProductDetailsDisplayCircles
} from "./ProductDetailsDisplay.styles";

import products from "../../../../products";

import DisplayImage from "../../../../images/productDetails/display/Display Watch.jpg";

function ProductDetailsDisplay() {
  const { productId } = useParams();
  const product = products.find((product) => product._id === productId);

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
