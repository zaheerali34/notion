import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <Outlet context={{ title, setTitle }} />
      <ToastContainer />
    </div>
  );
}

export default App;
