import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [activeTab, setActiveTab] = useState(true);
  const [user, setUser] = useState(null);
  console.log(user);
  const authInfo = {
    activeNav,
    setActiveNav,
    activeTab,
    setActiveTab,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
