import { useState, useEffect } from "react";
import styles from "./detail.module.css";
import person2 from "../../assets/person2.png";

const Detail = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: "",
    education: "",
  });
  console.log("detail", formData);

  useEffect(() => {
    // Retrieve data from localStorage
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  return (
    <div className={styles.container} style={{ flex: 1.2 }}>
      <div className={styles.avatarContainer}>
        <img src={person2} alt="pic" />
      </div>
      <div className={styles.head}>
        <p className={styles.pName}>{formData.name}</p>
        <p className={styles.pHeadline}>{formData.headline}</p>
        <hr />
      </div>
      <div className={styles.card}>
        <p className={styles.title}>About</p>
        <p className={styles.description}>{formData.about}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.title}>Skills</p>
        <p className={styles.description}>{formData.skill}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.title}>Education</p>
        <p className={styles.description}>{formData.education}</p>
      </div>
    </div>
  );
};

export default Detail;
