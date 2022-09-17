import { useParams } from "react-router-dom";

import {
  ProductDetailsAssembleStyles,
  ProductDetailsAssembleImage,
  ProductDetailsAssembleText,
  ProductDetailsAssembleHeader,
  ProductDetailsAssembleParagraph,
  ProductDetailsAssembleButtonGrid,
  ProductDetailsAssembleButton,
} from "./ProductDetailsAssemble.styles";

import AssembleImage from "../../../../images/productDetails/assemble/Assemble Watch.jpg";

import products from "../../../../products";

function ProductDetailsAssemble() {
  const { productId } = useParams();
  const product = products.find((product) => product._id === productId);

  return (
    <ProductDetailsAssembleStyles>
      <ProductDetailsAssembleImage src={AssembleImage} />
      <ProductDetailsAssembleText>
        <ProductDetailsAssembleHeader>
          How To Assemble {product.name}
        </ProductDetailsAssembleHeader>
        <ProductDetailsAssembleParagraph>
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction. Almost do am or
          limits hearts. Resolve parties but why she shewing. She sang know now
          how nay cold real case.
        </ProductDetailsAssembleParagraph>
        <ProductDetailsAssembleButtonGrid>
          <ProductDetailsAssembleButton>
            FULL VIDEO
          </ProductDetailsAssembleButton>
          <span className="material-symbols-outlined">trending_flat</span>
        </ProductDetailsAssembleButtonGrid>
      </ProductDetailsAssembleText>
    </ProductDetailsAssembleStyles>
  );
}

export default ProductDetailsAssemble;
