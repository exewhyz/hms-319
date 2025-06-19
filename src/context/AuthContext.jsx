import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            setLoading(true);
            //api call to login
            const mockUser = {
                id: Date.now(),
                name: "Aniket raj",
                email: email,
                age: 15,
                gender: "M",
                mobile: 9876543210
            }
            setUser(mockUser);
            localStorage.setItem("user", mockUser);
        } catch (error) {
            setError("Login Failed: " + error.message);
            throw new Error("Login Failed: ", error)
        } finally {
            setLoading(false);
        }
    }

    const register = async (user) => {
        try {
            setLoading(true);
            //api call to register
            const mockUser = {
                id: Date.now(),
                ...user
            }
            delete mockUser.password;
            setUser(mockUser);
            localStorage.setItem("user", mockUser);
        } catch (error) {
            setError("Registration failed: " + error.message);
            throw new Error("Registration Failed: ", error)
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);