import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detail.scss";

const Detail = ({ tab }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [menu, setMenu] = useState({});
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  const putClick = () => {};
  useEffect(() => {
    const getToastById = async () => {
      try {
        const res = await axios.get("/api/toast/" + path);
        setMenu(res.data);
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    };

    const getCoffeeById = async () => {
      try {
        const res = await axios.get("/api/coffee/" + path);
        setMenu(res.data);
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    };
    const getBeverageById = async () => {
      try {
        const res = await axios.get("/api/beverage/" + path);
        setMenu(res.data);
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    };
    if (tab === 0) {
      getToastById();
    } else if (tab === 1) {
      getCoffeeById();
    } else if (tab === 2) {
      getBeverageById();
    }
  }, [path]);

  return (
    <div className="detail">
      <h3>상세정보</h3>
      <img src={menu.img} alt="" />
      <h4 className="toast-title">{menu.title}</h4>
      <span>{menu.engtitle}</span>
      <p>{menu.desc}</p>

      <div className="btnwrap">
        <button onClick={handleClick}>메뉴보기</button>
        <button onClick={putClick}>
          <i className="puticon fa-solid fa-heart"></i> 찜하기
        </button>
      </div>
    </div>
  );
};

export default Detail;
