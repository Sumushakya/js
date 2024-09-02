import { useContext } from "react";
import styles from "./detail.module.css";
import person4 from "../../assets/person4.png";

import { DetailContext } from "../../context/Detail/DetailContext";

const Detail = () => {
  const { userDetails } = useContext(DetailContext);
  // console.log("userdetailsss", userDetails);

  return (
    <div style={{ flex: 1.2 }}>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatarContainer}>
            <img src={person4} alt="pic" width="60px" height="60px" />
          </div>
        </div>
        <div className={styles.head}>
          <p className={styles.pName}>{userDetails?.name}</p>
          <p className={styles.pHeadline}>{userDetails?.headline}</p>
        </div>
        <div className={styles.card}>
          <div style={{ marginTop: "8px" }}>
            <p className={styles.title}>About</p>
            <p className={styles.description}>{userDetails?.about}</p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p className={styles.title}>Skills</p>
            <p className={styles.description}>
              {userDetails?.skill?.map((skills, index) => (
                <li key={index}>{skills}</li>
              ))}
            </p>
          </div>
          <div style={{ marginTop: "30px" }}>
            <p className={styles.title}>Education</p>
            <p className={styles.description}>
              {userDetails?.education?.map((education, index) => (
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
