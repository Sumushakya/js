import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    about: "",
    skill: "",
    education: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log("input", e.target.name, e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/");
    console.log("submit", formData);
  };

  return (
    <div>
      <Nav />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>Detail Form</h1>
          <br />
          <label>
            Name:
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            Headline
            <input
              type="text"
              placeholder="Headline"
              name="headline"
              value={formData.headline}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            About:
            <input
              type="text"
              placeholder="About"
              name="about"
              value={formData.about}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            Skill:
            <input
              type="text"
              placeholder="Skill"
              name="skill"
              value={formData.skill}
              onChange={handleInput}
            />
          </label>
          <br />
          <label>
            Education:
            <input
              type="text"
              placeholder="Education"
              name="education"
              value={formData.education}
              onChange={handleInput}
            />
          </label>
          <br />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
