import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
