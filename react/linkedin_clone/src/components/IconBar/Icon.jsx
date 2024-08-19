import React from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";

const Icon = () => {
  return (
    <div className={styles.iconBar}>
      <div className={styles.iconItem}>
        <FaThumbsUp />
        <span>Like</span>
      </div>
      <div className={styles.iconItem}>
        <FaComment />
        <span>Comment</span>
      </div>
      <div className={styles.iconItem}>
        <FaRetweet />
        <span>Repost</span>
      </div>
      <div className={styles.iconItem}>
        <FaPaperPlane />
        <span>Share</span>
      </div>
    </div>
  );
};

export default Icon;
