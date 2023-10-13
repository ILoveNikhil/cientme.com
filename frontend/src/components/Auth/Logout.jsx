import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Action/UserAction";

const Logout = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully");
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
