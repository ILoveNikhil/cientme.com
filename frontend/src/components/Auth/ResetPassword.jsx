import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { resetPassword } from "../../Redux/Action/UserAction";

const ResetPassword = ({
  logo,
  openEye,
  closeEye,
  showPassword,
  togglePasswordVisibility,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const params = useParams();
  const { error, loading, message } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, newPassword, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, dispatch, message]);

  return (
    <div className="form_container">
      <form className="Auth_form" onSubmit={submitHandler}>
        <img src={logo} alt="" />
        <h6 className="form_title">Sign Up to experience cientme</h6>

        {/* New Password */}
        <div className="input_data_box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password *"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <img
            src={showPassword ? openEye : closeEye}
            alt="Show password"
            className="eye_icon"
            onClick={togglePasswordVisibility}
          />
        </div>
        {/* Confirm Password */}
        <div className="input_data_box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password *"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <input disabled={loading} type="submit" value={"Reset Password"} />
        </div>
        <br />
        <hr />
        <center>or</center>
        <Link to="/">Login</Link>
        <br />
        <hr />
        <center>or</center>
        <Link to="/forgot/password">Request Another Token</Link>
      </form>
    </div>
  );
};

export default ResetPassword;
