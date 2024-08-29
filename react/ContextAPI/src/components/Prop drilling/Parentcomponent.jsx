import Childcomponent from "./Childcomponent";
function Parentcomponent() {
  const data = "hello from the parent ";
  return (
    <div>
      <Childcomponent data={data} />
    </div>
  );
}
export default Parentcomponent;
