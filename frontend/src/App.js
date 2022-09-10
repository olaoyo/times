import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import ProductCardList from "./components/cards/ProductCardList.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductCardList />} />
      </Route>
    </Routes>
  );
}

export default App;
