// src/components/Auth/Signup.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignupUser } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";
import "../style/Auth.css";

const Signup = ({
  logo,
  openEye,
  closeEye,
  showPassword,
  togglePasswordVisibility,
}) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "fullName : ",
      fullName,
      "userName : ",
      userName,
      "phoneNumber : ",
      phoneNumber,
      "email : ",
      email,
      "password : ",
      password
    );
    dispatch(SignupUser(fullName, userName, phoneNumber, email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  //
  return (
    <div className="form_container">
      <form className="Auth_form" onSubmit={submitHandler}>
        <img src={logo} alt="" />
        <h6 className="form_title">Sign Up to experience cientme</h6>
        {/* Full Name */}
        <div className="input_data_box">
          <input
            type="text"
            placeholder="Full Name *"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* username */}
        <div className="input_data_box">
          <input
            type="text"
            placeholder="@Username *"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="input_data_box">
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="Phone Number *"
            min="10"
            maxLength={"10"}
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="input_data_box">
          <input
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="input_data_box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={showPassword ? openEye : closeEye}
            alt="Show password"
            className="eye_icon"
            onClick={togglePasswordVisibility}
          />
        </div>
        {/* Submit Form  */}
        <div className="input_data_box">
          <input disabled={loading} type="submit" value={"Sign Up"} />
        </div>
        <br />
        <br />
        <hr />
        <center>or</center>
        <Link to="/">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
