import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleRoute from "./components/RoleRoute";
import StudentDashboard from "./pages/student/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

function App() {

    return (
        <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* UNAUTHENTICATED ROUTES */}
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* STUDENT ROUTES */}
            <Route element={<ProtectedRoute />}>
                <Route element={<RoleRoute allowedRoles={["user"]} />}>
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                </Route>
            </Route>

            {/* ADMIN ROUTES */}
            <Route element={<ProtectedRoute />}>
                <Route element={<RoleRoute allowedRoles={["admin"]} />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Route>
            </Route>
            
        </Routes>
    )
}

export default App
