import React from "react";
import styles from "./icon.module.css";
import { FaThumbsUp, FaComment, FaShare, FaRetweet } from "react-icons/fa";

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
        <FaShare />
        <span>Share</span>
      </div>
      <div className={styles.iconItem}>
        <FaRetweet />
        <span>Repost</span>
      </div>
    </div>
  );
};

export default Icon;
