import React from "react";
import Post from "../../components/post/Post";
import "./toast.scss";

const Toast = ({ tab }) => {
  return (
    <>
      <div className="toast">
        {tab == 0 && (
          <>
            <div className="toast-title">
              <h3>TOAST</h3>
              <span>주문 즉시 갓 구워낸 토스트에 달콤함 이삭소스</span>
            </div>
            <div className="toast-menu">
              <Post tab={tab} />
            </div>
          </>
        )}
        {tab == 1 && (
          <>
            <div className="toast-title">
              <h3>BEVERAGE</h3>
              <span>토스트와 어울리는 다양한 음료</span>
            </div>
            <div className="toast-menu">
              <Post tab={tab} />
            </div>
          </>
        )}
        {tab == 2 && (
          <>
            <div className="toast-title">
              <h3>COFFEE&TEA</h3>
              <span>100% 아라비카 원두로 내린 더블샷 커피</span>
            </div>
            <div className="toast-menu">
              <Post tab={tab} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Toast;
