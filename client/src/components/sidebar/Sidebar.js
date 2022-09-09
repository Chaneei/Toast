import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = ({ tab, setTab }) => {
  const [mode, setMode] = useState("light");
  return (
    <div className="sidebar">
      <div className="sidelogo">
        <img
          src="https://www.isaac-toast.co.kr/assets/images/main/logo.svg"
          alt=""
        />
      </div>
      <ul className="sidemenu">
        <Link className="link" to="/">
          <li className={tab === 0 && `act`} onClick={() => setTab(0)}>
            <i className="sidebaricon fa-solid fa-bread-slice"></i>TOAST
          </li>
        </Link>
        <Link className="link" to="/">
          <li className={tab === 1 && `act`} onClick={() => setTab(1)}>
            <i class="sidebaricon fa-solid fa-glass-water"></i>BEVERAGE
          </li>
        </Link>
        <Link className="link" to="/">
          <li className={tab === 2 && `act`} onClick={() => setTab(2)}>
            <i className="sidebaricon fa-solid fa-mug-hot"></i>TEA&COFFEE
          </li>
        </Link>
      </ul>

      <ul className="sidemenu">
        <Link className="link" to="/like">
          <li className={tab === 3 && `act`} onClick={() => setTab(3)}>
            <i className="sidebaricon fa-solid fa-heart"></i> 즐겨찾기
          </li>
        </Link>
        <li>
          <i className="sidebaricon fa-solid fa-envelope"></i> 제보 / 문의
        </li>
      </ul>

      <ul className="sidemenu">
        <li onClick={() => setMode(!mode)}>
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
