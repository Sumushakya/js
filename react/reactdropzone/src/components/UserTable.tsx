import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
const UserTable = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((res) => setUserDetails(res.data));
  }, []);

  const handleView = (id: number) => {
    navigate(`/users/${id}`);
  };
  const handleDelete = (id: number) => {
    console.log("deleted id:", id);
    const filterdata = userDetails.filter((indvUser) => indvUser.id !== id);
    setUserDetails(filterdata);
    // alert("Deleted successfully");
  };

  return (
    <div>
      <h2>User Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((indvUser) => (
            <tr key={indvUser.id}>
              <td>{indvUser.name}</td>
              <td className="button">
                <button onClick={() => handleView(indvUser.id)}>
                  View Details
                </button>
                <button onClick={() => handleDelete(indvUser.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
