import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

import {
  HeaderStyles,
  Navigation,
  User,
  Logo,
  NavMenu,
  Cart,
  Profile,
  Space,
  AuthButton,
} from "./Header.styles.jsx";

import { Outlet } from "react-router-dom";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <HeaderStyles>
        <Navigation>
          <Link to="/">
            <Logo>TIMES</Logo>
          </Link>
          <Link to="/products">
            <NavMenu>WATCHES</NavMenu>
          </Link>
          <Link to="/about">
            <NavMenu>ABOUT US</NavMenu>
          </Link>
          <Link to="/products">
            <NavMenu>STORE</NavMenu>
          </Link>
        </Navigation>
        <Cart>
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </Cart>
        <User>
          {userInfo ? (
            <>
              <Profile>
                Welcome&nbsp;&nbsp;&nbsp;
                <Link to="/profile">{userInfo.name}</Link>
              </Profile>
              <AuthButton
                title={userInfo.name}
                id="username"
                onClick={logoutHandler}
              >
                LOGOUT
              </AuthButton>
            </>
          ) : (
            <>
              <Space>&nbsp;&nbsp;&nbsp;</Space>
              <Space>&nbsp;&nbsp;&nbsp;</Space>
              <Link to="/login">
                <AuthButton>LOG IN</AuthButton>
              </Link>
            </>
          )}
        </User>
      </HeaderStyles>
      <Outlet />
    </>
  );
}

export default Header;
