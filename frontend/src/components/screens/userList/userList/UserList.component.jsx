import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserListStyles,
  UserListGrid,
  UserListHeader,
  UserListContentGrid,
  UserListTableHead,
  TableHead,
  UserListTableBody,
  TableBody,
  TableBodyEmail,
  TableBodyIcon1,
  TableBodyIcon2,
  UserListLineGrid,
  UserListLine,
} from "./UserList.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { listUsers, deleteUser } from "../../../../actions/userActions";


function UserList() {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate("/login")
    }
  }, [dispatch, userInfo, navigate, successDelete]);

  const deleteHandler = (userId) => {

    if (window.confirm("Are your certain this memeber is unworthy 🤯")) {
      dispatch(deleteUser(userId));
    }
  }

  return (
    <UserListStyles>
      <UserListGrid>
        <UserListHeader>User List</UserListHeader>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <>
            {/* TABLE HEAD */}

            <UserListContentGrid>
              <UserListTableHead>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </UserListTableHead>
              <UserListLineGrid>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
              </UserListLineGrid>
            </UserListContentGrid>

            {/* TABLE BODY */}

            {users.map((user) => (
              <UserListContentGrid key={user._id}>
                <UserListTableBody>
                  <TableBody>{user._id}</TableBody>

                  <TableBody>{user.name}</TableBody>

                  <TableBodyEmail>{user.email}</TableBodyEmail>

                  <TableBodyIcon1>
                    {user.isAdmin ? (
                      <span
                        className="material-symbols-outlined"
                      >
                        done
                      </span>
                    ) : (
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#9A836C" }}
                      >
                        close
                      </span>
                    )}
                  </TableBodyIcon1>

                  <TableBodyIcon2>
                    <Link to={`/admin/user/${user._id}`}>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#9A836C" }}
                      >
                        edit
                      </span>
                    </Link>
                  </TableBodyIcon2>

                  <TableBodyIcon2 onClick={() => deleteHandler(user._id)}>
                    <span className="material-symbols-outlined"
                    >delete</span>
                  </TableBodyIcon2>

                </UserListTableBody>
                <UserListLineGrid>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
                <UserListLine>&nbsp;</UserListLine>
              </UserListLineGrid>
              </UserListContentGrid>
            ))}
          </>
        )}
      </UserListGrid>
    </UserListStyles>
  );
}

export default UserList;
