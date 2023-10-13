// src/components/Auth/Signup.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignupUser } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "fullName : ",
      formData.fullName,
      "userName : ",
      formData.userName,
      "phoneNumber : ",
      formData.phoneNumber,
      "email : ",
      formData.email,
      "password : ",
      formData.password
    );
    dispatch(SignupUser(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  //
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={formData.fullName}
          onChange={changeHandle}
        />
        <input
          type="text"
          placeholder="@Username"
          required
          value={formData.userName}
          onChange={changeHandle}
        />
        <input
          type="Number"
          placeholder="Phone Number"
          required
          value={formData.phoneNumber}
          onChange={changeHandle}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={changeHandle}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={changeHandle}
        />

        <Link to="/">
          <h4>Already Signed Up? Login Now</h4>
        </Link>

        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
