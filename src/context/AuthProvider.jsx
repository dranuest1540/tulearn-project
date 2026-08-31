import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    // USER
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");

        return savedUser ? JSON.parse(savedUser) : null;
    });

    // ACCESS TOKEN
    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem("accessToken") || null;
    });

    // ROLE
    const [role, setRole] = useState(() => {
        return localStorage.getItem("role") || null;
    });

    // AUTH STATUS
    const isAuthenticated = !!accessToken;

    // LOGIN
    const login = (data) => {
        // USERNAME FOR ADMIN : emilys && emilyspass
        const userRole = data.username === "emilys" ? "admin" : "user";

        setUser(data);
        setAccessToken(data.accessToken);
        setRole(userRole);

        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("role", userRole);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setRole(null);

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("role");
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, role, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}