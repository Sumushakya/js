import styles from "./postlist.module.css";
// import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>PostList</h1>
      <div className={styles.innerbox}>Post1</div>
      <div className={styles.innerbox2}>Post2</div>
      <div>
        <button className={styles.btn} onClick={handleAdd}>
          Add post
        </button>
      </div>
    </div>
  );
};

export default PostList;
