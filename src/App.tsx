import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");
  
  return (
    <div>
      <Outlet context={{ title, setTitle }} />
    </div>
  );
}

export default App;
