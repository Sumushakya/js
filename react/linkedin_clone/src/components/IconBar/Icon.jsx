import { useState } from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const Icon = () => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  console.log("comment", newComment);
  // const [comments, setComments] = useState([]);

  const handleCommentClick = () => {
    setShowComments(!showComments); //toggle show section
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {};

  return (
    <div className={styles.iconBar}>
      <button className={styles.iconItem}>
        <FaThumbsUp />
        <span>Like</span>
      </button>
      <button className={styles.iconItem}>
        <FaComment />
        <span onClick={handleCommentClick}>Comment</span>
      </button>
      <button className={styles.iconItem}>
        <FaRetweet />
        <span>Repost</span>
      </button>
      <button className={styles.iconItem}>
        <FaPaperPlane />
        <span>Share</span>
      </button>
      <div>
        {showComments && (
          <div className={styles.commentSection}>
            <h4>Comments</h4>
            <form onSubmit={handleCommentSubmit}>
              <input
                className={styles.commentInput}
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={handleChange}
              />
              <button className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Icon;
