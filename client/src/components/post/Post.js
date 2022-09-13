import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.scss";
const Post = ({ tab, toast, coffee, beverage }) => {
  const [menu1, setMenu1] = useState(2);
  const [menu2, setMenu2] = useState(2);
  const [menu3, setMenu3] = useState(2);
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
              {toast.slice(0, menu1).map((c, index) => (
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
                  toast.length === menu1 ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  toast.length === menu1 ? undefined : setMenu1(menu1 + 2)
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
              {coffee.slice(0, menu2).map((c, index) => (
                <div className="post-item">
                  <img src={c.img} alt="" />
                  <Link className="link" to={`/coffee/${coffee[index]._id}`}>
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${
                  coffee.length === menu2 ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  coffee.length === menu2 ? undefined : setMenu2(menu2 + 2)
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
              {beverage.slice(0, menu3).map((c, index) => (
                <div className="post-item">
                  <img src={c.img} alt="" />
                  <Link
                    className="link"
                    to={`/beverage/${beverage[index]._id}`}
                  >
                    <p>{c.title}</p>
                  </Link>
                  <span>{c.engtitle}</span>
                </div>
              ))}
              <button
                className={`slidebtn ${
                  beverage.length === menu3 ? `nomorebtn` : undefined
                }`}
                onClick={() =>
                  beverage.length === menu3 ? undefined : setMenu3(menu3 + 2)
                }
              >
                <i className="slideicon fa-solid fa-caret-down"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Post;
