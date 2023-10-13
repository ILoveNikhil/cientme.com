import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Redux/Action/UserAction";
import { Link } from "react-router-dom";

const UpdatePassword = ({
  logo,
  openEye,
  closeEye,
  showPassword,
  togglePasswordVisibility,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, message } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
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
  }, [dispatch, error, alert, message]);

  return (
    <div className="form_container">
      <form className="Auth_form" onSubmit={submitHandler}>
        <img src={logo} alt="" />
        <h6 className="form_title">Sign Up to experience cientme</h6>

        {/* Old Password */}
        <div className="input_data_box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Old Password *"
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <img
            src={showPassword ? openEye : closeEye}
            alt="Show password"
            className="eye_icon"
            onClick={togglePasswordVisibility}
          />
        </div>
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
          <input disabled={loading} type="submit" value={"Update Password"} />
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
