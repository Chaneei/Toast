import React, { useState, useEffect } from "react";
import Post from "../../components/post/Post";
import axios from "axios";
import "./beverage.scss";

const Beverge = ({ tab }) => {
  const [beverage, setBeverage] = useState([]);

  useEffect(() => {
    const getBeverage = async () => {
      try {
        const res = await axios.get("/api/beverage");
        setBeverage(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBeverage();
  }, []);
  return (
    <>
      {tab === 2 && (
        <div className="beverage">
          <div className="beverage-title">
            <h3>BEVERAGE</h3>
            <span>토스트와 어울리는 다양한 음료</span>
          </div>

          <div className="beverage-menu">
            <Post tab={tab} beverage={beverage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Beverge;
