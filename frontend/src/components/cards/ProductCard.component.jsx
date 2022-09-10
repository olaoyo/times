import { Link } from "react-router-dom";

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
      <Link to={`/product/${product._id}`}>
        <CardImage src={product.image} alt={product.brand} />
      </Link>
      <CardDetails>
        <WatchNameAndPrice>
          <Link to={`/product/${product._id}`}>
            <WatchName>{product.name}</WatchName>
          </Link>
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
