import { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  CartBodyStyles,
  CartProductGrid,
  CartProductImage,
  CartProductText,
  CartUnitPrice,
  CartQuantityGrid,
  CartQuantityChange,
  CartQuantity,
  CartPrice,
  CartDeleteItem,
} from "./CartBody.styles";

import Message from "../../../message/Message.component";
import { addToCart, removeFromCart, increaseItemQty, decreaseItemQty } from "../../../../actions/cartActions";

function CartBody() {
  const { productId } = useParams();
  // const location = useLocation();
  // const qty = location.search ? +location.search.split("=")[1] : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, 1));
  //   }
  // }, [dispatch, productId]);

  const increaseQtyHandler = (id) => {
    dispatch(increaseItemQty(id));
  };

  const decreaseQtyHandler = (id) => {
    dispatch(decreaseItemQty(id));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <>
      {cartItems.length === 0 ? (
        <Message>Your cart is empty </Message>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartBodyStyles key={item.product}>
              <CartProductGrid>
                {/* BUG Link increases div size. to={`/products/${item._id}`} (orproductId do not work*/}
                <CartProductImage src={item.image} />
                <CartProductText>{item.name}</CartProductText>
              </CartProductGrid>
              <CartUnitPrice>${item.price}</CartUnitPrice>
              <CartQuantityGrid>
                <CartQuantityChange onClick={() => decreaseQtyHandler(item.product)}>
                  <span className="material-symbols-outlined">remove</span>
                </CartQuantityChange>
                <CartQuantity
                  value={item.qty}
                >
                  {item.qty}
                </CartQuantity>
                <CartQuantityChange onClick={() => increaseQtyHandler(item.product)}>
                  <span className="material-symbols-outlined">add</span>
                </CartQuantityChange>
              </CartQuantityGrid>
              <CartPrice>${(item.qty * item.price)}</CartPrice>
              <CartDeleteItem onClick={() => removeFromCartHandler(item.product)}>
                <span className="material-symbols-outlined">delete</span>
              </CartDeleteItem>
            </CartBodyStyles>
          ))}
        </>
      )}
    </>
  );
}

export default CartBody;
