import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Edituser = () => {
  useEffect(() => {
    userforedit();
  }, []);

  const { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: "",
  });

  const { name, username, email, phone, website, address } = input;

  const change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log("Hello");
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3004/users/${id}`, input);
    navigate("/", { replace: true });
    console.log("success");
  };

  const userforedit = async () => {
    const user = await axios.get(`http://localhost:3004/users/${id}`);
    setInput(user.data);
    console.log(user);
  };

  return (
    <div>
      <div class="container mx-auto ">
        <h2 class="center">Edit User No</h2>
        <form class="row g-3 input_form" onSubmit={(e) => submit(e)}>
          <div class="col-md-6">
            <label for="uname" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              // id="name"
              name="name"
              value={name}
              onChange={(e) => change(e)}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              value={username}
              onChange={(e) => change(e)}
              required
            />
          </div>
          <div class="col-6">
            <label for="Phone" class="form-label">
              phone
            </label>
            <input
              type="number"
              maxlength="4"
              class="form-control"
              id="phone"
              placeholder="1234567890"
              name="phone"
              value={phone}
              onChange={(e) => change(e)}
              required
            />
          </div>
          <div class="col-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="xyz@email.com"
              name="email"
              value={email}
              onChange={(e) => change(e)}
              required
            />
          </div>
          <div class="col-6">
            <label for="inputAddress2" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address"
              value={address}
              onChange={(e) => change(e)}
              required
            />
          </div>
          <div class="col-6">
            <label for="inputAddress2" class="form-label">
              website
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="www.xyz.com"
              name="website"
              value={website}
              onChange={(e) => change(e)}
              required
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-info ">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edituser;
