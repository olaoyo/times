import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import Message from "../../../message/Message.component";
import MessageSmall from "../../../messageSmall/MessageSmall.component";
import Loader from "../../../loader/Loader.component"

import {
  // Shipping & Payment Method
  OrderStyles,
  OrderDetailsGrid,
  OrderAndPaymentDetailsGrid,
  OrderPlaceOrderAndLineGrid,
  OrderPlaceOrder,
  OrderPaymentMethod,
  OrderHeader,
  OrderParagraph,
  OrderLine,

  // Watches, Qty & Price
  OrderWatchesAndLineGrid,
  OrderWatchesGrid,
  OrderWatchImage,
  OrderWatchName,
  OrderQtyAndPriceGrid,
  OrderQtyAndPrice,

  // Order Summary
  OrderSummaryGrid,
  OrderSummaryContentGrid,
  OrderSummaryHeader,
  OrderSummaryParagraphGrid,
  OrderSummaryParagraph,
  OrderSummaryAmount,
  OrderSummaryLine,
  OrderSummaryPaymentGrid,
} from "./Order.styles";
import { getOrderDetails, payOrder } from "../../../../actions/orderActions";
import { ORDER_PAY_RESET } from "../../../../constants/orderConstants";

function Order() {
  const { orderId } = useParams()
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading && !error) {
      order.watchesPrice = order.orderItems.reduce((acc, watch) => acc + watch.price * watch.qty, 0).toFixed(0);
  }


  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.paypal.com/sdk/js?client-id=AYCfdSRtazqRIpFpdQhabvrvafA-VWO7tb0-lwtc7lCdZNQaGBPnXaIpZduIc4jjW6POPo-borhesW30";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    }
    document.body.appendChild(script);
  }

  
  useEffect(() => {
    if (!order || successPay || order._id !== +orderId) {
        dispatch({ type: ORDER_PAY_RESET });
        dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }      
  }, [dispatch, order, orderId, successPay]);


  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  }


  return loading ? (
    <Loader />
  ) : error ? (
    <>
        <Message>This order does not exist</Message>
        <Message>{error}</Message>
    </>
  ) : (
    <>  

      {/* SHIPPING & PAYMENT METHOD */}

      <OrderStyles>
        <OrderDetailsGrid>
          <OrderPlaceOrderAndLineGrid>
            <OrderAndPaymentDetailsGrid>
              <OrderPlaceOrder>
                <OrderHeader>Place Order</OrderHeader>
                <OrderParagraph>
                  Shipping: {order.shippingAddress.address},{" "}
                  {order.shippingAddress.city} {order.shippingAddress.postalCode},{" "}
                  {order.shippingAddress.country}
                </OrderParagraph>
              </OrderPlaceOrder>
              <OrderPaymentMethod>
                <OrderHeader>Payment Method</OrderHeader>
                <OrderParagraph>
                  Method: {order.paymentMethod}
                </OrderParagraph>
              </OrderPaymentMethod>
            </OrderAndPaymentDetailsGrid>

            <OrderLine>&nbsp;</OrderLine>
          </OrderPlaceOrderAndLineGrid>

          {/* WATCHES, QTY & PRICE */}

          {order.orderItems.length === 0 ? (
            <MessageSmall>You have no orders</MessageSmall>
          ) : (
            <>
              {order.orderItems.map((watch, index) => (
                <OrderWatchesAndLineGrid key={index}>
                  <OrderWatchesGrid>
                    <OrderWatchImage
                      src={watch.image}
                      alt={watch.name}
                    />
                    <OrderWatchName>
                      <Link to={`/products/${watch.product}`}>
                        {watch.name}
                      </Link>
                    </OrderWatchName>
                    <OrderQtyAndPriceGrid>
                      <OrderQtyAndPrice>
                        {watch.qty}
                      </OrderQtyAndPrice>
                      <OrderQtyAndPrice>x</OrderQtyAndPrice>
                      <OrderQtyAndPrice>
                        $ {(watch.qty * watch.price).toFixed(0)}
                      </OrderQtyAndPrice>
                    </OrderQtyAndPriceGrid>
                  </OrderWatchesGrid>
                  <OrderLine>&nbsp;</OrderLine>
                </OrderWatchesAndLineGrid>
              ))}
            </>
          )}
        </OrderDetailsGrid>

        {/* ORDER SUMMARY */}

        <OrderSummaryGrid>
          <OrderSummaryContentGrid>
            <OrderSummaryHeader>Order Number: {order._id}</OrderSummaryHeader>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
              {order.user.name}
              </OrderSummaryParagraph>
              <OrderSummaryAmount>{order.user.email}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Watches:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>${order.watchesPrice}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
              Tax (5%): ${order.taxPrice}
              </OrderSummaryParagraph>
              <OrderSummaryAmount>Shipping: ${order.shippingPrice}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                <strong>Total:</strong>
              </OrderSummaryParagraph>
              <OrderSummaryAmount>
                <strong>${order.totalPrice}</strong>
              </OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>
          
          <OrderSummaryContentGrid>
            {order.isPaid ? (
              <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Paid On:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>{order.paidAt}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            ) : (
              <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Payment:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>Not Paid</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            )
              
            }
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>
          
          <OrderSummaryContentGrid>
            {order.isDelivered ? (
              <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Delivered On:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>{order.deliveredAt}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            ) : (
              <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Delivery:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>Not Delivered</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            )
              
            }
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>
          
          <OrderSummaryContentGrid>
            {!order.isPaid && (
              <OrderSummaryPaymentGrid>
              {loadingPay && <Loader />}

              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}

                 />
              )}
            </OrderSummaryPaymentGrid>
            )} 
          </OrderSummaryContentGrid>

        </OrderSummaryGrid>
      </OrderStyles>
    </>
  );
}

export default Order;
