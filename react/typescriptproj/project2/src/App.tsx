import "./App.css";
// import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

// import axios from "axios";
// import useSWR from "swr";
// import nav from "./components/Navbar";
// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   category: string;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
// }
// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function App() {
  //   const { data, error } = useSWR<Product[]>(
  //     `https://fakestoreapi.com/products`,
  //     fetcher
  //   );
  //   if (error) return <div>Failed to load products</div>;
  //   if (!data) return <div className="loading">Loading...</div>;

  // const categories = Array.from(
  //   new Set(data.map((product) => product.category))
  // );

  return (
    <div className="container">
      {/* <Navbar /> */}
      <ProductList />
      {/* {data.map((indvProduct) => (
        <div key={indvProduct.id} className="card">
          <h3>{indvProduct.category}</h3>
          <img
            className="image"
            src={indvProduct.image}
            width="100px"
            height="100px"
          />
          <p>
            <b>Title: </b>
            {indvProduct.title}
          </p>
          <p>
            <b>Description: </b>
            {indvProduct.description}
          </p>
          <p>
            <b>Price: </b>
            {indvProduct.price}
          </p>
        </div>
      ))} */}
    </div>
  );
}
export default App;
