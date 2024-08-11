import styles from "./post.module.css";
import person from "../../assets/person.png";
import { useEffect, useState } from "react";

const Post = () => {
  const [postData, setPostData] = useState({});

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
