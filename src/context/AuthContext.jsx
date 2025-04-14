import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // to track loading state

  useEffect(() => {
    // Check if token exists in localStorage on initial load
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);  // Set the token from localStorage
    }
    setLoading(false);  // Set loading to false after checking token
  }, []);

  const login = (newToken) => {
    localStorage.setItem('token', newToken); // Store token in localStorage
    setToken(newToken); // Update state
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Clear token state
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
