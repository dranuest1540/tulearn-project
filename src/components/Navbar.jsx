import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from "./Button";
import Search from "./Search";
import NavTo from "./NavTo"
import Logo from "./Logo";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { nama: 'Course', href: '#' },
        { nama: 'For Business', href: '#' },
        { nama: 'Pricing', href: '#' },
        { nama: 'Blog', href: '#' },
        { nama: 'About', href: '#' },
    ]

    return (
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 px-20 pt-5 pb-2.5 bg-white/95 flex items-center justify-between max-[992px]:items-start">

            {/* BURGER */}
            <button type="button" onClick={toggleNavbar} className="hidden max-[992px]:block order-1 mt-1.5 text-2xl text-primary cursor-pointer bg-transparent border-0">
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>

            {/* COLLAPSE NAVBAR */}
            <div className="w-full grid grid-cols-[auto_auto_auto] justify-between items-center max-[992px]:w-auto max-[992px]:flex max-[992px]:flex-col max-[992px]:items-start">

                {/* LOGO */}
                <Logo className='w-10' />

                {/* NAV MENU */}
                <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex max-[992px]:w-full`}>
                    <ul className="flex gap-6.25 font-bold text-black list-none m-0 p-0 max-[992px]:w-full max-[992px]:flex-col max-[992px]:gap-0 max-[992px]:text-start max-[992px]:py-5 max-[992px]:bg-white max-[992px]:border-t max-[992px]:border-[#ddd]">
                        {navLinks.map((navLink) => (
                            <NavTo key={navLink.nama} href={navLink.href} linkName={navLink.nama} />
                        ))}
                    </ul>
                </div>

                {/* NAV OPTION */}
                <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex justify-center items-center gap-2.5 max-[992px]:w-full max-[992px]:pb-5 max-[992px]:bg-white max-[480px]:flex-col`}>

                    {/* SEARCH */}
                    <Search />

                    {/* LOGIN */}
                    <Button to="/login" buttonName={`Log In`} className={`rounded-md border-secondary text-secondary hover:text-white hover:bg-secondary`} />

                    {/* SIGN UP */}
                    <Button to="/register" buttonName={`Sign Up`} className={`rounded-md border-primary bg-primary text-white hover:text-primary hover:bg-transparent`} />

                </div>

            </div>
        </nav>
    );
}

export default Navbar;