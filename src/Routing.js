import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routing;
