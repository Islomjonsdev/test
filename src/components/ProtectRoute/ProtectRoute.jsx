import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const token = localStorage.getItem("usertoken");
  return token ? children : <Navigate to={"/login"} replace />;
};

export default ProtectRoute;
