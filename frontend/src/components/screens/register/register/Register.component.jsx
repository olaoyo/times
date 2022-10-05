import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RegisterStyles,
  RegisterHeader,
  RegisterForm,
  RegisterInputAndLabelGrid,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  Login,
} from "./Register.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { register } from "../../../../actions/userActions";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Watches do not match ⌚/⏱");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <>
      {message && <Message>{message}</Message>}
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <RegisterStyles>
        <RegisterHeader>Register At Your Own Luxury</RegisterHeader>
        <RegisterForm onSubmit={submitHandler}>
          <RegisterInputAndLabelGrid>
            <RegisterLabel>Name</RegisterLabel>
            <RegisterInput
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
              required
            />
          </RegisterInputAndLabelGrid>

          <RegisterInputAndLabelGrid>
            <RegisterLabel>Email</RegisterLabel>
            <RegisterInput
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              required
            />
          </RegisterInputAndLabelGrid>

          <RegisterInputAndLabelGrid>
            <RegisterLabel>Password</RegisterLabel>
            <RegisterInput
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              required
            />
          </RegisterInputAndLabelGrid>

          <RegisterInputAndLabelGrid>
            <RegisterLabel>Confirm Password</RegisterLabel>
            <RegisterInput
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              id="passwordConfirm"
              required
            />
          </RegisterInputAndLabelGrid>

          <RegisterButton type="submit">Register</RegisterButton>
        </RegisterForm>
        <Login>
          Have an Account?&nbsp;&nbsp;
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign In
          </Link>
        </Login>
      </RegisterStyles>
    </>
  );
}

export default Register;
