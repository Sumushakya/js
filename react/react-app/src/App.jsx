//import ConditionalComponent from "./components/ConditionalComponent"
//import Fruits from "./components/Fruits";
//import Message from "./components/Message";
//import Counter from "./components/Counter";
//import Form from "./components/Form";
import InlineComponents from "./components/Inlinecomponents";
import OutlineComponents from "./components/Outlinecomponents";
function App() {
  return (
    <div className="App">
      {/* <Fruits /> */}
      {/* <Form /> */}
      <InlineComponents />
      <OutlineComponents />
    </div>
  );
}
export default App;

// import Hello from './components/Hello';
// function App(){
//   // const seatNumbers=[1,4,7];
//   const person={
//     name:"Rob",
//     message:"Hello There!",
//     seatNumbers:[1,2,4],
//   };

//   return (
//   <div className="App">
//     {/* //<Hello name="John" message="Hi There!" seatNumbers={seatNumbers}/> */}
//     <Hello person={person} />
//     </div>
//   );
// }
// export default App;
