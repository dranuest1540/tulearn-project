import AuthBackground from "../layouts/AuthBackground"
import { AUTH_CONTENT } from "../constant/authHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
    // PASSWORD HIDDEN/VISIBLE
    const [isVisible, setIsVisible] = useState(false);

    const togglePassword = () => {
        setIsVisible(!isVisible);
    };

    return (
        <AuthBackground heroData={AUTH_CONTENT.login}>

            {/* FORMS */}
            <form action="" method="post" className="mt-10">
                <label htmlFor="email" className="font-bold block mb-2">Email Address</label>
                <div className="relative">
                    <FontAwesomeIcon icon={faEnvelope} className="absolute top-[35%] left-4 text-gray-400" />
                    <input type="email" id="email" className="w-full border border-black/30 rounded-lg py-3 pl-12 pr-4 transition duration-200 focus:outline-0 focus:ring-4 focus:ring-blue-400" placeholder="Enter your email" autoComplete="email" />
                </div>
                <label htmlFor="password" className="font-bold block mt-5 mb-2">Password</label>
                <div className="relative">
                    <FontAwesomeIcon icon={faLock} className="absolute top-[35%] left-4 text-gray-400" />
                    <input type={isVisible ? "text" : "password"} id="password" className="w-full border border-black/30 rounded-lg py-3 pl-12 pr-12 transition duration-200 focus:outline-0 focus:ring-4 focus:ring-blue-400" placeholder="Enter your password" autoComplete="current-password" />
                    <button id="togglePassword" type="button" onClick={togglePassword} className="absolute top-[30%] right-4 text-gray-400 hover:text-blue-600">
                        <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                    </button>
                </div>

                <div className="flex justify-between items-center mt-5">
                    <label htmlFor="checkbox" className="text-sm flex gap-2">
                        <input type="checkbox" id="checkbox" className="accent-secondary" />
                        Remember me
                    </label>
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-300 font-bold">Forgot password?</a>
                </div>

                <button type="submit" className="w-full bg-secondary hover:bg-secondary-800 py-2 rounded-lg text-white mt-5">Login</button>
            </form>

            {/* AUTHENTICATION */}
            <div className="my-5 flex items-center gap-3 whitespace-nowrap text-slate-400">
                <hr className="w-full" />
                <p className="text-sm">or continue with</p>
                <hr className="w-full" />
            </div>

            <div className="my-5 flex justify-between gap-5">
                <a href="#" className="rounded-lg py-3 w-full flex items-center justify-center gap-2 shadow-lg border border-slate-400 hover:ring-1 hover:ring-secondary">
                    <img src={`${import.meta.env.BASE_URL}assets/icons/google-icons.png`} className="w-5 h-5" />
                    Google
                </a>
                <a href="#" className="rounded-lg py-3 w-full flex items-center justify-center gap-2 shadow-lg border border-slate-400 hover:ring-1 hover:ring-secondary">
                    <img src={`${import.meta.env.BASE_URL}assets/icons/facebook-icons.png`} className="w-5 h-5" />
                    Facebook
                </a>
            </div>

            {/* NAVIGATION */}
            <nav className="mt-10 text-center">
                <p className="text-base">
                    Don't have an account?
                    <Link to="/register" className="text-blue-500 hover:text-blue-300 font-bold"> Sign Up</Link> or
                    <Link to="/" className="text-blue-500 hover:text-blue-300 font-bold"> Back.</Link>
                </p>
            </nav>

        </AuthBackground>
    )
}

export default Login