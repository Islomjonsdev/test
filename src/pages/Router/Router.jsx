import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../auth/Register/Register";
import Main from "../../components/Main/Main";
import ProtectRoute from "@/components/ProtectRoute/ProtectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Main />
      </ProtectRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
