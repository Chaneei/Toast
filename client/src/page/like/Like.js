import React, { useEffect, useState } from "react";
import axios from "axios";
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

  // const handleDelete = () => {
  //   const deleteLike = async () => {
  //     try {
  //     } catch (err) {}
  //   };
  //   deleteLike();
  // };

  return (
    <>
      <div className="like">
        <div className="like-title">
          <h3>Like</h3>
        </div>
        <div className="like-menu">
          {like.map((c, index) => (
            <div className="like-item">
              <img src={c.img} alt="" />
              <p>{c.title}</p>
              <span>{c.engtitle}</span>
              <button>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Like;
