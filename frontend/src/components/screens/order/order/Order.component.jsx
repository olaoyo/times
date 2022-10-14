import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
} from "./Order.styles";
import { getOrderDetails } from "../../../../actions/orderActions";

function Order() {
  const { orderId } = useParams()
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;


  if (!loading && !error) {
      order.watchesPrice = order.orderItems.reduce((acc, watch) => acc + watch.price * watch.qty, 0).toFixed(0);
  }
  
  useEffect(() => {
    if (!order || order._id !== +orderId) {
        dispatch(getOrderDetails(orderId));
    }       
  }, [dispatch, order, orderId])


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
                Name:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>{order.user.name}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>
                Email:
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
                Shipping:
              </OrderSummaryParagraph>
              <OrderSummaryAmount>${order.shippingPrice}</OrderSummaryAmount>
            </OrderSummaryParagraphGrid>
            <OrderSummaryLine>&nbsp;</OrderSummaryLine>
          </OrderSummaryContentGrid>

          <OrderSummaryContentGrid>
            <OrderSummaryParagraphGrid>
              <OrderSummaryParagraph>Tax (5%):</OrderSummaryParagraph>
              <OrderSummaryAmount>${order.taxPrice}</OrderSummaryAmount>
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

        </OrderSummaryGrid>
      </OrderStyles>
    </>
  );
}

export default Order;
