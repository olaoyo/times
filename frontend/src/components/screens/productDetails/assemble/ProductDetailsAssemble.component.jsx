import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../../../actions/productsActions";

import {
  ProductDetailsAssembleStyles,
  ProductDetailsAssembleImage,
  ProductDetailsAssembleText,
  ProductDetailsAssembleHeader,
  ProductDetailsAssembleParagraph,
  ProductDetailsAssembleButtonGrid,
  ProductDetailsAssembleButton,
} from "./ProductDetailsAssemble.styles";

import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";

import AssembleImage from "../../../../images/productDetails/assemble/Assemble Watch.jpg";

function ProductDetailsAssemble() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <ProductDetailsAssembleStyles>
          <ProductDetailsAssembleImage src={AssembleImage} />
          <ProductDetailsAssembleText>
            <ProductDetailsAssembleHeader>
              How To Assemble {product.name}
            </ProductDetailsAssembleHeader>
            <ProductDetailsAssembleParagraph>
              What looked like a small patch of purple grass, above five feet
              square, was moving across the sand in their direction. Almost do
              am or limits hearts. Resolve parties but why she shewing. She sang
              know now how nay cold real case.
            </ProductDetailsAssembleParagraph>
            <ProductDetailsAssembleButtonGrid>
              <ProductDetailsAssembleButton>
                FULL VIDEO
              </ProductDetailsAssembleButton>
              <span className="material-symbols-outlined">trending_flat</span>
            </ProductDetailsAssembleButtonGrid>
          </ProductDetailsAssembleText>
        </ProductDetailsAssembleStyles>
      )}
    </>
  );
}

export default ProductDetailsAssemble;
