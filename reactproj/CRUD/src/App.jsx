import { useEffect, useState } from "react";
import data from "./data.json";
function App() {
  const [Data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(data);
  }, []);

  function handleEdit() {
    const dt = Data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  }

  function handleDelete(id) {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        setData(Data.filter((item) => item.id !== id));
      }
    }
  }

  function handleSave() {}

  function handleClear() {
    setId(0);
    setFirstNam("");
    setLastName("");
    setAge("");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <form>
          <label>
            First Name:
            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <button onClick={() => handleSave()} className="btn btn-primary">
            Save
          </button>
          &nbsp;
          <button onClick={() => handleClear()} className="btn btn-danger">
            Clear
          </button>
        </form>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <td>S.N</td>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                &nbsp;
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
