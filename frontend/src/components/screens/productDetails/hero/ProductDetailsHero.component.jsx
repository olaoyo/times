import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../../../actions/productsActions";

import {
  ProductDetailsHeroStyles,
  ProductDetailsHeroText,
  ProductDetailsHeroParagraphGold,
  ProductDetailsHeroHeader,
  ProductDetailsHeroParagraphGrey,
  ProductDetailsHeroImage,
  ProductDetailsWatchImage,
  ProductDetailsHeroCirclesGrid,
  ProductDetailsHeroCircles
} from "./ProductDetailsHero.styles";

import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";

function ProductDetailsHero() {
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
            <ProductDetailsHeroCirclesGrid>
              <ProductDetailsHeroCircles />
              <ProductDetailsHeroCircles />
              <ProductDetailsHeroCircles />
              <ProductDetailsHeroCircles />
            </ProductDetailsHeroCirclesGrid>
          </ProductDetailsHeroImage>
        </ProductDetailsHeroStyles>
      )}
    </>
  );
}

export default ProductDetailsHero;
