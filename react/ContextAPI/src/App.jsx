// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
// import Products from "./components/Props/Products";

import { UserProvider } from "./components/ContextAPI/UserProvider";
import UserProfile from "./components/ContextAPI/UserProfile";
import UserSettings from "./components/ContextAPI/UserSettings";

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <UserSettings />
    </UserProvider>
  );
}

export default App;
// {
/* <h4>Products</h4> */
// }
// {
/* <Products
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
        name="Cyrus"
        desc="Sneakers"
        price="$9.50"
      />
      <Products
        img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
        name="Shoes"
        desc="shoes"
        price="$5.0"
      /> */
// }
