import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../message/Message.component";

import {
  // Shipping & Payment Method
  PlaceOrderStyles,
  ProductOrderDetailsGrid,
  ProductOrderAndPaymentDetailsGrid,
  ProductOrderPlaceOrderAndLineGrid,
  ProductOrderPlaceOrder,
  ProductOrderPaymentMethod,
  ProductOrderHeader,
  ProductOrderParagraph,
  ProductOrderLine,

  // Watches, Qty & Price
  ProductOrderWatchesAndLineGrid,
  ProductOrderWatchesGrid,
  ProductOrderWatchImage,
  ProductOrderWatchName,
  ProductOrderQtyAndPriceGrid,
  ProductOrderQtyAndPrice,

  // Order Summary
  ProductOrderSummaryGrid,
  ProductOrderSummaryContentGrid,
  ProductOrderSummaryHeader,
  ProductOrderSummaryParagraphGrid,
  ProductOrderSummaryParagraph,
  ProductOrderSummaryAmount,
  ProductOrderSummaryLine,
  ProductOrderSummaryButton,
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
        <ProductOrderDetailsGrid>
          <ProductOrderPlaceOrderAndLineGrid>
            <ProductOrderAndPaymentDetailsGrid>
              <ProductOrderPlaceOrder>
                <ProductOrderHeader>Place Order</ProductOrderHeader>
                <ProductOrderParagraph>
                  Shipping: {cart.shippingAddress.address},{" "}
                  {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{" "}
                  {cart.shippingAddress.country}
                </ProductOrderParagraph>
              </ProductOrderPlaceOrder>
              <ProductOrderPaymentMethod>
                <ProductOrderHeader>Payment Method</ProductOrderHeader>
                <ProductOrderParagraph>
                  Method: {paymentMethod}
                </ProductOrderParagraph>
              </ProductOrderPaymentMethod>
            </ProductOrderAndPaymentDetailsGrid>

            <ProductOrderLine>&nbsp;</ProductOrderLine>
          </ProductOrderPlaceOrderAndLineGrid>

          {/* WATCHES, QTY & PRICE */}

          {cart.cartItems.length === 0 ? (
            <Message>Your cart is empty</Message>
          ) : (
            <>
              {cart.cartItems.map((watch, index) => (
                <ProductOrderWatchesAndLineGrid key={index}>
                  <ProductOrderWatchesGrid>
                    <ProductOrderWatchImage
                      src={watch.image}
                      alt={watch.name}
                    />
                    <ProductOrderWatchName>
                      <Link to={`/products/${watch.product}`}>
                        {watch.name}
                      </Link>
                    </ProductOrderWatchName>
                    <ProductOrderQtyAndPriceGrid>
                      <ProductOrderQtyAndPrice>
                        {watch.qty}
                      </ProductOrderQtyAndPrice>
                      <ProductOrderQtyAndPrice>x</ProductOrderQtyAndPrice>
                      <ProductOrderQtyAndPrice>
                        $ {(watch.qty * watch.price).toFixed(0)}
                      </ProductOrderQtyAndPrice>
                    </ProductOrderQtyAndPriceGrid>
                  </ProductOrderWatchesGrid>
                  <ProductOrderLine>&nbsp;</ProductOrderLine>
                </ProductOrderWatchesAndLineGrid>
              ))}
            </>
          )}
        </ProductOrderDetailsGrid>

        {/* ORDER SUMMARY */}

        <ProductOrderSummaryGrid>
          <ProductOrderSummaryContentGrid>
            <ProductOrderSummaryHeader>Order Summary</ProductOrderSummaryHeader>
            <ProductOrderSummaryLine>&nbsp;</ProductOrderSummaryLine>
          </ProductOrderSummaryContentGrid>

          <ProductOrderSummaryContentGrid>
            <ProductOrderSummaryParagraphGrid>
              <ProductOrderSummaryParagraph>
                Watches:
              </ProductOrderSummaryParagraph>
              <ProductOrderSummaryAmount>${cart.watchesPrice}</ProductOrderSummaryAmount>
            </ProductOrderSummaryParagraphGrid>
            <ProductOrderSummaryLine>&nbsp;</ProductOrderSummaryLine>
          </ProductOrderSummaryContentGrid>

          <ProductOrderSummaryContentGrid>
            <ProductOrderSummaryParagraphGrid>
              <ProductOrderSummaryParagraph>
                Shipping:
              </ProductOrderSummaryParagraph>
              <ProductOrderSummaryAmount>${cart.shippingPrice}</ProductOrderSummaryAmount>
            </ProductOrderSummaryParagraphGrid>
            <ProductOrderSummaryLine>&nbsp;</ProductOrderSummaryLine>
          </ProductOrderSummaryContentGrid>

          <ProductOrderSummaryContentGrid>
            <ProductOrderSummaryParagraphGrid>
              <ProductOrderSummaryParagraph>Tax (5%):</ProductOrderSummaryParagraph>
              <ProductOrderSummaryAmount>${cart.taxPrice}</ProductOrderSummaryAmount>
            </ProductOrderSummaryParagraphGrid>
            <ProductOrderSummaryLine>&nbsp;</ProductOrderSummaryLine>
          </ProductOrderSummaryContentGrid>

          <ProductOrderSummaryContentGrid>
            <ProductOrderSummaryParagraphGrid>
              <ProductOrderSummaryParagraph>
                <strong>Total:</strong>
              </ProductOrderSummaryParagraph>
              <ProductOrderSummaryAmount>
                <strong>${cart.totalPrice}</strong>
              </ProductOrderSummaryAmount>
            </ProductOrderSummaryParagraphGrid>
            <ProductOrderSummaryLine>&nbsp;</ProductOrderSummaryLine>
          </ProductOrderSummaryContentGrid>

          <>{error && <Message>{error}</Message>}</>

          <ProductOrderSummaryButton type="button" disabled={cart.cartItems === 0} onClick={placeOrder}>
            Place Order
          </ProductOrderSummaryButton>
        </ProductOrderSummaryGrid>
      </PlaceOrderStyles>
    </>
  );
}

export default PlaceOrder;
