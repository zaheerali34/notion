import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");

  const getStorage = ()=> {
    const title = localStorage.setItem("title");
    if (title) {
      setTitle(title);
      localStorage.getItem('title')
    }
  }

  return (
    <div>
      <Outlet context={{ title, setTitle }} />
    </div>
  );
}

export default App;
