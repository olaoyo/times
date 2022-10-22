import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ProductEditStyles,
  ProductEditHeader,
  ProductEditForm,
  ProductEditInputAndLabelGrid,
  ProductEditLabel,
  ProductEditInput,
  ProductEditButton,
} from "./ProductEdit.styles";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../loader/Loader.component";
import Message from "../../../message/Message.component";
import { listProductDetails } from "../../../../actions/productsActions";

function ProductEdit() {
  const { productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0); 
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;


  useEffect(() => {
    if (!product.name || product._id !== +productId) {
      dispatch(listProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);      
    }
  }, [ dispatch, /*product*/ productId, navigate, product._id, product.name, product.price, product.image, product.brand, product.category, product.countInStock, product.description ]);

  

  const submitHandler = (event) => {
    event.preventDefault();
    // Update product
  };


  return (
    <>
      <ProductEditStyles>
        {/* <Link to="/admin/productlist"><ProductEditHeader>Go Back</ProductEditHeader></Link> */}
        <ProductEditHeader>Edit Product</ProductEditHeader>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message />
        ) : (
          <ProductEditForm onSubmit={submitHandler}>
            
            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Name</ProductEditLabel>
              <ProductEditInput
                type="name"
                placeholder="Enter The Watch Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                id="name"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Price</ProductEditLabel>
              <ProductEditInput
                type="number"
                placeholder="Enter The Watch Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                id="price"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Image</ProductEditLabel>
              <ProductEditInput
                type="text"
                placeholder="Enter The Watch Image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                id="image"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Brand</ProductEditLabel>
              <ProductEditInput
                type="text"
                placeholder="Enter The Watch Brand"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                id="brand"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Category</ProductEditLabel>
              <ProductEditInput
                type="text"
                placeholder="Enter The Watch Category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                id="category"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Stock</ProductEditLabel>
              <ProductEditInput
                type="number"
                placeholder="Enter The Watch Stock"
                value={countInStock}
                onChange={(event) => setCountInStock(event.target.value)}
                id="countInStock"
              />
            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Description</ProductEditLabel>
              <ProductEditInput
                type="textarea"
                placeholder="Enter The Watch description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="description"
              />
            </ProductEditInputAndLabelGrid>


            <ProductEditButton type="submit">Update</ProductEditButton>
          </ProductEditForm>
        )}
      </ProductEditStyles>
    </>
  );
}

export default ProductEdit;
