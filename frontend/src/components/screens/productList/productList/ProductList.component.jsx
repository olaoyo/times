import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ProductListStyles,
  ProductListGrid,
  ProductListCreateButton,
  ProductListContentGrid,
  ProductListTableHead,
  TableHead,
  ProductListTableBody,
  TableBody,
  TableBodyEmail,
  TableBodyIcon2,
  ProductListLineGrid,
  ProductListLine,
} from "./ProductList.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { listProducts } from "../../../../actions/productsActions";

function ProductList() {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.productsList);
  const { loading, products, error } = productsList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
  }, [dispatch, userInfo, navigate]);

  const deleteHandler = (userId) => {
    if (
      window.confirm("Are your certain this watch is not for our elite ⌚️ 🫥")
    ) {
      //   Delete products
    }
  };

  const createProductHandler = (product) => {
    // Create product
  }

  return (
    <ProductListStyles>
      <ProductListGrid>        
          
          <ProductListCreateButton onClick={createProductHandler}>
            <span className="material-symbols-outlined">add_circle</span>
          </ProductListCreateButton>
        
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <>
            {/* TABLE HEAD */}

            <ProductListContentGrid>
              <ProductListTableHead>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </ProductListTableHead>
              <ProductListLineGrid>
                <ProductListLine>&nbsp;</ProductListLine>
                <ProductListLine>&nbsp;</ProductListLine>
                <ProductListLine>&nbsp;</ProductListLine>
                <ProductListLine>&nbsp;</ProductListLine>
                <ProductListLine>&nbsp;</ProductListLine>
                <ProductListLine>&nbsp;</ProductListLine>
              </ProductListLineGrid>
            </ProductListContentGrid>

            {/* TABLE BODY */}

            {products.map((product) => (
              <ProductListContentGrid key={product._id}>
                <ProductListTableBody>
                  <TableBody>{product._id}</TableBody>

                  <TableBody>{product.name}</TableBody>

                  <TableBodyEmail>${product.price}</TableBodyEmail>

                  <TableBody>{product.brand}</TableBody>

                  <TableBodyIcon2>
                    <Link to={`/admin/product/${product._id}/edit`}>
                      <span
                        className="material-symbols-outlined"
                      >
                        Edit
                      </span>
                    </Link>
                  </TableBodyIcon2>

                  <TableBodyIcon2 onClick={() => deleteHandler(product._id)}>
                    <span className="material-symbols-outlined">Delete</span>
                  </TableBodyIcon2>

                </ProductListTableBody>
                <ProductListLineGrid>
                  <ProductListLine>&nbsp;</ProductListLine>
                  <ProductListLine>&nbsp;</ProductListLine>
                  <ProductListLine>&nbsp;</ProductListLine>
                  <ProductListLine>&nbsp;</ProductListLine>
                  <ProductListLine>&nbsp;</ProductListLine>
                  <ProductListLine>&nbsp;</ProductListLine>
                </ProductListLineGrid>
              </ProductListContentGrid>
            ))}
          </>
        )}
      </ProductListGrid>
    </ProductListStyles>
  );
}

export default ProductList;
