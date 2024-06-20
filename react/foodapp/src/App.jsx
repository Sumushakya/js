import { useState } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import "./App.css";
import FoodList from "./components/Foodlist";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
