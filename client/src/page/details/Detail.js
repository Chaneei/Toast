import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/base.scss";
const Detail = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [toast, setToast] = useState({});

  useEffect(() => {
    const getToastById = async () => {
      try {
        const res = await axios.get("/toast/" + path);
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
      Detail
      <img src={toast.img} alt="" />
      <h3>{toast.title}</h3>
      <span>{toast.engtitle}</span>
      <p>{toast.desc}</p>
    </div>
  );
};

export default Detail;
