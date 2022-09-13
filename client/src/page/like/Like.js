import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./like.scss";
const Like = () => {
  const [like, setLike] = useState([]);
  useEffect(() => {
    const getLike = async () => {
      try {
        const res = await axios.get("/api/like");
        setLike(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLike();
  }, []);

  return (
    <>
      <div className="like">
        <div className="like-title">
          <h3>FAVORITES</h3>
          <span>내가 직접 고른 베스트 메뉴</span>
        </div>
        {like.length ? (
          <div className="like-menu">
            {like.map((c, index) => (
              <div className="like-item">
                <img src={c.img} alt="" />
                <Link className="link" to={`/like/${like[index]._id}`}>
                  <p>{c.title}</p>
                </Link>
                <span>{c.engtitle}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="like-none">
            <i className="likeicon fa-solid fa-heart-crack"></i>
            <span>Empty</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Like;
