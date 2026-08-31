import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCheckCircle, faClock, faBell, faPen, faTrash, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/useAuth";
import { getAssignments, createAssignment, updateAssignment, deleteAssignment } from "../../services/assignmentService";
import { getUserProfile, updateUserProfile } from "../../services/userService";

function Dashboard() {
    const { user, logout } = useAuth();

    // DATA
    const [profile, setProfile] = useState(null);
    const [assignments, setAssignments] = useState([]);
    const [posts, setPosts] = useState([]);

    // PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const postsPerPage = 3;

    // UI STATE
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // ADD ASSIGNMENT
    const [showAddAssignment, setShowAddAssignment] = useState(false);
    const [newAssignment, setNewAssignment] = useState("");

    // EDIT ASSIGNMENT
    const [editingAssignment, setEditingAssignment] = useState(null);

    // EDIT PROFILE
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [profileForm, setProfileForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    // FETCH DASHBOARD DATA
    useEffect(() => {
        if (!user?.id) {
            return;
        }

        const fetchDashboard = async () => {
            try {
                setLoading(true);
                setError("");

                const [profileData, assignmentData] = await Promise.all([
                    getUserProfile(user.id),
                    getAssignments(user.id),
                ]);

                setProfile(profileData);
                setAssignments(assignmentData.todos);

            } catch (error) {
                console.error(error);
                setError("Failed to load dashboard data.");
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();

    }, [user?.id]);

    // FETCH POSTS WITH PAGINATION
    useEffect(() => {
        const skip = (currentPage - 1) * postsPerPage;

        fetch(
            `${import.meta.env.VITE_API_URL}/posts?limit=${postsPerPage}&skip=${skip}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch learning materials");
            }
            return response.json();
        }).then((data) => {
            setPosts(data.posts);
            setTotalPosts(data.total);
        }).catch((error) => {
            console.error(error);
            setError("Failed to load learning materials.");
        });

    }, [currentPage]);

    // PAGINATION CALCULATION
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    // CHANGE PAGE
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) {
            return;
        }
        setCurrentPage(page);

        // SCROLLBACK
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    // PAGINATION NUMBERS
    const getPaginationNumbers = () => {
        const pages = [];

        // IF PAGE NULL
        if (totalPages === 0) {
            return pages;
        }

        // IF PAGE MINIMUM
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        // FIRST PAGE
        pages.push(1);

        // LEFT DOTS
        if (currentPage > 3) {
            pages.push("...");
        }

        // PAGE AROUND CURRENT PAGE
        const startPage = Math.max(
            2,
            currentPage - 1
        );

        const endPage = Math.min(
            totalPages - 1,
            currentPage + 1
        );

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // RIGHT DOTS
        if (currentPage < totalPages - 2) {
            pages.push("...");
        }

        // LAST PAGE
        pages.push(totalPages);

        return pages;
    };

    // STATISTICS
    const completed =
        assignments.filter(
            (assignment) =>
                assignment.completed
        ).length;

    const pending =
        assignments.filter(
            (assignment) =>
                !assignment.completed
        ).length;

    const progress =
        assignments.length > 0
            ? Math.round(
                (completed /
                    assignments.length) *
                100
            )
            : 0;

    // ADD ASSIGNMENT
    const handleAddAssignment = async () => {

        if (!newAssignment.trim()) {
            return;
        }

        try {
            const data =
                await createAssignment(
                    newAssignment,
                    user.id
                );

            setAssignments((previous) => [
                data,
                ...previous,
            ]);

            setNewAssignment("");
            setShowAddAssignment(false);

        } catch (error) {
            console.error(error);
        }
    };

    // EDIT ASSIGNMENT
    const handleEditAssignment = async (assignment) => {

        try {
            const data =
                await updateAssignment(
                    assignment.id,
                    {
                        todo: assignment.todo,
                        completed: assignment.completed,
                    }
                );

            setAssignments((previous) =>
                previous.map((item) =>
                    item.id === data.id
                        ? data
                        : item
                )
            );

            setEditingAssignment(null);

        } catch (error) {
            console.error(error);
        }
    };

    // DELETE ASSIGNMENT
    const handleDeleteAssignment = async (id) => {

        const confirmation = window.confirm("Delete this assignment?");

        if (!confirmation) {
            return;
        }

        try {
            await deleteAssignment(id);
            setAssignments((previous) =>
                previous.filter(
                    (assignment) =>
                        assignment.id !== id
                )
            );

        } catch (error) {
            console.error(error);
        }
    };

    // EDIT PROFILE
    const openEditProfile = () => {
        setProfileForm({
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            phone: profile.phone,
        });
        setShowEditProfile(true);
    };

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setProfileForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };


    const handleUpdateProfile = async () => {
        try {
            const data = await updateUserProfile(
                user.id,
                profileForm
            );

            setProfile((previous) => ({
                ...previous,
                ...data,
            }));

            setShowEditProfile(false);

        } catch (error) {
            console.error(error);
        }
    };

    // LOADING
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="mt-4 text-gray-500">
                        Loading dashboard...
                    </p>
                </div>
            </div>
        );
    }

    // ERROR
    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    {error}
                </p>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-50">

            {/* ================= HEADER ================= */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <div>
                        <h1 className="text-2xl font-bold text-secondary">TuLearn</h1>
                        <p className="text-xs text-gray-400">Learning Management System</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <FontAwesomeIcon icon={faBell} className="text-gray-500" />

                        <div className="flex items-center gap-3">
                            <img src={profile?.image} alt="Profile" className="w-10 h-10 rounded-full" />
                            <div className="hidden sm:block">
                                <p className="font-semibold text-sm">
                                    {profile?.firstName}{" "}
                                    {profile?.lastName}
                                </p>
                                <p className="text-xs text-gray-400">Student</p>
                            </div>
                        </div>

                        <button onClick={logout} className="text-red-500 text-sm font-medium">
                            Logout
                        </button>
                    </div>

                </div>
            </header>

            {/* ================= MAIN ================= */}
            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* WELCOME */}
                <section className="mb-8">
                    <p className="text-gray-500">Learning Dashboard</p>
                    <h2 className="text-3xl font-bold mt-1">
                        Welcome back,{" "}
                        <span className="text-secondary">{profile?.firstName}</span>
                        {" "}👋
                    </h2>
                    <p className="text-gray-500 mt-2">Manage your assignments and continue your learning journey.</p>
                </section>

                {/* ================= STATISTICS ================= */}
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                        <p className="text-sm text-gray-500">Total Assignments</p>
                        <h3 className="text-3xl font-bold mt-2">
                            {assignments.length}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                        <p className="text-sm text-gray-500">Completed</p>
                        <h3 className="text-3xl font-bold mt-2 text-green-500">
                            {completed}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                        <p className="text-sm text-gray-500">Pending</p>
                        <h3 className="text-3xl font-bold mt-2 text-orange-500">
                            {pending}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                        <p className="text-sm text-gray-500">Progress</p>
                        <h3 className="text-3xl font-bold mt-2 text-secondary">
                            {progress}%
                        </h3>
                    </div>

                </section>

                {/* ================= PROFILE ================= */}
                <section className="bg-white border rounded-2xl p-6 mb-8">

                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h2 className="text-xl font-bold">My Profile</h2>
                            <p className="text-sm text-gray-500">Your account information</p>
                        </div>

                        <button onClick={openEditProfile} className="text-secondary font-semibold flex items-center gap-2">
                            <FontAwesomeIcon icon={faPen} /> Edit Profile
                        </button>
                    </div>


                    <div className="flex items-center gap-5">
                        <img src={profile?.image} alt="Profile" className="w-20 h-20 rounded-full" />

                        <div>
                            <h3 className="text-xl font-bold">
                                {profile?.firstName}{" "}
                                {profile?.lastName}
                            </h3>
                            <p className="text-gray-500">@{profile?.username}</p>
                            <p className="text-gray-500">{profile?.email}</p>
                            <p className="text-gray-500">{profile?.phone}</p>
                        </div>
                    </div>

                </section>

                {/* ================= ASSIGNMENTS ================= */}
                <section className="bg-white border rounded-2xl p-6 mb-8">

                    <div className="flex justify-between items-center mb-5">
                        <div>
                            <h2 className="text-xl font-bold">My Assignments</h2>
                            <p className="text-sm text-gray-500">Manage your assignments</p>
                        </div>

                        <button onClick={() => setShowAddAssignment(true)} className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2">
                            <FontAwesomeIcon icon={faPlus} /> Add Assignment
                        </button>
                    </div>

                    {/* ADD FORM */}
                    {showAddAssignment && (
                        <div className="bg-slate-50 border rounded-xl p-4 mb-5">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    value={newAssignment}
                                    onChange={(event) =>
                                        setNewAssignment(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Enter assignment..."
                                    className="flex-1 border rounded-lg px-4 py-2"
                                />

                                <button onClick={handleAddAssignment} className="bg-green-500 text-white px-4 rounded-lg">Add</button>
                                <button onClick={() => setShowAddAssignment(false)} className="border px-4 rounded-lg">
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ASSIGNMENT LIST */}
                    <div className="space-y-3">

                        {assignments.map((assignment) => (
                            <div key={assignment.id} className="border rounded-xl p-4">

                                {editingAssignment?.id === assignment.id ? (
                                    <div className="flex gap-3">

                                        <input
                                            type="text"
                                            value={editingAssignment.todo}
                                            onChange={(event) => setEditingAssignment({
                                                ...editingAssignment,
                                                todo: event.target.value,
                                            })
                                            }
                                            className="flex-1 border rounded-lg px-4 py-2"
                                        />

                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={editingAssignment.completed}
                                                onChange={(event) => setEditingAssignment({
                                                    ...editingAssignment,
                                                    completed:
                                                        event.target.checked,
                                                })
                                                }
                                            />
                                            Done
                                        </label>

                                        <button className="bg-secondary text-white px-4 rounded-lg"
                                            onClick={() => handleEditAssignment(
                                                editingAssignment
                                            )}
                                        >
                                            Save
                                        </button>

                                        <button className="border px-4 rounded-lg" onClick={() => setEditingAssignment(null)}>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-center">

                                        <div className="flex items-center gap-3">
                                            <FontAwesomeIcon
                                                icon={assignment.completed ? faCheckCircle : faClock}
                                                className={assignment.completed ? "text-green-500" : "text-orange-500"}
                                            />

                                            <div>
                                                <p className={
                                                    assignment.completed
                                                        ? "line-through text-gray-400"
                                                        : "font-medium"
                                                }
                                                >
                                                    {assignment.todo}
                                                </p>
                                                <p className="text-xs text-gray-400">ID #{assignment.id}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button className="text-blue-500"
                                                onClick={() => setEditingAssignment(
                                                    assignment
                                                )}
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>

                                            <button className="text-red-500"
                                                onClick={() =>
                                                    handleDeleteAssignment(
                                                        assignment.id
                                                    )
                                                }
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= MATERIAL ================= */}
                <section>

                    <div className="mb-5">
                        <h2 className="text-xl font-bold">Learning Materials</h2>
                        <p className="text-sm text-gray-500">Explore learning content</p>
                    </div>

                    {/* MATERIAL LIST */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {posts.map((post) => (

                            <article key={post.id} className="bg-white border rounded-2xl p-6">
                                <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </div>
                                <h3 className="font-bold mt-4">{post.title}</h3>
                                <p className="text-sm text-gray-500 mt-2 line-clamp-3">{post.body}</p>
                            </article>

                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="flex justify-center items-center gap-2 mt-8">

                        {/* PREVIOUS */}
                        <button onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-2 rounded-lg border transition ${currentPage === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-secondary hover:text-white"}`}
                        >
                            Prev
                        </button>

                        {/* PAGE NUMBERS */}
                        {getPaginationNumbers().map((page, index) => {

                            if (page === "...") {
                                return (
                                    <span key={`dots-${index}`} className="px-2 text-gray-400">...</span>
                                );
                            }

                            return (
                                <button key={page} onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 rounded-lg transition ${currentPage === page ? "bg-secondary text-white" : "border hover:bg-gray-100"}`}
                                >
                                    {page}
                                </button>
                            );
                        })}

                        {/* NEXT */}
                        <button onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-2 rounded-lg border transition ${currentPage === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-secondary hover:text-white"}`}
                        >
                            Next
                        </button>

                    </div>
                </section>
            </main>

            {/* ================= EDIT PROFILE MODAL ================= */}
            {showEditProfile && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-lg">

                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Edit Profile</h2>
                            <button onClick={() => setShowEditProfile(false)} className="text-gray-400">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        <div className="space-y-4 mt-5">
                            <input
                                name="firstName"
                                value={profileForm.firstName}
                                onChange={handleProfileChange}
                                placeholder="First Name"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="lastName"
                                value={profileForm.lastName}
                                onChange={handleProfileChange}
                                placeholder="Last Name"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="email"
                                type="email"
                                value={profileForm.email}
                                onChange={handleProfileChange}
                                placeholder="Email"
                                className="w-full border rounded-lg px-4 py-3"
                            />

                            <input
                                name="phone"
                                value={profileForm.phone}
                                onChange={handleProfileChange}
                                placeholder="Phone"
                                className="w-full border rounded-lg px-4 py-3"
                            />
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button onClick={() => setShowEditProfile(false)} className="border px-5 py-2 rounded-lg">
                                Cancel
                            </button>
                            <button onClick={handleUpdateProfile} className="bg-secondary text-white px-5 py-2 rounded-lg">
                                Save Changes
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );

}

export default Dashboard;
