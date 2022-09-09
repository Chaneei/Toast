import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./post.scss";
const Post = ({ tab, toast }) => {
  const [menu, setMenu] = useState(2);
  return (
    <>
      <div className="post">
        <select className="post-filter">
          <option>최신순</option>
          <option>인기순</option>
          <option>이름순</option>
        </select>
        {tab === 0 && (
          <>
            <div className="post-wrap">
              {toast.slice(0, menu).map((c) => (
                <div className="post-item">
                  <img src={c.img} />
                  <Link className="link" to={`/detail/${toast._id}`}>
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${toast.length === menu && `nomorebtn`}`}
                onClick={() =>
                  toast.length === menu ? undefined : setMenu(menu + 2)
                }
              >
                <i class="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </>
        )}
        {tab === 1 && (
          <>
            <div className="post-wrap"></div>
          </>
        )}
        {tab === 2 && (
          <>
            <div className="post-wrap"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
