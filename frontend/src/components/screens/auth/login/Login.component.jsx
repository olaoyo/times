import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoginStyles,
  LoginHeader,
  LoginForm,
  LoginInputAndLabelGrid,
  LoginLabel,
  LoginInput,
  SignInButton,
  Register,
} from "./Login.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { login } from "../../../../actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <LoginStyles>
        <LoginHeader>Sign In To Virtual Luxury</LoginHeader>
        <LoginForm onSubmit={submitHandler}>

          <LoginInputAndLabelGrid>
            <LoginLabel>Email</LoginLabel>
            <LoginInput
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              required
            />
          </LoginInputAndLabelGrid>
          
          <LoginInputAndLabelGrid>
            <LoginLabel>Password</LoginLabel>
            <LoginInput
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              required
            />
          </LoginInputAndLabelGrid>

          <SignInButton type="submit">Sign In</SignInButton>

        </LoginForm>
        
        <Register>
          New Customer?&nbsp;&nbsp;
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Register>
      </LoginStyles>
    </>
  );
}

export default Login;