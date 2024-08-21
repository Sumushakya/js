import React from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaPaperPlane, FaRetweet } from "react-icons/fa";

const Icon = () => {
  return (
    <div className={styles.iconBar}>
      <button className={styles.iconItem}>
        <FaThumbsUp />
        <span>Like</span>
      </button>
      <button className={styles.iconItem}>
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
  );
};

export default Icon;
