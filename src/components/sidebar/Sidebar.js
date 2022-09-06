import React, { useState } from "react";
import "./sidebar.scss";
const Sidebar = ({ tab, setTab }) => {
  const [mode, setMode] = useState("light");
  return (
    <div className="sidebar">
      <div className="sidelogo">
        <img src="https://www.isaac-toast.co.kr/assets/images/main/logo.svg" />
      </div>
      <ul className="sidemenu">
        <li className={tab === 0 && `act`} onClick={() => setTab(0)}>
          <i className="sidebaricon fa-solid fa-bread-slice"></i>TOAST
        </li>
        <li className={tab === 1 && `act`} onClick={() => setTab(1)}>
          <i class="sidebaricon fa-solid fa-glass-water"></i>BEVERAGE
        </li>
        <li className={tab === 2 && `act`} onClick={() => setTab(2)}>
          <i className="sidebaricon fa-solid fa-mug-hot"></i>TEA&COFFEE
        </li>
      </ul>
      {/* <ul className="sidemenu">
        <li>장바구니</li>
        <li>회원가입</li>
        <li>로그인</li>
      </ul> */}

      <ul className="sidemenu">
        <li>
          <i class="sidebaricon fa-solid fa-heart"></i> 즐겨찾기
        </li>
        <li>
          <i class="sidebaricon fa-solid fa-envelope"></i> 제보 / 문의
        </li>
      </ul>

      <ul className="sidemenu">
        <li onClick={() => setMode(!mode)}>
          {mode ? (
            <i class="sidebaricon fa-solid fa-moon"></i>
          ) : (
            <i class="sidebaricon fa-solid fa-sun"></i>
          )}
          다크모드
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
