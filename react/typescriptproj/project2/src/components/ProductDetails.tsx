import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ProductType } from "./types";

interface ProductDetailsProps {
  category: string;
  products: ProductType[];
}
// const ProductDetails = () => {
const ProductDetails: React.FC<ProductDetailsProps> = ({
  products,
  category,
}) => {
  const { id } = useParams<{ id: string }>();
  console.log("Allproducts:", products);
  console.log("selected id:", id);

  const parsedId = parseInt(id!);
  console.log("parsed ID", parsedId);

  if (!products || products.length === 0) {
    return <div>Loading or No products found</div>;
  }

  const product = products?.find((product) => product.id === parsedId);
  console.log("selected products:", products);

  if (!product) {
    return <div>Product not found.</div>; // Handle case where no product matches the ID
  }
  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <h2>{category}</h2>
      <img
        src={product!.image}
        alt={product!.title}
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />
      <div>
        <strong>Title:</strong>
      </div>
      <p>{product!.title}</p>
      <div>
        <strong>Description:</strong>
      </div>
      <p>{product!.description}</p>
      <strong>Price:</strong>
      <p>{product!.price} USD</p>
    </div>
  );
};

export default ProductDetails;
