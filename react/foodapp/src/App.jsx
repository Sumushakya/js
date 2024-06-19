import Nav from "./components/Nav";
import Search from "./components/search";
import "./App.css";

function App() {
  const [foodData, setfoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setfoodData} />
    </div>
  );
}

export default App;
