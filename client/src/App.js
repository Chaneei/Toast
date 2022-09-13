import { useState } from "react";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Detail from "./page/details/Detail";
import Toast from "./page/toast/Toast";
import Beverge from "./page/beverage/Beverge";
import Coffee from "./page/coffee/Coffee";
import Like from "./page/like/Like";
import Modal from "react-modal";

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
            <Modal
              onRequestClose={() => setModalIsOpen(false)}
              isOpen={modalIsOpen}
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
            >
              this is Modal
              <button onClick={() => setModalIsOpen(false)}>닫기</button>
            </Modal>
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
