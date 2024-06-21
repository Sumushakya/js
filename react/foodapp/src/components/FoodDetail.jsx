import { useEffect, useState } from "react";
export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f6ac256c253b4a19a3242c3e9fc32a3d";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood(foodId);
  }, []);
  return (
    <div>
      Recipes{foodId}
      {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
