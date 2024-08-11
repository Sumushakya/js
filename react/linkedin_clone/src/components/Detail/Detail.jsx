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

  useEffect(() => {
    // Retrieve data from localStorage
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Details</h2>
        <div>
          <img src={person2} alt="pic" />
        </div>
        <div className={styles.head}>
          <p>Name:{formData.name}</p>
          <p>Headlines:{formData.headline}</p>
          <p>About:{formData.about}</p>
          <p>Skill:{formData.skill}</p>
          <p>Education:{formData.education}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
