import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./toast.scss";
import axios from "axios";

const Toast = ({ tab }) => {
  const [toast, setToast] = useState([]);

  useEffect(() => {
    const getToast = async () => {
      try {
        const res = await axios.get("/api/toast");
        setToast(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getToast();
  }, []);

  return (
    <>
      <div className="toast">
        {tab === 0 && (
          <>
            <div className="toast-title">
              <h3>TOAST</h3>
              <span>주문 즉시 갓 구워낸 토스트에 달콤함 이삭소스</span>
            </div>
          </>
        )}

        <div className="toast-menu">
          <Post tab={tab} toast={toast} />
        </div>
      </div>
    </>
  );
};

export default Toast;
