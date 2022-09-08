import React from "react";
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
} from "./ProductCard.styles";

function ProductCard({ product }) {
  return (
    <Card>
      <a href={`/product/${product._id}`}>
        <CardImage src={product.image} alt={product.brand} />
      </a>
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
