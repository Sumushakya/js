import styles from "./post.module.css";
import person from "../../assets/person.png";
import { useEffect, useState } from "react";

const Post = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData) {
      setPostData(savedData);
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={person} alt="person" />
      <div className={styles.details}>
        <p>Name:{postData.name}</p>
        <p>Headline:{postData.headline}</p>
        <p>Post Description:{postData.des}</p>
      </div>
      <button className={styles.like}>Like</button>
      <button className={styles.comment}>Comment</button>
    </div>
  );
};

export default Post;

// DisplayPage.jsx
// import { useEffect, useState } from "react";

// const DisplayPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Retrieve posts from local storage
//     const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
//     setPosts(storedPosts);
//   }, []);

//   return (
//     <div>
//       <h1>Posts</h1>
//       {posts.length === 0 ? (
//         <p>No posts available.</p>
//       ) : (
//         posts.map((post, index) => (
//           <div key={index} className="post">
//             <h2>{post.headline}</h2>
//             <h4>{post.name}</h4>
//             <p>{post.description}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DisplayPage;
