import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Products from "./components/routes/products/products.component";
import ProductDetails from "./components/routes/productDetails/productDetails.component";
import Cart from "./components/routes/cart/cart.component";
import Login from "./components/routes/auth/login.component";
import Register from "./components/routes/register/register.component";
import Profile from "./components/routes/profile/profile.component";
import Shipping from "./components/routes/shipping/shipping.component";
import Payment from "./components/routes/payment/payment.component";
import PlaceOrder from "./components/routes/placeOrder/placeOrder.component";
import Order from "./components/routes/order/order.component";
import UserList from "./components/routes/userList/userList.component";
import UserEdit from "./components/routes/userEdit/userEdit.component";
import Admin from "./components/routes/admin/admin.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:productId" element={<Cart />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/userlist" element={<UserList />} />
        <Route path="/admin/user/:userId/edit" element={<UserEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
