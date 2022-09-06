import { useState } from "react";
import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Toast from "./components/toast/Toast";

function App() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="home">
        <Sidebar tab={tab} setTab={setTab} />
        <div className="main">
          <Toast tab={tab} />
        </div>
      </div>
    </>
  );
}

export default App;
