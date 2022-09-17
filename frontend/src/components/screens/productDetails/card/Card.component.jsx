import ProductCard from "../../../cards/productCardDetails/ProductCardDetails.component"

function ProductCardL1() {
  return (
    <ProductCard />
  )
}

export default ProductCardL1
/*
import { Link, useParams } from "react-router-dom";

import {
  Card,
  CardImage,
  CardDetails,
  WatchNameAndPrice,
  WatchName,
  WatchPrice,
  WatchDescription,
  Buttons,
  BuyNowButton,
  AddToCartButton,
} from "./Card.styles";

import products from "../../../../products";

function ProductCard() {
  const { productId } = useParams();

  console.log(productId);

  const product = products.find((p) => p._id === productId);

  return (
    <Card>
      <CardImage src={product.image} alt={product.brand} />
      <CardDetails>
        <WatchNameAndPrice>
          <WatchName>{product.name}</WatchName>
          <WatchPrice>${product.price}</WatchPrice>
        </WatchNameAndPrice>
        <WatchDescription>{product.description}</WatchDescription>
        <Buttons>
          <BuyNowButton>BUY NOW</BuyNowButton>
          <AddToCartButton>ADD TO CART</AddToCartButton>
        </Buttons>
      </CardDetails>
    </Card>
  );
}

export default ProductCard;
*/
