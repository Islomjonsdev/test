import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Main from "../../components/Main/Main"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
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
