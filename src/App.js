// import { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./components/navbar";
import "antd/dist/antd.css";
import "./styles.css";

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL} hashType="slash">
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Routing />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
