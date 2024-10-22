import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
// import { Product } from "./components/types";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductDetails />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
