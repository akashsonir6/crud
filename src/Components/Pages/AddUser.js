import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
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
    // const phonefilter =
    //   e.target.name === "phone" ? e.target.value.substr(0, 10) : e.taget.value;
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:3004/users", input);
    navigate("/", { replace: true });
    console.log("success");
  };

  return (
    <div>
      <div class="container mx-auto ">
        <h2 class="center">User Details</h2>
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
            <button type="submit" class="btn btn-success ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
