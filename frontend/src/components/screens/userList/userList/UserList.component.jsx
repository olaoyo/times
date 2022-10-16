import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  UserListStyles,
  UserListGrid,
  UserListHeader,
  UserListContentGrid,
  UserListTableHead,
  TableHead,
  UserListTableBody,
  TableBody,
  UserListLineGrid,
  UserListLine,
} from "./UserList.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { listUsers } from "../../../../actions/userActions";

function UserList() {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

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
                  <TableBody>{user.email}</TableBody>
                  <TableBody>
                    {user.isAdmin ? (
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#9A836C" }}
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
                  </TableBody>
                  <TableBody>
                    <Link to={`/admin/user/${user._id}`}>
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#9A836C" }}
                      >
                        edit
                      </span>
                    </Link>
                  </TableBody>
                  <TableBody>
                    <span className="material-symbols-outlined"
                    style={{ color: "#9A836C" }}
                    >delete</span>
                  </TableBody>
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
