import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DetailProvider } from "./context/Detail/DetailProvider.jsx";
import { PostlistProvider } from "./context/PostList/PostlistProvider.jsx";
import { LikeCommentProvider } from "./context/Icon/LikeCommentProvider.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <PostlistProvider>
      <LikeCommentProvider>
        <DetailProvider>
          <App />
        </DetailProvider>
      </LikeCommentProvider>
    </PostlistProvider>
  </React.StrictMode>
);
