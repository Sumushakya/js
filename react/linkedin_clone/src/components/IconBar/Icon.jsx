import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Icon = () => {
  // const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/postform");
    alert("clicked");
  };

  return (
    <div className={styles.iconBar}>
      <button className={styles.iconItem}>
        <FaThumbsUp />
        <span>Like</span>
      </button>
      <button className={styles.iconItem}>
        <FaComment />
        <span onClick={handleClick}>Comment</span>
      </button>
      <button className={styles.iconItem}>
        <FaRetweet />
        <span>Repost</span>
      </button>
      <button className={styles.iconItem}>
        <FaPaperPlane />
        <span>Share</span>
      </button>
    </div>
  );
};

export default Icon;
