import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <>
            <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 pt-5 pb-2.5 px-20 flex items-center justify-center bg-white/95">
                <div className="text-2xl cursor-pointer text-primary hidden">
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className="grid grid-cols-[auto_auto_auto] justify-between items-center w-full">
                    <div>
                        <a href="#" className="flex items-center justify-center gap-1.25 no-underline">
                            <img src="./assets/banner.png" alt="Logo" className="w-10" />
                            <span className="text-2xl font-manrope font-bold text-primary">
                                Tu<span className="text-secondary">Learn</span>
                            </span>
                        </a>
                    </div>

                    <div className="block">
                        <ul className="flex gap-6.25 font-bold text-black">
                            <li className="hover:text-secondary"><a href="#">Course</a></li>
                            <li className="hover:text-secondary"><a href="#">For Business</a></li>
                            <li className="hover:text-secondary"><a href="#">Pricing</a></li>
                            <li className="hover:text-secondary"><a href="#">Blog</a></li>
                            <li className="hover:text-secondary"><a href="#">About</a></li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center gap-2.5">
                        <form action="" method="get" className="py-1.25 px-2.5 rounded-md bg-[rgb(246,247,249)] text-[#7b8293] flex items-center">
                            <FontAwesomeIcon icon={faMagnifyingGlass}  />
                            <input type="text" placeholder="Search courses..." className="outline-0 p-1.25 text-black text-sm" />
                        </form>

                        <a href="./view/login.html" className="border rounded-md p-1.75 decoration-0 text-secondary font-bold transition-all ease-in duration-100 text-center hover:text-white hover:bg-secondary">
                            Log In
                        </a>

                        <a href="./view/signup.html" className="border rounded-md bg-primary p-1.75 decoration-0 text-white font-bold transition-all ease-in duration-100 text-center hover:bg-transparent hover:text-primary">
                            Sign Up
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar