import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCardListStyles } from "./ProductCardList.styles";
import ProductCard from "../productCard/ProductCard.component";
import { listProducts } from "../../../actions/productsActions";

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
        loading ? <h2>Loading...</h2>
          : error ? <h3>{error}</h3> 
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
