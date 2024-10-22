// import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
// import { Product } from "./types";

// interface ProuductDetailsProps {
//   category: string;
//   products: Product[];
// }
const ProductDetails = () => {
  // const ProductDetails: React.FC<ProuductDetailsProps> = ({ products }) => {
  //   const { id } = useParams<{ id: string }>();

  //   console.log(products?.map((products) => products.id));
  //   console.log(parseInt(id!));

  //   const product = products?.find((product) => products.id === parseInt(id!));

  //   if (!products) {
  //     return <div>No products found</div>;
  //   }

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      {/* <h2>{category}</h2> */}
      {/* <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />
      <div>
        <strong>Title:</strong>
      </div>
      <p>{product.title}</p>
      <div>
        <strong>Description:</strong>
      </div>
      <p>{product.description}</p>
      <strong>Price:</strong>
      <p>{product.price} USD</p> */}
    </div>
  );
};

export default ProductDetails;
