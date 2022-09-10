import { useState } from "react";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Detail from "./page/details/Detail";
import Toast from "./page/toast/Toast";
import Like from "./page/like/Like";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Router>
        <div className="home">
          <Sidebar tab={tab} setTab={setTab} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Toast tab={tab} />} />
              <Route path="/toast" element={<Toast tab={tab} />} />
              <Route path="/toast/:id" element={<Detail />} />
              <Route path="/like" element={<Like />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
