import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detail.scss";

const Detail = ({ tab }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [menu, setMenu] = useState({});
  // const [like, setLike] = useState([]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const putClick = (e) => {
    e.preventDefault();
    const likeMenu = {
      title: menu.title,
      img: menu.img,
      engtitle: menu.engtitle,
      desc: menu.desc,
    };
    const postLikeMenu = async () => {
      try {
        await axios.post("/api/like", likeMenu);
        window.alert("찜완료!");
      } catch (err) {
        console.log(err);
      }
    };
    postLikeMenu();
  };

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
      <form onSubmit={putClick}>
        <img src={menu.img} alt="" />
        <h4 className="toast-title">{menu.title}</h4>
        <span>{menu.engtitle}</span>
        <p>{menu.desc}</p>

        <div className="btn">
          <input type="submit" value="💓 찜하기" />
          <button onClick={handleClick}>메뉴보기</button>
        </div>
      </form>
    </div>
  );
};

export default Detail;
