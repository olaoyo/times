import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminStyles,
  AdminHeader,
  AdminIconsGrid,
  AdminIconAndTextGrid,
  AdminIcon,
  AdminText
} from "./Admin.styles";
import { useSelector } from "react-redux";

function Admin() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      return
    } else {
      navigate("/login")
    }
  }, [userInfo, navigate]);
  
  return (
    <AdminStyles>
      <AdminHeader>Admin Panel</AdminHeader>
      <AdminIconsGrid>

        <Link to="/admin/userlist">
            <AdminIconAndTextGrid>
                <AdminIcon>
                  <span class="material-symbols-outlined">group</span>
                </AdminIcon>
                <AdminText>Users</AdminText>
            </AdminIconAndTextGrid>
        </Link>
        
        <Link to="/admin/productlist">
            <AdminIconAndTextGrid>
                <AdminIcon>
                  <span class="material-symbols-outlined">inventory_2</span>
                </AdminIcon>
                <AdminText>Products</AdminText>
            </AdminIconAndTextGrid>
        </Link>      

        <Link to="/admin/orderlist">
            <AdminIconAndTextGrid>
                <AdminIcon>
                  <span class="material-symbols-outlined">list_alt</span>
                </AdminIcon>
                <AdminText>Orders</AdminText>
            </AdminIconAndTextGrid>
        </Link>
        
      </AdminIconsGrid>
    </AdminStyles>
  );
}

export default Admin;
