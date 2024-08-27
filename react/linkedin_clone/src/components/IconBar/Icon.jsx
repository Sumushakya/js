import { useEffect, useState } from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";
import person2 from "../../assets/person2.png";
// import person3 from "../../assets/person3.png";

const Icon = ({ id }) => {
  console.log("postid", id);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});

  const handleCommentClick = () => {
    setShowComments(!showComments); //toggle show section
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
    const savedLikes = JSON.parse(localStorage.getItem("likes")) || {};
    if (savedComments[id]) {
      setComments(savedComments);
    }
    if (savedLikes[id]) {
      setLikes(savedLikes);
    }
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const postComments = comments[id] || [];
    const updatedComments = {
      ...comments,
      [id]: [newComment, ...postComments],
    };
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setNewComment("");
    console.log("uc", updatedComments);
  };

  const handleLikeClick = () => {
    const postLikes = likes[id] || 0;
    const updatedLikes = { ...likes, [id]: parseInt(postLikes + 1) };
    setLikes(updatedLikes);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    console.log("like", updatedLikes);
  };

  return (
    <div className={styles.container}>
      {likes[id] > 0 && <div>{likes[id]} Likes</div>}
      <div className={styles.iconBar}>
        <button className={styles.iconItem} onClick={handleLikeClick}>
          <FaThumbsUp />
          <span>Like</span>
        </button>
        <button className={styles.iconItem} onClick={handleCommentClick}>
          <FaComment />
          <span>Comment</span>
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
      <div>
        {showComments && (
          <div className={styles.commentSection}>
            <form onSubmit={handleCommentSubmit} className={styles.form}>
              <div className={styles.formContainer}>
                <img src={person2} alt="image" width="40px" height="40px" />
                <input
                  className={styles.commentInput}
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={handleChange}
                />
                {/* <button className={styles.submitBtn}>Submit</button> */}
              </div>
            </form>
            <div>
              <h4>Comments</h4>
              {(comments[id] || []).map((comment, index) => (
                <div className={styles.commentBox} key={index}>
                  <p key={index}>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Icon;
