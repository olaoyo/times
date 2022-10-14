import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../message/Message.component";

import {
  // Shipping & Payment Method
  PlaceOrderStyles,
  PlaceOrderDetailsGrid,
  PlaceOrderAndPaymentDetailsGrid,
  PlaceOrderPlaceOrderAndLineGrid,
  PlaceOrderPlaceOrder,
  PlaceOrderPaymentMethod,
  PlaceOrderHeader,
  PlaceOrderParagraph,
  PlaceOrderLine,

  // Watches, Qty & Price
  PlaceOrderWatchesAndLineGrid,
  PlaceOrderWatchesGrid,
  PlaceOrderWatchImage,
  PlaceOrderWatchName,
  PlaceOrderQtyAndPriceGrid,
  PlaceOrderQtyAndPrice,

  // Order Summary
  PlaceOrderSummaryGrid,
  PlaceOrderSummaryContentGrid,
  PlaceOrderSummaryHeader,
  PlaceOrderSummaryParagraphGrid,
  PlaceOrderSummaryParagraph,
  PlaceOrderSummaryAmount,
  PlaceOrderSummaryLine,
  PlaceOrderSummaryButton,
} from "./PlaceOrder.styles";
import CheckoutSteps from "../../../checkoutSteps/CheckoutSteps.component";
import { createOrder } from "../../../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../../../constants/orderConstants";

function PlaceOrder() {

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;

  const dispatch = useDispatch();
  
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  cart.watchesPrice = cart.cartItems.reduce((acc, watch) => acc + watch.price * watch.qty, 0).toFixed(0);

  cart.shippingPrice = (cart.watchesPrice > 10000 ? 0 : 2000).toFixed(0);

  cart.taxPrice = +((0.05) * cart.watchesPrice).toFixed(0)

  cart.totalPrice = (+(cart.watchesPrice) + +(cart.shippingPrice) + +(cart.taxPrice)).toFixed(0);

  const paymentMethodFromStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : `Payment method missing. Please go back to "Payment" to select an option`;

  const paymentMethod = paymentMethodFromStorage;
  
  useEffect(() => {
    if(success) {
      navigate(`/order/${order._id}`)
      dispatch({ type: ORDER_CREATE_RESET })
    }
  }, [success, navigate])

  const placeOrder = () => {
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: paymentMethod,
      watchesPrice: cart.watchesPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    }));
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />

      {/* SHIPPING & PAYMENT METHOD */}

      <PlaceOrderStyles>
        <PlaceOrderDetailsGrid>
          <PlaceOrderPlaceOrderAndLineGrid>
            <PlaceOrderAndPaymentDetailsGrid>
              <PlaceOrderPlaceOrder>
                <PlaceOrderHeader>Place Order</PlaceOrderHeader>
                <PlaceOrderParagraph>
                  Shipping: {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{" "}
                  {cart.shippingAddress.country}
                </PlaceOrderParagraph>
              </PlaceOrderPlaceOrder>
              <PlaceOrderPaymentMethod>
                <PlaceOrderHeader>Payment Method</PlaceOrderHeader>
                <PlaceOrderParagraph>
                  Method: {paymentMethod}
                </PlaceOrderParagraph>
              </PlaceOrderPaymentMethod>
            </PlaceOrderAndPaymentDetailsGrid>

            <PlaceOrderLine>&nbsp;</PlaceOrderLine>
          </PlaceOrderPlaceOrderAndLineGrid>

          {/* WATCHES, QTY & PRICE */}

          {cart.cartItems.length === 0 ? (
            <Message>Your cart is empty</Message>
          ) : (
            <>
              {cart.cartItems.map((watch, index) => (
                <PlaceOrderWatchesAndLineGrid key={index}>
                  <PlaceOrderWatchesGrid>
                    <PlaceOrderWatchImage
                      src={watch.image}
                      alt={watch.name}
                    />
                    <PlaceOrderWatchName>
                      <Link to={`/products/${watch.product}`}>
                        {watch.name}
                      </Link>
                    </PlaceOrderWatchName>
                    <PlaceOrderQtyAndPriceGrid>
                      <PlaceOrderQtyAndPrice>
                        {watch.qty}
                      </PlaceOrderQtyAndPrice>
                      <PlaceOrderQtyAndPrice>x</PlaceOrderQtyAndPrice>
                      <PlaceOrderQtyAndPrice>
                        $ {(watch.qty * watch.price).toFixed(0)}
                      </PlaceOrderQtyAndPrice>
                    </PlaceOrderQtyAndPriceGrid>
                  </PlaceOrderWatchesGrid>
                  <PlaceOrderLine>&nbsp;</PlaceOrderLine>
                </PlaceOrderWatchesAndLineGrid>
              ))}
            </>
          )}
        </PlaceOrderDetailsGrid>

        {/* ORDER SUMMARY */}

        <PlaceOrderSummaryGrid>
          <PlaceOrderSummaryContentGrid>
            <PlaceOrderSummaryHeader>Order Summary</PlaceOrderSummaryHeader>
            <PlaceOrderSummaryLine>&nbsp;</PlaceOrderSummaryLine>
          </PlaceOrderSummaryContentGrid>

          <PlaceOrderSummaryContentGrid>
            <PlaceOrderSummaryParagraphGrid>
              <PlaceOrderSummaryParagraph>
                Watches:
              </PlaceOrderSummaryParagraph>
              <PlaceOrderSummaryAmount>${cart.watchesPrice}</PlaceOrderSummaryAmount>
            </PlaceOrderSummaryParagraphGrid>
            <PlaceOrderSummaryLine>&nbsp;</PlaceOrderSummaryLine>
          </PlaceOrderSummaryContentGrid>

          <PlaceOrderSummaryContentGrid>
            <PlaceOrderSummaryParagraphGrid>
              <PlaceOrderSummaryParagraph>
                Shipping:
              </PlaceOrderSummaryParagraph>
              <PlaceOrderSummaryAmount>${cart.shippingPrice}</PlaceOrderSummaryAmount>
            </PlaceOrderSummaryParagraphGrid>
            <PlaceOrderSummaryLine>&nbsp;</PlaceOrderSummaryLine>
          </PlaceOrderSummaryContentGrid>

          <PlaceOrderSummaryContentGrid>
            <PlaceOrderSummaryParagraphGrid>
              <PlaceOrderSummaryParagraph>Tax (5%):</PlaceOrderSummaryParagraph>
              <PlaceOrderSummaryAmount>${cart.taxPrice}</PlaceOrderSummaryAmount>
            </PlaceOrderSummaryParagraphGrid>
            <PlaceOrderSummaryLine>&nbsp;</PlaceOrderSummaryLine>
          </PlaceOrderSummaryContentGrid>

          <PlaceOrderSummaryContentGrid>
            <PlaceOrderSummaryParagraphGrid>
              <PlaceOrderSummaryParagraph>
                <strong>Total:</strong>
              </PlaceOrderSummaryParagraph>
              <PlaceOrderSummaryAmount>
                <strong>${cart.totalPrice}</strong>
              </PlaceOrderSummaryAmount>
            </PlaceOrderSummaryParagraphGrid>
            <PlaceOrderSummaryLine>&nbsp;</PlaceOrderSummaryLine>
          </PlaceOrderSummaryContentGrid>

          <>{error && <Message>{error}</Message>}</>

          <PlaceOrderSummaryButton type="button" disabled={cart.cartItems === 0} onClick={placeOrder}>
            Place Order
          </PlaceOrderSummaryButton>
        </PlaceOrderSummaryGrid>
      </PlaceOrderStyles>
    </>
  );
}

export default PlaceOrder;
