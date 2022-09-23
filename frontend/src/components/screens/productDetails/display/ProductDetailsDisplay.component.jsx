import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../../../actions/productsActions";

import {
  ProductDetailsDisplayStyles,
  ProductDetailsDisplayHeader,
  ProductDetailsDisplayParagraph,
  ProductDetailsDisplayImage,
  ProductDetailsDisplayCirclesGrid,
  ProductDetailsDisplayCircles,
} from "./ProductDetailsDisplay.styles";

import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";

import DisplayImage from "../../../../images/productDetails/display/Display Watch.jpg";

function ProductDetailsDisplay() {
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
        <ProductDetailsDisplayStyles>
          <ProductDetailsDisplayHeader>
            The Oyster Perpetual {product.name} in 18 ct yellow gold with a
            bright black dial and an Oyster bracelet.
          </ProductDetailsDisplayHeader>
          <ProductDetailsDisplayParagraph>
            This distinctive watch is characterized by its second time zone
            display on an off-centre disc on the dial. Furthermore, its
            innovative system for setting the functions, using the rotatable
            Ring Command bezel, is unique to Rolex.
          </ProductDetailsDisplayParagraph>
          <ProductDetailsDisplayImage src={DisplayImage} />
          <ProductDetailsDisplayCirclesGrid>
            <ProductDetailsDisplayCircles />
            <ProductDetailsDisplayCircles />
            <ProductDetailsDisplayCircles />
            <ProductDetailsDisplayCircles />
          </ProductDetailsDisplayCirclesGrid>
        </ProductDetailsDisplayStyles>
      )}
    </>
  );
}

export default ProductDetailsDisplay;
