import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import useSWR from "swr";
import { ProductType } from "./types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { data: products, error } = useSWR<ProductType>(
    `https://fakestoreapi.com/products/${id}`,
    fetcher
  );

  if (error) return <div>Failed to load data</div>;

  if (!products) return <div>Loading...</div>;
  console.log(location);

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Product Details</h2>

      <div className="card">
        <h2>{products.category.toUpperCase()}</h2>
        <img
          src={products.image}
          alt={products.title}
          style={{ width: "100px", height: "100px", marginBottom: "20px" }}
        />
        <div>
          <strong>Title:</strong>
        </div>
        <p>{products.title}</p>
        <div>
          <strong>Description:</strong>
        </div>
        <p>{products.description}</p>
        <strong>Price:</strong>
        <p>{products.price} USD</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
