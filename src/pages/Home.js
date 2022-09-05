import React from "react";
import Sidebar from "../components/Sidebar";
import "./home.scss";
import Toast from "./Toast";

const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <Toast />
      </div>
    </>
  );
};

export default Home;
