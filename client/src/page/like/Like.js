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
          <h3>Like</h3>
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
          <div className="like-none"></div>
        )}
      </div>
    </>
  );
};

export default Like;
