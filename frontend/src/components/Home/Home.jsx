import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Home</h1>
      <h4>
        Hi <span style={{ color: "green" }}>{user.fullName} </span>Ji
      </h4>
    </div>
  );
};

export default Home;
