// import { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
const ViewDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/users?id=${id}`).then((res) => {
      setUser(res.data[0]);
    });
  }, [id]);
  console.log("selected user:", user);
  console.log("selected user id:", id);
  if (!user) {
    return <div>user not found</div>;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>
        User {user.id} Details
      </h2>
      <div className="card">
        <div className="card-content">
          <p>
            <strong>Name: </strong>
            {user.name}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>Phone: </strong>
            {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
