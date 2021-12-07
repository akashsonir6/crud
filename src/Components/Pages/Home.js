import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const users = await axios.get(`http://localhost:3004/users`);
    const data = users.data;
    setUser(data.reverse());
  };
  // Delete user function
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    getUser();
  };
  return (
    <div>
      <h1> Users tables </h1>
      <div className="Container mx-5">
        <table class="table table-success table-striped border shadow mt-2">
          <thead>
            <tr>
              <th scope="col"> User_Id </th> <th scope="col"> Name </th>
              <th scope="col"> UserName </th> <th scope="col"> Email </th>
              <th scope="col"> Phone </th> <th scope="col"> Action </th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr>
                <th scope="col"> {index + 1} </th> <td> {user.name} </td>
                <td> {user.username} </td> <td> {user.email} </td>
                <td> {user.phone} </td>
                <td>
                  <button className="btn btn-success mx-2"> View </button>
                  <Link className="btn btn-primary" to={`/edituser/${user.id}`}>
                    Edit
                  </Link>

                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
