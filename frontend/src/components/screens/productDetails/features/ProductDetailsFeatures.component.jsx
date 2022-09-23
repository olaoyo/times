import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../../../actions/productsActions";

import {
  ProductDetailsFeaturesStyles,
  ProductDetailsFeaturesHeader,
  ProductDetailsFeaturesParagraph,
  ProductDetailsFeaturesPartsGrid,
  ProductDetailsFeaturesContentGrid,
  ProductDetailsFeaturesImage,
  ProductDetailsFeaturesImageHeader,
  ProductDetailsFeaturesImageParagraph,
} from "./ProductDetailsFeatures.styles";

import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";

import FeatureImage1 from "../../../../images/productDetails/features/Feature_1.jpg";
import FeatureImage2 from "../../../../images/productDetails/features/Feature_2.jpg";
import FeatureImage3 from "../../../../images/productDetails/features/Feature_3.jpg";

function ProductDetailsFeatures() {
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
        <ProductDetailsFeaturesStyles>
          <ProductDetailsFeaturesHeader>
            FEATURES OF THIS MODEL
          </ProductDetailsFeaturesHeader>
          <ProductDetailsFeaturesParagraph>
            {product.description}
          </ProductDetailsFeaturesParagraph>
          <ProductDetailsFeaturesPartsGrid>
            <ProductDetailsFeaturesContentGrid>
              <ProductDetailsFeaturesImage src={FeatureImage1} />
              <ProductDetailsFeaturesImageHeader>
                The Fluted Bezel
              </ProductDetailsFeaturesImageHeader>
              <ProductDetailsFeaturesImageParagraph>
                What looked like a small patch.
              </ProductDetailsFeaturesImageParagraph>
            </ProductDetailsFeaturesContentGrid>
            <ProductDetailsFeaturesContentGrid>
              <ProductDetailsFeaturesImage src={FeatureImage2} />
              <ProductDetailsFeaturesImageHeader>
                18 CT Gold
              </ProductDetailsFeaturesImageHeader>
              <ProductDetailsFeaturesImageParagraph>
                Commitment To Excellence.
              </ProductDetailsFeaturesImageParagraph>
            </ProductDetailsFeaturesContentGrid>
            <ProductDetailsFeaturesContentGrid>
              <ProductDetailsFeaturesImage src={FeatureImage3} />
              <ProductDetailsFeaturesImageHeader>
                The Leather Bracelet
              </ProductDetailsFeaturesImageHeader>
              <ProductDetailsFeaturesImageParagraph>
                Alchemy Of Form & Function.
              </ProductDetailsFeaturesImageParagraph>
            </ProductDetailsFeaturesContentGrid>
          </ProductDetailsFeaturesPartsGrid>
        </ProductDetailsFeaturesStyles>
      )}
    </>
  );
}

export default ProductDetailsFeatures;
