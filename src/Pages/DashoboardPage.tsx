import MainPage from "../Dashboard/MainPage";
import SiteBar from "../Dashboard/SiteBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../Components/Forms/Login";
import { useEffect, useState } from "react";

const auth = getAuth();

function DashoboardPage() {
  const [user, setUser] = useState(null);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user){
      setUser(user);
    } else {
      setUser(null);
    }
  });
}, []);

if (user === null){
  return (
    <>
      <Login />
    </>
  );
}
  return (
    <div className="w-full h-full">
      <SiteBar />
      <MainPage />
    </div>
  );
}

export default DashoboardPage;
