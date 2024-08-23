import { useState, useEffect } from "react";
import students from "./students.json";

function App() {
  const [studentsData, setStudentsData] = useState([]);
  const [actionType, setActionType] = useState("CREATE");

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    address: "",
    "roll number": "",
    "total marks": "",
  });

  useEffect(() => {
    setStudentsData(students);
  }, []);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const restStudent = studentsData.filter(
      (idvstudent) => idvstudent.id !== newStudent.id
    );
    console.log(restStudent);
    setStudentsData([newStudent, ...restStudent]);
    setNewStudent({
      id: "",
      name: "",
      address: "",
      "roll number": "",
      "total marks": "",
    });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();

    const newStudentData = { ...newStudent, id: studentsData.length + 1 };
    setStudentsData([...studentsData, newStudentData]);
    setNewStudent({
      id: "",
      name: "",
      address: "",
      "roll number": "",
      "total marks": "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleEditStudent = (id) => {
    const filteredStudent = studentsData.find(
      (idvstudent) => idvstudent.id === id
    );
    setActionType("EDIT");
    setNewStudent(filteredStudent);
  };

  const handleDeleteStudent = (id) => {
    const a = studentsData.filter((idvstudent) => idvstudent.id !== id);
    setStudentsData(a);
  };

  return (
    <div>
      <h1>Students Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((idvstudent) => (
            <tr key={idvstudent.id}>
              <td>{idvstudent.id}</td>
              <td>{idvstudent.name}</td>
              <td>{idvstudent.address}</td>
              <td>{idvstudent.rollNumber}</td>
              <td>{idvstudent.totalMarks}</td>
              <td>
                <button onClick={() => handleEditStudent(idvstudent.id)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteStudent(idvstudent.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Add new Student</h2>
        <form
          onSubmit={
            actionType === "CREATE" ? handleCreateSubmit : handleEditSubmit
          }
        >
          <label>ID:</label>
          <input
            type="text"
            placeholder="Enter ID"
            name="id"
            value={newStudent.id}
            onChange={handleChange}
          />
          <br />

          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={newStudent.name}
            onChange={handleChange}
          />
          <br />
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={newStudent.address}
            onChange={handleChange}
          />
          <br />
          <label>Roll Number:</label>
          <input
            type="text"
            placeholder="Enter rollnumber"
            name="roll number"
            value={newStudent["roll number"]}
            onChange={handleChange}
          />
          <br />
          <label>Total Marks:</label>
          <input
            type="text"
            name="total marks"
            placeholder="Enter total marks"
            value={newStudent["total marks"]}
            onChange={handleChange}
          />
          <br />
          <button type="submit">
            {actionType === "CREATE" ? "Add Student" : "Edit Student"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
