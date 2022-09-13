import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./more.scss";
const More = () => {
  const navigate = useNavigate();
  const [more, setMore] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/like/${path}`);
      window.alert("지우기 완료");
      window.location.replace("/like");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getMoreLike = async () => {
      try {
        const res = await axios.get("/api/like/" + path);
        setMore(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMoreLike();
  }, [path]);

  return (
    <div className="more">
      <h3>상세정보</h3>
      <div className="more-wrap">
        <img src={more.img} alt="" />
        <h4 className="more-title">{more.title}</h4>
        <span>{more.engtitle}</span>
        <p>{more.desc}</p>

        <div className="btn">
          <button onClick={handleDelete}>💔 지우기</button>
          <button onClick={handleClick}>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

export default More;
