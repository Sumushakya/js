import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f6ac256c253b4a19a3242c3e9fc32a3d";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  //syntax of UseEffect Hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch("${URL}?query=${query}&apiKey=${API_Key}");
      const data = await res.json();
      console.log(data);
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
