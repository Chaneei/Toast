import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detail.scss";

const Detail = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [toast, setToast] = useState({});
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    const getToastById = async () => {
      try {
        const res = await axios.get("/api/toast/" + path);
        setToast(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(JSON.stringify(err));
      }
    };
    getToastById();
  }, [path]);
  return (
    <div className="detail">
      <h3>상세정보</h3>
      <img src={toast.img} alt="" />
      <h4 className="toast-title">{toast.title}</h4>
      <span>{toast.engtitle}</span>
      <p>{toast.desc}</p>

      <button onClick={handleClick}>메뉴보기</button>
    </div>
  );
};

export default Detail;
