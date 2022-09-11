import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/post/Post";
import "./coffee.scss";

const Coffee = ({ tab }) => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const getCoffee = async () => {
      try {
        const res = await axios.get("/api/coffee");
        setCoffee(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCoffee();
  }, []);
  return (
    <>
      <div className="coffee">
        {tab === 1 && (
          <>
            <div className="coffee-title">
              <h3>COFFEE&TEA</h3>
              <span>100% 아라비카 원두로 내린 더블샷 커피</span>
            </div>
          </>
        )}

        <div className="coffee-menu">
          <Post tab={tab} coffee={coffee} />
        </div>
      </div>
    </>
  );
};

export default Coffee;
