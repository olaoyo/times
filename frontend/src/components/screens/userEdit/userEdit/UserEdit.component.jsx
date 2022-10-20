import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  UserEditStyles,
  UserEditHeader,
  UserEditForm,
  UserEditInputAndLabelGrid,
  UserEditCheckedAndLabelGrid,
  UserEditLabel,
  UserEditInput,
  UserEditCheckBox,
  UserEditButton,
} from "./UserEdit.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { getUserDetails } from "../../../../actions/userActions";

function UserEdit() {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  useEffect(() => {
    if (!user.name || user._id !== +userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, user._id, user.email, user.isAdmin, user.name, userId]);

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <UserEditStyles>
        {/* <Link to="/admin/userlist"><UserEditHeader>Go Back</UserEditHeader></Link> */}
        <UserEditHeader>Edit User</UserEditHeader>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message />
        ) : (
          <UserEditForm onSubmit={submitHandler}>
            <UserEditInputAndLabelGrid>
              <UserEditLabel>Name</UserEditLabel>
              <UserEditInput
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
              />
            </UserEditInputAndLabelGrid>

            <UserEditInputAndLabelGrid>
              <UserEditLabel>Email</UserEditLabel>
              <UserEditInput
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
              />
            </UserEditInputAndLabelGrid>

            <UserEditCheckedAndLabelGrid>
              <UserEditCheckBox
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(event) => setIsAdmin(event.target.checked)}
                id="password"
              />
              <UserEditLabel>Curator</UserEditLabel>
            </UserEditCheckedAndLabelGrid>

            <UserEditButton type="submit">Update</UserEditButton>
          </UserEditForm>
        )}
      </UserEditStyles>
    </>
  );
}

export default UserEdit;
