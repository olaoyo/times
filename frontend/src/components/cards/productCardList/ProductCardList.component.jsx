import { useState, useEffect } from "react";
import { ProductCardListStyles } from "./ProductCardList.styles";
import ProductCard from "../productCard/ProductCard.component";
import axios from "axios";

function ProductCardList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductCardListStyles>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductCardListStyles>
  );
}

export default ProductCardList;
