import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f6ac256c253b4a19a3242c3e9fc32a3d";

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza");
  //syntax of UseEffect Hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
