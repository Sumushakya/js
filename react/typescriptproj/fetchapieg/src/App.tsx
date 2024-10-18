// import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => res.json())
  //     .then((res) => setPosts(res as Post[]));
  // }, []);
  useEffect(() => {
    axios
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((indvpost) => (
          <li key={indvpost.id}>
            <h3>{indvpost.title}</h3>
            <p>{indvpost.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
