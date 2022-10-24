import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  OrderListStyles,
  OrderListGrid,
  OrderListHeader,
  OrderListContentGrid,
  OrderListTableHead,
  TableHead,
  OrderListTableBody,
  TableBody,
  TableBodyIcon,
  OrderListButton,
  OrderListLineGrid,
  OrderListLine,
} from "./OrderList.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { listOrders } from "../../../../actions/orderActions";


function OrderList() {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login")
    }
  }, [dispatch, userInfo, navigate]);


  return (
    <OrderListStyles>
      <OrderListGrid>
        <OrderListHeader>Order List</OrderListHeader>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <>
            {/* TABLE HEAD */}

            <OrderListContentGrid>
              <OrderListTableHead>
                <TableHead>ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Delivered</TableHead>
                <TableHead>Details</TableHead>
              </OrderListTableHead>
              <OrderListLineGrid>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
              </OrderListLineGrid>
            </OrderListContentGrid>

            {/* TABLE BODY */}

            {orders.map((order) => (
              <OrderListContentGrid key={order._id}>
                <OrderListTableBody>
                  <TableBody>{order._id}</TableBody>

                  <TableBody>{order.user && order.user.name}</TableBody>

                  <TableBody>{order.createdAt.substring(0, 10)}</TableBody>

                  <TableBody>${order.totalPrice}</TableBody>

                  <TableBody>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <TableBodyIcon>
                          <span
                            className="material-symbols-outlined"
                            // style={{ color: "#9A836C" }}
                          >
                            close
                          </span>
                      </TableBodyIcon>
                    )}
                  </TableBody>
                  
                  <TableBody>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <TableBodyIcon>
                        <span
                          className="material-symbols-outlined"
                          // style={{ color: "#9A836C" }}
                        >
                          close
                        </span>
                      </TableBodyIcon>
                    )}
                  </TableBody>

                  <Link to={`/order/${order._id}`}>
                    <OrderListButton>
                      Details
                    </OrderListButton>
                  </Link>

                </OrderListTableBody>
                <OrderListLineGrid>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
                <OrderListLine>&nbsp;</OrderListLine>
              </OrderListLineGrid>
              </OrderListContentGrid>
            ))}
          </>
        )}
      </OrderListGrid>
    </OrderListStyles>
  );
}

export default OrderList;
