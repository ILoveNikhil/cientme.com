// src/components/Auth/Login.jsx

import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/Action/UserAction";
import { Link } from "react-router-dom";

const Login = ({
  logo,
  openEye,
  closeEye,
  showPassword,
  togglePasswordVisibility,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
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
          <input disabled={loading} type="submit" value={"Log In"} />
        </div>
        <br />
        <br />
        <hr />
        <center>or</center>
        <Link to="/signup">Sign Up</Link>
        <br />
        <hr />
        <center>or</center>
        <Link to="/forgot/password">Forget Password</Link>
      </form>
    </div>
  );
};

export default Login;
