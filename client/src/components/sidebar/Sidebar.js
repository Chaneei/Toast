import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = ({ tab, setTab, modalIsOpen, setModalIsOpen }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
    }
  }, []);

  const darkOnOff = () => {
    setMode(!mode);
    if (
      document.getElementsByTagName("html")[0].classList.contains("ui-dark")
    ) {
      document.getElementsByTagName("html")[0].classList.remove("ui-dark");
      window.localStorage.setItem("bgMode", "light");
    } else {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidelogo">
        <img
          src="https://www.isaac-toast.co.kr/assets/images/main/logo.svg"
          alt=""
        />
      </div>
      <ul className="sidemenu">
        <Link className="link" to="/toast">
          <li
            className={tab === 0 ? `act` : undefined}
            onClick={() => setTab(0)}
          >
            <i className="sidebaricon fa-solid fa-bread-slice"></i>TOAST
          </li>
        </Link>
        <Link className="link" to="/coffee">
          <li
            className={tab === 1 ? `act` : undefined}
            onClick={() => setTab(1)}
          >
            <i className="sidebaricon fa-solid fa-glass-water"></i>TEA&COFFEE
          </li>
        </Link>
        <Link className="link" to="/beverage">
          <li
            className={tab === 2 ? `act` : undefined}
            onClick={() => setTab(2)}
          >
            <i className="sidebaricon fa-solid fa-mug-hot"></i>BEVERAGE
          </li>
        </Link>
      </ul>

      <ul className="sidemenu">
        <Link className="link" to="/like">
          <li
            className={tab === 3 ? `act` : undefined}
            onClick={() => setTab(3)}
          >
            <i className="sidebaricon fa-solid fa-heart"></i> 즐겨찾기
          </li>
        </Link>
        <li className="link" onClick={() => setModalIsOpen(true)}>
          <i className="sidebaricon fa-solid fa-envelope"></i> 제보 / 문의
        </li>
      </ul>

      <ul className="sidemenu">
        <li className="link" onClick={darkOnOff}>
          {mode ? (
            <i className="sidebaricon fa-solid fa-moon"></i>
          ) : (
            <i className="sidebaricon fa-solid fa-sun"></i>
          )}
          다크모드
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
