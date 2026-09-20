import { createContext, useState } from "react";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );
  const [user, setUser] = useState(() => {
    const SavedUser = localStorage.getItem("curUser");
    return SavedUser ? JSON.parse(SavedUser) : {};
  });

  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        setLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default UserProvider;
