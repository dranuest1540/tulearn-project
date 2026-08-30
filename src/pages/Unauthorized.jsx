import { Link } from "react-router-dom";

function Unauthorized() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            <h1 className="text-5xl font-bold text-red-500">
                403
            </h1>

            <h2 className="text-2xl font-bold mt-3">
                Access Denied
            </h2>

            <p className="text-gray-500 mt-2">
                You don't have permission to access this page.
            </p>

            <Link to="/" className="mt-5 bg-secondary text-white px-5 py-2 rounded-lg">
                Back to Dashboard
            </Link>

        </div>
    );

}

export default Unauthorized;
