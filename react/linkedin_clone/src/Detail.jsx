import React from "react";
import styles from "./detail.module.css";
import person from "./assets/person.png";

const Detail = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Details</h2>
      <div className={styles.pic}>
        <img src={person} alt="pic" width="30px" height="30px" />
      </div>
      <div className={styles.head}>
        <h3>Name</h3>
        <h3>Headline</h3>
        <h3>About</h3>
        <h3>Skill</h3>
        <h3>Education</h3>
      </div>
    </div>
  );
};

export default Detail;
