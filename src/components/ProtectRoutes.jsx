import { userContext } from "./userContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const ProtectRoutes = ({ children }) => {
  const { isLoggedIn } = useContext(userContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectRoutes;
