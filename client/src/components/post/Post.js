import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.scss";
const Post = ({ tab, toast, coffee, beverage }) => {
  const [menu, setMenu] = useState(2);
  return (
    <>
      <div className="post">
        {/* <select className="post-filter">
          <option>최신순</option>
          <option>인기순</option>
          <option>이름순</option>
        </select> */}
        {tab === 0 && (
          <>
            <div className="post-wrap">
              {toast.slice(0, menu).map((c, index) => (
                <div className="post-item">
                  <img src={c.img} alt="" />
                  <Link className="link" to={`/toast/${toast[index]._id}`}>
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${
                  toast.length === menu ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  toast.length === menu ? undefined : setMenu(menu + 2)
                }
              >
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </>
        )}
        {tab === 1 && (
          <>
            <div className="post-wrap">
              {coffee.slice(0, menu).map((c, index) => (
                <div className="post-item">
                  <img src={c.img} alt="" />
                  <Link className="link" to={`/detail/${coffee[index]._id}`}>
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${
                  coffee.length === menu ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  coffee.length === menu ? undefined : setMenu(menu + 2)
                }
              >
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </>
        )}
        {tab === 2 && (
          <>
            <div className="post-wrap">
              {beverage.slice(0, menu).map((c, index) => (
                <div className="post-item">
                  <img src={c.img} alt="" />
                  <Link className="link" to={`/detail/${beverage[index]._id}`}>
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${
                  coffee.length === menu ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  coffee.length === menu ? undefined : setMenu(menu + 2)
                }
              >
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
