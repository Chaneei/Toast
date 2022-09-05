import React from "react";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidelogo">
        <img src="https://www.isaac-toast.co.kr/assets/images/main/logo.svg" />
      </div>
      <ul className="sidemenu">
        <li className="act">
          <i className="sidebaricon fa-solid fa-bread-slice"></i>TOAST
        </li>
        <li>
          <i class="sidebaricon fa-solid fa-glass-water"></i>BEVERAGE
        </li>
        <li>
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
          <i class="sidebaricon fa-solid fa-envelope"></i> 제보 / 문의
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
