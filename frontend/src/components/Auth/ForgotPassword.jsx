import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Redux/Action/UserAction";
import { Link } from "react-router-dom";

const ForgotPassword = ({
  logo,
  openEye,
  closeEye,
  showPassword,
  togglePasswordVisibility,
}) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  // const { error, loading, message } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector((state) => state.user);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
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
        {/* Submit Form  */}
        <div className="input_data_box">
          <input disabled={loading} type="submit" value={"Send Email"} />
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

export default ForgotPassword;
