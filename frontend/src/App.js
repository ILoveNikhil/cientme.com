import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import NotFound from "./components/NotFound/NotFound";
import UpdatePassword from "./components/Auth/UpdatePassword";
import { useEffect, useState } from "react";
import { loadUser } from "./Redux/Action/UserAction";
import logo from "./components/img/logo.jpg";
import openEye from "./components/img/eye-open.png";
import closeEye from "./components/img/eye-close.png";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Login
                  logo={logo}
                  openEye={openEye}
                  closeEye={closeEye}
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Profile />
              ) : (
                <Signup
                  logo={logo}
                  openEye={openEye}
                  closeEye={closeEye}
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              )
            }
          />

          <Route
            path="/update/password"
            element={
              isAuthenticated ? (
                <UpdatePassword
                  logo={logo}
                  openEye={openEye}
                  closeEye={closeEye}
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/forgot/password"
            element={
              isAuthenticated ? (
                <UpdatePassword />
              ) : (
                <ForgotPassword
                  logo={logo}
                  openEye={openEye}
                  closeEye={closeEye}
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              )
            }
          />

          <Route
            path="/password/reset/:token"
            element={
              isAuthenticated ? (
                <UpdatePassword />
              ) : (
                <ResetPassword
                  logo={logo}
                  openEye={openEye}
                  closeEye={closeEye}
                  showPassword={showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                />
              )
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
