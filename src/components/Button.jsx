import { Link } from "react-router-dom";

function Button({ to, buttonName, className}) {
    return (        
        <Link to={to} className={`${className} border py-1.75 px-3 no-underline font-bold text-center transition-all duration-100 ease-in max-[480px]:w-full`}>
            {buttonName}
        </Link>        
    )
}

export default Button