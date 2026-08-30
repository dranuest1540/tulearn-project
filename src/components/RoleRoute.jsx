import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function RoleRoute({ allowedRoles }) {
    const { isAuthenticated, role } = useAuth();

    // BELUM LOGIN
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // LOGIN TAPI ROLE TIDAK SESUAI
    if (!allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
}

export default RoleRoute;