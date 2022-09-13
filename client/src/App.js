import { useState } from "react";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Detail from "./page/details/Detail";
import Toast from "./page/toast/Toast";
import Beverge from "./page/beverage/Beverge";
import Coffee from "./page/coffee/Coffee";
import Like from "./page/like/Like";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import More from "./page/more/More";

function App() {
  const [tab, setTab] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <Router>
        <div className="home">
          <Sidebar
            tab={tab}
            setTab={setTab}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
          <div className="main">
            {modalIsOpen && (
              <div className="modal">
                <div className="modal-menu">
                  <i class="modal-icon fa-solid fa-envelope"></i>
                  <h4>Email</h4>
                  <p>lsc90726@gmail.com</p>
                  <a href="mailto:lsc90726@gmail.com" target="_blank">
                    <span>Send a message</span>
                  </a>
                </div>
                <div className="modal-menu">
                  <i class="modal-icon fa-brands fa-github"></i>
                  <h4>Github</h4>
                  <p>Chaneei</p>
                  <a href="https://github.com/Chaneei" target="_blank">
                    <span>Go to github</span>
                  </a>
                </div>
                <button
                  className="closebtn"
                  onClick={() => setModalIsOpen(false)}
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>
              </div>
            )}
            <Routes>
              <Route path="/" element={<Toast tab={tab} />} />
              <Route path="/toast" element={<Toast tab={tab} />} />
              <Route path="/toast/:id" element={<Detail tab={tab} />} />
              <Route path="/beverage" element={<Beverge tab={tab} />} />
              <Route path="/beverage/:id" element={<Detail tab={tab} />} />
              <Route path="/coffee" element={<Coffee tab={tab} />} />
              <Route path="/coffee/:id" element={<Detail tab={tab} />} />
              <Route path="/like" element={<Like />} />
              <Route path="/like/:id" element={<More />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
