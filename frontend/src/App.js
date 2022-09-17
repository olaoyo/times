import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Products from "./components/routes/products/products.component"
import ProductDetails from "./components/routes/productDetails/productDetails.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
