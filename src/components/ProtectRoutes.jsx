import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectRoutes = ({ children }) => {
  const isLoggedIn=useSelector((state)=>state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectRoutes;
