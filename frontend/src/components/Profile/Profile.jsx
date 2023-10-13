import React from "react";
import Logout from "../Auth/Logout";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Hi, {user.fullName} Ji</h1>
      <br />
      <br />
      <h5>User Details </h5>
      <h6>Username: {user.userName}</h6>
      <h6>Phone Number: {user.phoneNumber}</h6>
      <h6>Email: {user.email}</h6>
      <hr />
      <Logout />
    </div>
  );
};

export default Profile;
