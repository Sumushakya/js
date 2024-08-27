import { useState, useEffect } from "react";
import styles from "./detail.module.css";
import person4 from "../../assets/person4.png";

const Detail = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: [],
    education: [],
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
    <div style={{ flex: 1.2 }}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatarContainer}>
            <img src={person4} alt="pic" width="60px" height="60px" />
          </div>
        </div>
        <div className={styles.head}>
          <p className={styles.pName}>{formData.name}</p>
          <p className={styles.pHeadline}>{formData.headline}</p>
        </div>
        <div className={styles.card}>
          <div style={{ marginTop: "8px" }}>
            <p className={styles.title}>About</p>
            <p className={styles.description}>{formData.about}</p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p className={styles.title}>Skills</p>
            <p className={styles.description}>
              {formData?.skill?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p className={styles.title}>Education</p>
            <p className={styles.description}>
              {formData.education.map((education, index) => (
                <li key={index}>{education}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
