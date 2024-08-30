import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DetailProvider } from "./components/context/Detail/DetailProvider.jsx";
import { PostlistProvider } from "./components/context/PostList/PostlistProvider.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <PostlistProvider>
      <DetailProvider>
        <App />
      </DetailProvider>
    </PostlistProvider>
  </React.StrictMode>
);
