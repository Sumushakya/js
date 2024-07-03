import { useState, useEffect } from "react";
import students from "./students.json";

function App() {
  const [studentsData, setStudentsData] = useState([]);
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

  const handleSubmit = (e) => {
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

  const handleEditStudent = (e) => {
    alert(id);
  };

  const handleDeleteStudent = (id) => {
    const a = studentsdata.filter((student) => student.id !== id);
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
              <td>{idvstudent["roll number"]}</td>
              <td>{idvstudent["total marks"]}</td>
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
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              placeholder="Enter id"
              name="id"
              value={newStudent.id}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={newStudent.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              value={newStudent.address}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Roll Number:
            <input
              type="text"
              placeholder="Enter rollnumber"
              name="roll number"
              value={newStudent["roll number"]}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Total Marks:
            <input
              type="text"
              name="total marks"
              placeholder="Enter total marks"
              value={newStudent["total marks"]}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
}

export default App;
