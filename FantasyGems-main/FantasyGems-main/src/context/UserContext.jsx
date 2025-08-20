import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // store all registered users
  const [currentUser, setCurrentUser] = useState(null); // logged-in user

  // Register a new user
  const registerUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  // Login check
  const loginUser = (loginData) => {
    const foundUser = users.find((u) => {
      return (
        u.userpassword === loginData.userpassword &&
        ((loginData.useremail && u.useremail === loginData.useremail) ||
          (loginData.usernumber && u.usernumber === loginData.usernumber))
      );
    });

    if (foundUser) {
      setCurrentUser(foundUser);
      return true; // success
    } else {
      return false; // failed
    }
  };

  // Logout
  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{ users, currentUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
