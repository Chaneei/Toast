import React from "react";
import { Link } from "react-router-dom";
import "./post.scss";
const Post = ({ tab }) => {
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
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast0.png" />
                {/* <Link to={`/detail/${toast._id}`}> */}
                <p>딥치즈베이컨 토스트</p>
                {/* </Link> */}
                <span>Deep Cheese Bacon Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast1.png" />
                <p>더블소세지 토스트</p>
                <span>Double Saussage Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast2.png" />
                <p>피자 토스트</p>
                <span>Pizza Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast3.png" />
                <p>딥치즈포테이토 토스트</p>
                <span>Deep Cheese Potato Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast4.png" />
                <p>트리플소세지 토스트</p>
                <span>Tripple Saussage Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast5.png" />
                <p>허니갈릭 햄치즈</p>
                <span>Honey Garlic Ham Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast6.png" />
                <p>베이컨 포테이토 피자</p>
                <span>Bacon Potato Pizza Toast</span>
              </div>
              <div className="post-item">
                <img src="https://delouvree.github.io/images/toast7.png" />
                <p>베이컨 치즈 베이글</p>
                <span>Bacon cheese Toast</span>
              </div>
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
