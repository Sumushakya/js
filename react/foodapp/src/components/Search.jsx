import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  //syntax of UseEffect Hook
  useEffect(() => {
    function demo() {
      console.log("demo function executed");
    }
    demo();
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
