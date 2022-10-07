import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileUpdateStyles,
  ProfileUpdateHeader,
  ProfileUpdateForm,
  ProfileUpdateInputAndLabelGrid,
  ProfileUpdateLabel,
  ProfileUpdateInput,
  ProfileUpdateButton,
} from "./ProfileUpdate.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { getUserDetails, updateUserProfile } from "../../../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../../../constants/userConstants";

function ProfileUpdate() {
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

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails("profile"));
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
      dispatch(updateUserProfile({
        "id": user._id,
        "name": name,
        "email": email,
        "password": password
      }));
      setMessage("");
    }
  };
  return (
    <>
      {message && <Message>{message}</Message>}
      {loading && <Loader />}
      {error && <Message>{error}</Message>}
      <ProfileUpdateStyles>
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
      </ProfileUpdateStyles>
    </>
  );
}

export default ProfileUpdate;
