import { useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../../../message/Message.component";
import { addToCart } from "../../../../actions/cartActions";

function Cart() {
  const { productId } = useParams();
  const location = useLocation();
  const qty = location.search ? +location.search.split("=")[1] : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("cartItems:", cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
}

export default Cart;
