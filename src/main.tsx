import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Components/Forms/Signup.js";
import LeaginPage from "./Pages/LeaginPage.tsx";
import Login from "./Components/Forms/Login.jsx";
import DashoboardPage from "./Pages/DashoboardPage.tsx";
import NewPage from "./Dashboard/NewPage.js";
import Protected from "./Components/Forms/Protected.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LeaginPage />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/dashoboard",
        element: <Protected Component={DashoboardPage} />,
      },

      {
        path: "/newpage/:id",
        element: <NewPage />,
      },

      {
        path: "*",
        element: <div>❌ Page Not Found</div>,
      },
    ],
  },
]);



const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
