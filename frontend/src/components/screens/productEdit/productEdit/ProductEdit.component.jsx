import { useState, useEffect } from "react";
import axios from "axios";
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
import { listProductDetails, updateProduct } from "../../../../actions/productsActions";
import { PRODUCT_UPDATE_RESET } from "../../../../constants/productsConstants";


function ProductEdit() {
  const { productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0); 
  const [image, setImage] = useState("");
  const [imageDetails, setImageDetails] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, success: successupdate, error: errorUpdate } = productUpdate;


  useEffect(() => {

    if (successupdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET})
      navigate("/admin/productlist")
    } else {
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
    }
    
  }, [ dispatch, /*product*/ productId, navigate, product._id, product.name, product.price, product.image, product.brand, product.category, product.countInStock, product.description, successupdate ]);

  

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(updateProduct({
      _id: productId,
      name,
      price,
      image,
      brand,
      category,
      countInStock,
      description
    }))
  };

  const uploadFileHandler = async (event) => {
    const file = event.target.files[0]
    const formData = new FormData()

    formData.append("image", file)
    formData.append("product_id", productId)

    setUploading(true)

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      }

      const { data } = await axios.post("/api/products/upload/", formData, config)

      setImage(data);
      setUploading(false);

    } catch (error) {
        setUploading(false);
    }
  }


  const uploadFileDetailsHandler = async (event) => {
    const file = event.target.files[0]
    const formData = new FormData()

    formData.append("imageDetails", file)
    formData.append("product_id", productId)

    setUploading(true)

    try {
      const config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      }

      const { data } = await axios.post("/api/products/upload-details/", formData, config)

      setImageDetails(data);
      setUploading(false);

    } catch (error) {
        setUploading(false);
    }
  }
  

  return (
    <>
      <ProductEditStyles>
        {/* <Link to="/admin/productlist"><ProductEditHeader>Go Back</ProductEditHeader></Link> */}
        <ProductEditHeader>Edit Product</ProductEditHeader>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message>{errorUpdate}</Message>}

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

              <ProductEditInput 
                type="file"
                label="Upload Image"
                placeholder="Choose File"
                custom
                id="image-file"
                onChange={uploadFileHandler}
              />
              {uploading && <Loader />}

            </ProductEditInputAndLabelGrid>

            <ProductEditInputAndLabelGrid>
              <ProductEditLabel>Image Details</ProductEditLabel>
              <ProductEditInput
                type="text"
                placeholder="Enter The Watch Details Image"
                value={imageDetails}
                onChange={(event) => setImageDetails(event.target.value)}
                id="image"
              />

              <ProductEditInput 
                type="file"
                label="Upload Image"
                placeholder="Choose File"
                custom
                id="image-file"
                onChange={uploadFileDetailsHandler}
              />
              {uploading && <Loader />}

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


            <ProductEditButton type="submit" onClick={submitHandler}>Update</ProductEditButton>
          </ProductEditForm>
        )}
      </ProductEditStyles>
    </>
  );
}

export default ProductEdit;
