import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ProfileStyles,
  ProfileAndOrdersListGrid,
  ProfileUpdateGrid,
  ProfileUpdateHeader,
  ProfileUpdateForm,
  ProfileUpdateInputAndLabelGrid,
  ProfileUpdateLabel,
  ProfileUpdateInput,
  ProfileUpdateButton,
  OrdersListGrid,
  OrdersListHeader,
  OrdersListContentGrid,
  OrdersListTableHead,
  TableHead,
  OrdersListTableBody,
  TableBody,
  OrdersListLineGrid,
  OrdersListLine,
  OrderDetailsButton,
} from "./Profile.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { getUserDetails, updateUserProfile } from "../../../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../../constants/userConstants";
import { listMyOrders } from "../../../../actions/orderActions";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, user, userInfo, success]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Watches do not match ⌚/⏱");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };
  return (
    <>
      {message && <Message>{message}</Message>}
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <ProfileStyles>
        <ProfileAndOrdersListGrid>
          {/* PROFILE UPDATE */}

          <ProfileUpdateGrid>
            <ProfileUpdateHeader>VIP Profile</ProfileUpdateHeader>
            <ProfileUpdateForm onSubmit={submitHandler}>
              <ProfileUpdateInputAndLabelGrid>
                <ProfileUpdateLabel>Name</ProfileUpdateLabel>
                <ProfileUpdateInput
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  id="name"
                  required
                />
              </ProfileUpdateInputAndLabelGrid>
              <ProfileUpdateInputAndLabelGrid>
                <ProfileUpdateLabel>Email</ProfileUpdateLabel>
                <ProfileUpdateInput
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  id="email"
                  required
                />
              </ProfileUpdateInputAndLabelGrid>
              <ProfileUpdateInputAndLabelGrid>
                <ProfileUpdateLabel>Password</ProfileUpdateLabel>
                <ProfileUpdateInput
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                />
              </ProfileUpdateInputAndLabelGrid>
              <ProfileUpdateInputAndLabelGrid>
                <ProfileUpdateLabel>Confirm Password</ProfileUpdateLabel>
                <ProfileUpdateInput
                  type="password"
                  placeholder="Confirm Your Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  id="passwordConfirm"
                />
              </ProfileUpdateInputAndLabelGrid>
              <ProfileUpdateButton type="submit">Update</ProfileUpdateButton>
            </ProfileUpdateForm>
          </ProfileUpdateGrid>

          {/* ORDERS LIST */}

          <OrdersListGrid>
            <OrdersListHeader>My Orders</OrdersListHeader>
            {loadingOrders ? (
              <Loader />
            ) : errorOrders ? (
              <Message>{errorOrders}</Message>
            ) : (
              <>
                <OrdersListContentGrid>

                  {/* TABLE HEAD */}

                  <OrdersListTableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Paid</TableHead>
                    <TableHead>Delivered</TableHead>
                    <TableHead>View</TableHead>
                  </OrdersListTableHead>
                  <OrdersListLineGrid>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                    <OrdersListLine>&nbsp;</OrdersListLine>
                  </OrdersListLineGrid>
                </OrdersListContentGrid>

                {/* TABLE BODY */}

                {orders.map((order) => (
                  <OrdersListContentGrid key={order._id}>
                    <OrdersListTableBody>                      
                        <TableBody>{order._id}</TableBody>
                        <TableBody>
                          {order.createdAt.substring(0, 10)}
                        </TableBody>
                        <TableBody>$ {order.totalPrice}</TableBody>
                        <TableBody>
                          {order.isPaid ? order.paidAt.substring(0, 10) : "No"}
                        </TableBody>
                        <TableBody>
                          {order.isDelivrered
                            ? order.deliveredAt.substring(0, 10)
                            : "Pending"}
                        </TableBody>
                        <Link to={`/order/${order._id}`}>
                          <TableBody>
                            <OrderDetailsButton>Details</OrderDetailsButton>
                          </TableBody>
                        </Link>                      
                    </OrdersListTableBody>
                    <OrdersListLineGrid>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                      <OrdersListLine>&nbsp;</OrdersListLine>
                    </OrdersListLineGrid>
                  </OrdersListContentGrid>
                ))}
              </>
            )}
          </OrdersListGrid>
        </ProfileAndOrdersListGrid>
      </ProfileStyles>
    </>
  );
}

export default Profile;
