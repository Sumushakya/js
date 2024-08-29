import { useContext } from "react";
import { MyContext } from "./MyContext";

function MyComponent() {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("hello World!")}>Click me!</button>
    </div>
  );
}

export default MyComponent;
