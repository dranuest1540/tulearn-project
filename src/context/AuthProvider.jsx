import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");

        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem("accessToken");
    });

    const [role, setRole] = useState(() => {
        return localStorage.getItem("accessToken");
    });

    const isAuthenticated = !!accessToken;

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
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                role,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}