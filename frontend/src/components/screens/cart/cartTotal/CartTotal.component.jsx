import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CartTotalStyles,
  CartButtonsGrid,
  CheckoutButton,
  ContinueShoppingButton,
  SubtotalGrid,
  SubtotalText,
  SubtotalAmount,
} from "./CartTotal.styles";

function CartTotal() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const navigate = useNavigate()

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping")
  }

  return (
    <CartTotalStyles>
      <CartButtonsGrid>
        <CheckoutButton disabled={cartItems.length === 0} onClick={checkoutHandler}>
          Checkout
        </CheckoutButton>
        <Link to="/products">
          <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
        </Link>
      </CartButtonsGrid>
      <SubtotalGrid>
        <SubtotalText>Sub Total</SubtotalText>
        <SubtotalAmount>
          ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
        </SubtotalAmount>
      </SubtotalGrid>
    </CartTotalStyles>
  );
}

export default CartTotal;
