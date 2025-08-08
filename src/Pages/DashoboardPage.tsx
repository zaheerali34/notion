import MainPage from "../Dashboard/MainPage";
import SiteBar from "../Dashboard/SiteBar";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import Login from "../Components/Forms/Login";
import { useEffect, useState } from "react";

const auth = getAuth();

function DashoboardPage() {
  const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (authUser) => {
    if (authUser){
      setUser(authUser);
    } else {
      setUser(null);
    }
  });

  return () => unsubscribe();
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
