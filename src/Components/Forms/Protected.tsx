import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Component }: { Component: React.FC }) {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, []);

  return <Component />;
}

export default Protected;
