import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardListStyles } from "./ProductCardList.styles";
import ProductCard from "../productCard/ProductCard.component";
import { listProducts } from "../../../actions/productsActions";
import Loader from "../../loader/Loader.component";
import Message from "../../message/Message.component";

function ProductCardList() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { products, loading, error } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  
  return (
    <ProductCardListStyles>
      {
        loading ? <Loader />
          : error ? <Message>{error}</Message> 
            :
            <>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
            </>          
      }      
    </ProductCardListStyles>
  );
}

export default ProductCardList;
