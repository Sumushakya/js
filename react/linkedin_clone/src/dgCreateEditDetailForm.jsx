// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
// import styles from "./detailform.module.css";
// import { DetailContext } from "./context/Detail/DetailContext";
// import { FaCircleXmark } from "react-icons/fa6";
// import * as Yup from "yup";
// import { Field, FieldArray, Formik, ErrorMessage } from "formik";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     headline: "",
//     about: "",
//     skill: [],
//     education: [],
//   });
//   console.log("detailformdata", formData);

//   const { userDetails, setUserDetails } = useContext(DetailContext);

//   useEffect(() => {
//     if (userDetails) {
//       setFormData(userDetails);
//     }
//   }, []);

//   // const [tempSkill, setTempSkill] = useState("");
//   // console.log("skilssss", tempSkill);

//   // const [tempEducation, setTempEducation] = useState("");
//   // const [skillMessage, setSkillMessage] = useState("");
//   // const [educationMessage, setEducationMessage] = useState("");

//   const navigate = useNavigate();

//   // const handleInput = (e) => {
//   //   console.log("input", e.target.name, e.target.value);
//   //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   // };

//   // const handleInputSkill = (e) => {
//   //   setTempSkill(e.target.value);
//   // };

//   // const handleAddSkill = () => {
//   //   setFormData((prev) => ({ ...prev, skill: [...prev.skill, tempSkill] }));
//   //   setSkillMessage("Skill Added!");
//   //   setTempSkill("");
//   //   setTimeout(() => {
//   //     setSkillMessage("");
//   //   }, 10000);
//   // };

//   // const handleInputEducation = (e) => {
//   //   setTempEducation(e.target.value);
//   //   console.log("education", tempEducation);
//   // };

//   // const handleAddEducation = () => {
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     education: [...prev.education, tempEducation],
//   //   }));
//   //   setEducationMessage(" Education Added!");
//   //   setTimeout(() => {
//   //     setEducationMessage("");
//   //   }, 10000);
//   //   setTempEducation("");
//   // };

//   // e.preventDefault();
//   // localStorage.setItem("userData", JSON.stringify(formData));

//   // console.log("submit", formData);

//   // const handleDeleteSkill = (index) => {
//   //   const updatedSkill = formData.skill.filter((_, it) => it !== index);
//   //   setFormData((prev) => ({ ...prev, skill: updatedSkill }));
//   // };

//   // const handleDeleteEducation = (index) => {
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     education: prev.education.filter((education, i) => i !== index),
//   //   }));
//   // };
//   const handleSubmit = (values) => {
//     setUserDetails(values);
//     navigate("/");
//   };

//   const ValidationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     headline: Yup.string().required("Headline is required"),
//     about: Yup.string().required("About is required"),
//     skill: Yup.array().of(Yup.string().required("Skill is required")),
//     // .min(1, "atleast 1 skill is required"),
//     education: Yup.array().of(Yup.string().required("Education is required")),
//     // .min(1, "atleast 1 skill is required"),
//   });

//   return (
//     <div>
//       <Nav />
//       <div className={styles.formContainer}>
//         <Formik
//           initialValues={formData}
//           validationSchema={ValidationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ values, handleChange, handleBlur, isSubmitting }) => (
//             <form>
//               <h1>Detail Form</h1>
//               <br />
//               <label>
//                 Name:
//                 <Field
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   // value={formData.name}
//                   // onChange={handleInput}
//                 />
//                 <ErrorMessage
//                   name="name"
//                   component="div"
//                   className={styles.error}
//                 />
//               </label>
//               <br />
//               <label>
//                 Headline
//                 <Field
//                   type="text"
//                   placeholder="Headline"
//                   name="headline"
//                   // value={formData.headline}
//                   // onChange={handleInput}
//                 />
//               </label>
//               <br />
//               <label>
//                 About:
//                 <Field
//                   type="text"
//                   placeholder="About"
//                   name="about"
//                   // value={formData.about}
//                   // onChange={handleInput}
//                 />
//                 <ErrorMessage
//                   name=""
//                   component="div"
//                   className={styles.error}
//                 />
//               </label>
//               <br />
//               {/* <label>
//                 Skills:
//                <FieldArray
//                   name="skill"
//                   render={(arrayHelpers) => (
//                     <div>
//                       {console.log(
//                         "valueeeee",
//                         !!values.skill.length,
//                         values.skill
//                       )}
//                       {values.skill.length ? (
//                         values.skill.map((indvSkill, index) => (
//                           <div key={index}>
//                             {console.log("inside", indvSkill)}
//                             <Field
//                               type="text"
//                               name={`skill.${index}`}
//                               value={indvSkill}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                             />
//                             <ErrorMessage
//                               name={`skill.${index}`}
//                               component="div"
//                             />
//                             <button
//                               type="button"
//                               onClick={() => arrayHelpers.remove(index)}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         ))
//                       ) : (
//                         <button
//                           type="button"
//                           onClick={() => arrayHelpers.push("")}
//                         >
//                           {console.log("inside button")}
//                           Add Skill
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 />
//               </label> */}
//               {/* <label>
//                 Education:
//                 <FieldArray
//                   name="education"
//                   render={(arrayHelpers) => (
//                     <div>
//                       {/* {console.log("valueeeee", values)} */}
//               {/* {values.education && values.education.length > 0 ? (
//                         values.skill.map((indvEducation, index) => (
//                           <div key={index}>
//                             <Field
//                               type="text"
//                               name={`education.${index}`}
//                               value={indvEducation}
//                               onChange={handleChange}
//                               onBlur={handleBlur}
//                             />
//                             <ErrorMessage
//                               name={`education.${index}`}
//                               component="div"
//                             />
//                             <button
//                               type="button"
//                               onClick={() => arrayHelpers.remove(index)}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         ))
//                       ) : (
//                         <button
//                           type="button"
//                           onClick={() => arrayHelpers.push("")}
//                         >
//                           Add Education
//                         </button>
//                       )}
//                     </div>
//                   )}
//                 />
//               </label> */}

//               <div style={{ paddingTop: "10px" }}>
//                 <button
//                   className={styles.button}
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Form;
