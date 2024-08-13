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
    <div>
      <div className={styles.container}>
        <div>
          <img src={person2} alt="pic" />
        </div>
        <div className={styles.head}>
          <p>Name:{formData.name}</p>
          <hr />
          <p>Headlines:{formData.headline}</p>
          <hr />
          <p>About:{formData.about}</p>
          <hr />
          <p>Skill:{formData.skill}</p>
          <hr />
          <p>Education:{formData.education}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
