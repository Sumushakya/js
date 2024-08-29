/* eslint-disable react/prop-types */
function Products({ img, name, desc, price }) {
  // const { img, name, desc, price } = props;
  return (
    <div>
      <img src={img} alt="image" />
      <h4>{name}</h4>
      <p>{desc}</p>
      <h4>{price}</h4>
    </div>
  );
}

export default Products;
